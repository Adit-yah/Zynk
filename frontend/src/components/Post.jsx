import React, { useState, useEffect } from "react";
import { FaRegComment, FaHeart, FaCommentDots } from "react-icons/fa";
import axiosClient from "../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import {
  clearComment,
  setComments,
  updatePostsDetails,
} from "../feature/postSlice";
import { getLoginUser } from "../feature/userSlice";

export default function Post({
  post,
  setCommentPanel,
  lenis,
  setPost,
  commentCount,
}) {
  const dispatch = useDispatch();
  const loginUser = useSelector(getLoginUser);
  const [expanded, setExpanded] = useState(false);
  const [maxCaptionLength, setMaxCaptionLength] = useState(100);
  const [likeCount, setLikeCount] = useState(post.likeCount);

  // Adjust caption length based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMaxCaptionLength(120); // Desktop
      else if (window.innerWidth >= 640) setMaxCaptionLength(150); // Tablet
      else setMaxCaptionLength(100); // Mobile
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleLike(postId) {
    axiosClient.post("posts/like", { post: postId }).then((res) => {
      setLikeCount(res.data.updatedPost.likeCount);
      dispatch(updatePostsDetails(res.data.updatedPost));
    });
  }

  function formatMention(post) {
    if (post.mentions?.length && post.mentions[0]?.username) {
      return `@${post.mentions.map((u) => u.username).join(", @")}`;
    }

    if (post.temporaryMentionUserName?.length) {
      return `@${post.temporaryMentionUserName
        .map((u) => u.trim())
        .join(", @")}`;
    }

    return "";
  }

  function commentHandler(post) {
    dispatch(clearComment());
    setPost(post);
    setCommentPanel(true);
    lenis.stop();

    post.commentCount
      ? axiosClient
          .get("/posts/getComments", {
            params: { postId: post._id, limit: 15, skip: 0 },
          })
          .then((res) => {
            dispatch(setComments(res.data.comments));
          })
      : "";
  }
 
  const  loginUSerPost = loginUser._id === post.user._id ? true : false

  const isLong = post.caption.length > maxCaptionLength;
  const captionToShow = expanded
    ? post.caption
    : post.caption.slice(0, maxCaptionLength);

  return (
    <div className="bg-white dark:bg-black rounded-md overflow-hidden shadow-sm">
      {/* User Info */}
      <div className="flex items-center gap-3 px-4 py-2">
        <img
          src={  loginUSerPost ? loginUser.image : post.user.image }
          alt={  loginUSerPost ? loginUser.username : post.user.username}
          className="h-11 aspect-square rounded-full object-cover"
        />
        <span className="font-semibold text-text-light dark:text-text-dark">
          { loginUSerPost ? loginUser.username : post.user.username}
        </span>
        <button className="ml-auto text-text-light/80 dark:text-text-dark/80 text-2xl">
          <FaCommentDots />
        </button>
      </div>

      {/* Post Image */}
      <div className="w-full mx-auto  max-h-[500px] overflow-hidden">
        <img
          src={post.image}
          alt="Post"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex gap-6">
          <button
            onClick={() => handleLike(post._id)}
            className="flex items-center gap-1 text-2xl cursor-pointer text-text-light/75 dark:text-text-dark/75"
          >
            <div className="flex flex-col items-center">
              <FaHeart className="text-red-500" />
              <p className="text-sm font-medium">{likeCount} likes</p>
            </div>
          </button>
          <button
            onClick={() => {
              commentHandler(post);
            }}
            className="flex items-center gap-1 text-2xl cursor-pointer text-text-light/75 dark:text-text-dark/75"
          >
            <div className="flex flex-col items-center">
              <FaRegComment />
              <p className="text-sm font-medium">
                {commentCount
                  ? (commentCount.postId == post._id
                    ? commentCount.count
                    : post.commentCount)
                  : post.commentCount}{" "}
                comments
              </p>
            </div>
          </button>
        </div>
        <div className="text-text-light/80 dark:text-text-dark/80 text-sm">
          {formatMention(post)}
        </div>
      </div>

      {/* Caption */}
      <div className="px-4 pb-5">
        <p className="text-zinc-700 dark:text-gray-300 text-base tracking-tight">
          {captionToShow}
          {isLong && !expanded && "…"}
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-1 text-primary font-medium dark:text-blue-500 cursor-pointer"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
}
