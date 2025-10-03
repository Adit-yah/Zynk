import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { FaTh, FaUserTag } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getLoginUser } from "../../feature/userSlice";
import MenuIcon from "../../svg/MenuIcon";
import EditProfile from "./EditProfile";
import  useLenis from '../../hooks/useLenis'
import axiosClient from "../../utils/axios";

export default function ProfilePage() {
  const user = useSelector(getLoginUser);
  //  const   posts = [
  //       {
  //     id: 1,
  //     user: {
  //       _id: "u1",
  //       name: "Alice",
  //       image:
  //         "https://images.unsplash.com/photo-1508138221679-760a23a2285b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww",
  //     },
  //     image:
  //       "https://ik.imagekit.io/6vgubqn5s/posts/711b7800-793d-4150-a1d1-f4bcecf8ea83_v3JRelm8_",
  //     caption: "Just finished my new project! 🚀 Loving Zynk.",
  //     likeCount: 12,
  //     commentCount: 0,
  //     mentions: [
  //       { _id: "u2", name: "Bob" },
  //       { _id: "u3", name: "Charlie" },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     user: {
  //       _id: "u2",
  //       name: "Bob",
  //       image:
  //         "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png.jpeg?fit=880%2C769&ssl=1",
  //     },
  //     image:
  //       "https://ik.imagekit.io/6vgubqn5s/posts/34e6da77-b78c-4697-b93b-2b089ca82bec_sVkuZK3er?updatedAt=1754301992668",
  //     caption: "Check out this amazing view! 🌄 #Zynk",
  //     likeCount: 34,
  //     commentCount: 0,
  //     mentions: [],
  //   },
  //   {
  //     id: 3,
  //     user: {
  //       _id: "u3",
  //       name: "Charlie",
  //       image:
  //         "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png.jpeg?fit=880%2C769&ssl=1",
  //     },
  //     image:
  //       "https://ik.imagekit.io/6vgubqn5s/posts/e18b494d-fa14-4ab0-8ae6-5fe6d9f29162_tHCplu5jj",
  //     caption: "Loving the dark mode on Zynk! 💜",
  //     likeCount: 20,
  //     commentCount: 0,
  //     mentions: [{ _id: "u1", name: "Alice" }],
  //   },
  //   {
  //     id: 4,
  //     user: {
  //       _id: "u4",
  //       name: "Diana",
  //       image:
  //         "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png.jpeg?fit=880%2C769&ssl=1",
  //     },
  //     image:
  //       "https://ik.imagekit.io/6vgubqn5s/posts/88b37f27-5255-439d-8018-6690deb62f32_GEVnnMkQD",
  //     caption:
  //       "Weekend vibes 😎 #Relax #Zynk asdf adf sdf jkl aditya asd achimanya sdf sadklieoas sdlk jalliodf askldfjaskl a asdf a er a a efasd fj",
  //     likeCount: 5,
  //     commentCount: 0,
  //     mentions: [],
  //   },

  //   {
  //     id: 2,
  //     user: {
  //       _id: "u2",
  //       name: "Bob",
  //       image:
  //         "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png.jpeg?fit=880%2C769&ssl=1",
  //     },
  //     image:
  //       "https://ik.imagekit.io/6vgubqn5s/posts/34e6da77-b78c-4697-b93b-2b089ca82bec_sVkuZK3er?updatedAt=1754301992668",
  //     caption: "Check out this amazing view! 🌄 #Zynk",
  //     likeCount: 34,
  //     commentCount: 0,
  //     mentions: [],
  //   },
  //   {
  //     id: 3,
  //     user: {
  //       _id: "u3",
  //       name: "Charlie",
  //       image:
  //         "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png.jpeg?fit=880%2C769&ssl=1",
  //     },
  //     image:
  //       "https://ik.imagekit.io/6vgubqn5s/posts/e18b494d-fa14-4ab0-8ae6-5fe6d9f29162_tHCplu5jj",
  //     caption: "Loving the dark mode on Zynk! 💜",
  //     likeCount: 20,
  //     commentCount: 0,
  //     mentions: [{ _id: "u1", name: "Alice" }],
  //   },
  //   {
  //     id: 4,
  //     user: {
  //       _id: "u4",
  //       name: "Diana",
  //       image:
  //         "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png.jpeg?fit=880%2C769&ssl=1",
  //     },
  //     image:
  //       "https://ik.imagekit.io/6vgubqn5s/posts/88b37f27-5255-439d-8018-6690deb62f32_GEVnnMkQD",
  //     caption:
  //       "Weekend vibes 😎 #Relax #Zynk asdf adf sdf jkl aditya asd achimanya sdf sadklieoas sdlk jalliodf askldfjaskl a asdf a er a a efasd fj",
  //     likeCount: 5,
  //     commentCount: 0,
  //     mentions: [],
  //   },

  //   ]
  //  const  tagged = [
  //    {
  //      id: 2,
  //      user: {
  //        _id: "u2",
  //        name: "Bob",
  //        image:
  //        "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png.jpeg?fit=880%2C769&ssl=1",
  //       },
  //     image:
  //     "https://ik.imagekit.io/6vgubqn5s/posts/34e6da77-b78c-4697-b93b-2b089ca82bec_sVkuZK3er?updatedAt=1754301992668",
  //     caption: "Check out this amazing view! 🌄 #Zynk",
  //     likeCount: 34,
  //     commentCount: 0,
  //     mentions: [],
  //   },
  //   {
  // id: 1,
  // user: {
  //   _id: "u1",
  //   name: "Alice",
  //   image:
  //     "https://images.unsplash.com/photo-1508138221679-760a23a2285b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww",
  // },
  // image:
  //   "https://ik.imagekit.io/6vgubqn5s/posts/711b7800-793d-4150-a1d1-f4bcecf8ea83_v3JRelm8_",
  // caption: "Just finished my new project! 🚀 Loving Zynk.",
  // likeCount: 12,
  // commentCount: 0,
  // mentions: [
  //   { _id: "u2", name: "Bob" },
  //   { _id: "u3", name: "Charlie" },
  // ],
  // },
  //   {
  //     id: 3,
  //     user: {
  //       _id: "u3",
  //       name: "Charlie",
  //       image:
  //         "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png.jpeg?fit=880%2C769&ssl=1",
  //     },
  //     image:
  //       "https://ik.imagekit.io/6vgubqn5s/posts/e18b494d-fa14-4ab0-8ae6-5fe6d9f29162_tHCplu5jj",
  //     caption: "Loving the dark mode on Zynk! 💜",
  //     likeCount: 20,
  //     commentCount: 0,
  //     mentions: [{ _id: "u1", name: "Alice" }],
  //   },
  //   {
  //     id: 4,
  //     user: {
  //       _id: "u4",
  //       name: "Diana",
  //       image:
  //         "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png.jpeg?fit=880%2C769&ssl=1",
  //     },
  //     image:
  //       "https://ik.imagekit.io/6vgubqn5s/posts/88b37f27-5255-439d-8018-6690deb62f32_GEVnnMkQD",
  //     caption:
  //       "Weekend vibes 😎 #Relax #Zynk asdf adf sdf jkl aditya asd achimanya sdf sadklieoas sdlk jalliodf askldfjaskl a asdf a er a a efasd fj",
  //     likeCount: 5,
  //     commentCount: 0,
  //     mentions: [],
  //   },
  //   ]

  const location = useLocation()

  const posts = [];
  const tagged = [];
  const navigate = useNavigate();
  const { post, id } = useParams();

  const [editProfile, setEditProfile] = useState(false)
  const [activeTab, setActiveTab] = useState("posts");

  const handlePostClick = (post) => {
    navigate(location.pathname + activeTab + "/" + post.id);
    console.log("Clicked post:", post, params);
  };


   const lenis = useLenis('.main-content' , '.main-scroll')


  return (
    <main
      className="main-content   flex-1 flex flex-col bg-zinc-100/80  dark:bg-zinc-900 overflow-scroll   " 
    >
      <div className="main-scroll relative  overflow-x-hidden  shadow-md  w-screen min-h-screen h-full  md:min-h-screen md:max-w-[450px]  mx-auto   flex  flex-col transition-colors bg-white dark:bg-black">
        {/* Profile Info */}
        <section className="px-4 flex flex-col gap-3 py-4">
          {/* Profile pic / username / EditProfile */}
          <div className="flex justify-between items-start ">
            <div className="flex items-center gap-5  ">
              <img src={user.image}
                alt={user.username}
                className="w-23 aspect-square rounded-full object-cover border-1 border-gray-300 dark:border-zinc-500"
              />
              <div>
                <h3 className="text-xl  font-bold mb-1 text-text-light  dark:text-text-dark">
                  {user.username}
                </h3>
            {/* Profile Edit toggle button  */}
                <button
                onClick={()=>{setEditProfile(true)}}
                className=" text-[0.9rem] hover:underline active:scale-95 text-gray-400  cursor-pointer rounded-lg">
                  Edit Profile
                </button> 
              </div>
            {/* Menu toggle button*/}
            </div>
            <Link
              to={location.pathname + '/menu'}
              className={` text-primary cursor-pointer active:scale-95  dark:text-secondary`}
            >
              <MenuIcon size={24} />
            </Link>
          </div>
          {/* Bio */}
          <div className="">
            <p className="text-sm w-full h-full max-h-30 overflow-hidden line-clamp-5 text-ellipsis  text-text-light/80 whitespace-pre-line dark:text-text-dark/80">
              {user.bio || "This user hasn’t written a bio yet."}
            </p>
          </div>
        </section>

        {/* Tabs */}
        <div className="flex mb-1 sticky top-0  bg-white dark:bg-black backdrop-blur-sm  justify-around border-t border-b border-primary/20 dark:border-zinc-600/50">
          <button
            onClick={() => setActiveTab("posts")}
            className={`flex items-center gap-2 py-3 w-full justify-center ${
              activeTab === "posts"
                ? "text-primary dark:text-secondary font-bold"
                : "text-text-light/70 dark:text-text-dark/70"
            }`}
          >
            <FaTh /> Posts
          </button>
          <button
            onClick={() => setActiveTab("tags")}
            className={`flex items-center gap-2 py-3 w-full justify-center ${
              activeTab === "tags"
                ? "text-primary dark:text-secondary font-bold"
                : "text-text-light/70 dark:text-text-dark/70"
            }`}
          >
            <FaUserTag /> Tags
          </button>
        </div>

        {/* Posts Grid with smooth scroll */}
        <div className="flex-1  bg-white  dark:bg-black ">
          <div className=" grid grid-cols-3  ">
            {(activeTab === "posts" ? posts : tagged).map((p) => (
              <img
                key={p.id}
                src={p.image}
                alt={p.caption}
                className="w-full aspect-square object-cover cursor-pointer"
                onClick={() => handlePostClick(p)}
              />
            ))}
          </div>
        </div>
        {editProfile ? <EditProfile setEditProfile={setEditProfile} username={user.username}/> : ''}
      </div>
    </main>
  );
}
