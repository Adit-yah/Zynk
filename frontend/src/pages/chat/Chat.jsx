import React, { useEffect, useState } from "react";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getLoginUser } from "../../feature/userSlice";
import { useSelector } from "react-redux";
import BackChevron from "../../svg/BackChevron";

// Logged-in user (mock, replace with auth state)

// Sample chats
const chats = [
  {
    id: "c1",
    user: {
      _id: "u1",
      username: "Alice",
      image:
        "https://images.unsplash.com/photo-1508138221679-760a23a2285b?w=60",
    },
    lastMessage: "Hey! How are you?",
  },
  {
    id: "c2",
    user: {
      _id: "u2",
      username: "Bob",
      image:
        "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png",
    },
    lastMessage: "Check out the new post!",
  },
  {
    id: "c3",
    user: {
      _id: "u3",
      username: "Charlie",
      image:
        "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png",
    },
    lastMessage: "Loving Zynk updates! 💜",
  },
];

export default function ChatPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const loginUser = useSelector(getLoginUser);

  const filteredChats = chats.filter((chat) =>
    chat.user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="main-content flex-1 flex flex-col bg-zinc-100/80 dark:bg-zinc-900 h-screen overflow-y-auto ">
      <div className="main-scroll flex flex-col flex-1 shadow-md w-screen  md:max-w-[450px] mx-auto transition-colors bg-white dark:bg-black">
        {/* Header with logged-in user */}
        <header className="sticky top-0 left-0 flex items-center gap-1 px-2  py-4 bg-white dark:bg-black  z-10">
          {/* Back button (only on mobile) */}
          <button onClick={() => navigate(-1)}>
            <BackChevron
              size={28}
              className="md:hidden  cursor-pointer text-primary dark:text-secondary"
            />
          </button>
          <p className="font-semibold text-xl text-text-light dark:text-text-dark">
            {loginUser.username}
          </p>
        </header>

        {/* Search bar */}
        <div className="flex items-center gap-2 px-4 pb-2 bg-white dark:bg-black sticky top-[60px] z-10">
          {/* <FaSearch className="text-gray-500 dark:text-gray-400 text-lg" /> */}
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 p-2 rounded-lg bg-gray-100/80 dark:bg-zinc-900/80 outline-none text-text-light dark:text-text-dark"
          />
        </div>

        {/* Chat list */}
        <div className="flex-1 overflow-y-auto divide-y divide-gray-200 dark:divide-gray-700">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              className="flex items-center gap-4 px-4 py-3 cursor-pointer hover:bg-gray-100/50 dark:hover:bg-zinc-800/50"
              onClick={() => navigate(`/chat/${chat.user._id}`)}
            >
              <img
                src={chat.user.image}
                alt={chat.user.username}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold text-text-light dark:text-text-dark">
                  {chat.user.name}
                </p>
                <p className="text-text-light/70 dark:text-text-dark/70 text-sm truncate">
                  {chat.lastMessage}
                </p>
              </div>
            </div>
          ))}

          {filteredChats.length === 0 && (
            <p className="p-4 text-center text-text-light/70 dark:text-text-dark/70">
              No chats found
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
