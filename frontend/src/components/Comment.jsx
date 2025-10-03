import React, { useEffect, useState } from "react";
import { FaCircleArrowDown, FaCross, FaShopSlash } from "react-icons/fa6";
import axiosClient from "../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getComments,
  updatePostsDetails,
} from "../feature/postSlice";

const Comment = ({
  setCommentPanel,
  lenis,
  left,
  post,
  setCommentCount,
  commentCount,
}) => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const comment = useSelector(getComments);

  useEffect(() => {
    isVisible === false ? setIsVisible(true) : "";
    setComments(comment);
  }, [comment]);

  function handleComment() {
    setIsVisible(false);
    setTimeout(() => {
      setCommentPanel(false);
      lenis.start();
    }, 300);
  }

  async function createComment() {
    if ( !commentText.length){return}
    const data = {
      post: post._id,
      text: commentText,
    };
    setCommentText("");
    axiosClient.post("posts/comment", data).then((res) => {
      setCommentCount({ postId: post._id, count: res.data.pst.commentCount });
      dispatch(addComment(res.data.comment));
      dispatch(updatePostsDetails(res.data.pst));
    });
  }

  function renderComments({comments , post , commentCount}) {
    const finalComment =
      post._id == commentCount?.postId ? commentCount.count : post.commentCount;

    if (finalComment) {
      return comments.length ? (
        comments.map((comment) => (
          <div key={comment._id} className="px-2">
            <div className="flex gap-2 items-start">
              <img
                src={comment.user.image}
                alt={"user"}
                className=" aspect-square h-9 bg-gray-100 dark:bg-zinc-800 rounded-full object-cover"
              />
              <div className=" ">
                <p className="text-ld">{comment.user.username}</p>
                <p className=" w-full  text-base text-zinc-600 dark:text-zinc-400 h-fit ">
                  {comment.text}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className=" p-3 w-fit mx-auto text-sm font-semibold text-zinc-500 dark:text-gray-200">
          Loading Comments....
        </div>
      );
    } 
    else {
      return (
        <div className="p-3 w-fit mx-auto text-sm font-semibold text-zinc-500 dark:text-gray-200">
          {" "}
          No comments yet...
        </div>
      );
    }
  }

  return (
    <div
      style={{ left: left + "px" }}
      className={`fixed bottom-0 flex flex-col bg-gray-50 dark:bg-zinc-900  border z-[100]  pt-3 border-gray-400 dark:border-zinc-600   h-screen max-h-[85vh] self-center rounded-t-2xl w-screen  md:max-w-[450px] 
        transition-transform duration-300 ease-out ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
    >
      <header className="items-center px-3 text-xl font-bold justify-between gap-1.5 flex border-b dark:border-zinc-400/30 border-gray-600/30 pb-3">
        <h1>Comments</h1>
        <FaCircleArrowDown
          className="cursor-pointer"
          onClick={() => {
            handleComment();
          }}
        />
      </header>

      {/* comments here */}
      <div className=" pb-10 flex flex-col px-3 gap-3  mt-3 [&::-webkit-scrollbar]:hidden overflow-scroll h-full ">
        {renderComments({comments , post , commentCount})}
      </div>

      {/* comment input */}
      <div className=" h-20 items-center flex gap-1 px-3 dark:bg-zinc-800 bg-white shadow w-full ">
        <input
          className="rounded-lg w-full p-2 dark:bg-zinc-700 bg-gray-300 outline-0 "
          type="text"
          name="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Comment here"
        />
        <button
          onClick={() => {
            createComment();
          }}
          disabled={!commentText.length}
          className="p-2 bg-primary dark:bg-secondary text-sm font-semibold rounded-lg text-white active:scale-95 cursor-pointer"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Comment;
