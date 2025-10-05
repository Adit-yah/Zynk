import { useEffect, useRef, useState } from "react";
import Post from "../../components/Post";
import axiosClient from "../../utils/axios";
import Comment from "../../components/Comment";
import { getPosts, setPosts } from "../../feature/postSlice";
import { useDispatch, useSelector } from "react-redux";
import useLenis from "../../hooks/useLenis";

export default function HomePage() {
  const dispatch = useDispatch();
  const reduxPosts = useSelector(getPosts);
  const [posts, setPostsS] = useState([]);
  const [post, setPost] = useState('')
  const [commentPanel, setCommentPanel] = useState(false);
  const [commentCount , setCommentCount] = useState(null)
  const [left, setLeft] = useState(0);

  const postContainerRef = useRef(null);

  const lenis = useLenis(".main-content", ".main-scroll");


  // for fetching posts
  useEffect(() => {
    reduxPosts.length > 0
      ? setPostsS(reduxPosts)
      : axiosClient.get("/posts?skip=0&limit=10").then((res) => {
        dispatch(setPosts(res.data.updatedPosts));
        setPostsS(res.data.updatedPosts);
        });
  }, []);

  // for left dimension of comment component
  useEffect(() => {
    if (!postContainerRef.current) return;

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        const dimension = postContainerRef.current.getBoundingClientRect();
        setLeft(dimension.left);
      } else {
        setLeft(0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [postContainerRef]);

  return (
    <>
      <main
        className=" main-content  overflow-scroll flex-1 flex flex-col bg-zinc-100/80  dark:bg-zinc-900  md:pt-0 pb-[50px] md:pb-0" // padding-bottom for mobile nav
      >
        <div className="  flex-1  ">
          <div
            ref={postContainerRef}
            className=" space-y-2 py-1 px-2 sm:px-0 main-scroll   w-screen sm:max-w-[550px] md:max-w-[450px]  mx-auto"
          >
            {posts.length > 0 ? (
              posts.map((post) => (
                <Post
                  key={post._id}
                  post={post}
                  commentPanel={commentPanel}
                  commentCount={commentCount}
                  setCommentPanel={setCommentPanel}
                  setPost={setPost}
                  lenis={lenis}
                />
              ))
            ) : (
              <h1 className=" text-gray-400 dark:text-zinc-400 w-fit mx-auto">
                Loading posts
              </h1>
            )}
          </div>
        </div>
      </main>
      {commentPanel ? (
        <Comment
          lenis={lenis}
          left={left}
          post={post}
          commentCount={commentCount}
          setCommentCount={setCommentCount}
          setCommentPanel={setCommentPanel}
        />
      ) : (
        ""
      )}
    </>
  );
}
