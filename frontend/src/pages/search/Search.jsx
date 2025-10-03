import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLenis from "../../hooks/useLenis";
import BackChevron from "../../svg/BackChevron";
import axiosClient from "../../utils/axios.js";

// const sampleUsers = [
//   {
//     _id: "u1",
//     username: "Alice",
//     bio: "Loves coding and coffee.",
//     image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?w=600",
//   },
//   {
//     _id: "u2",
//     username: "Bob",
//     bio: "Traveler & photographer.",
//     image:
//       "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png",
//   },
//   {
//     _id: "u3",
//     username: "Charlie",
//     bio: "Music enthusiast.",
//     image:
//       "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png",
//   },
//   {
//     _id: "u4",
//     username: "Diana",
//     bio: "Foodie & designer.",
//     image:
//       "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png",
//   },
//   // Added 20 more users
//   { _id: "u5", username: "Ethan", bio: "Tech geek.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u6", username: "Fiona", bio: "Nature lover.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u7", username: "George", bio: "Gamer & streamer.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u8", username: "Hannah", bio: "Yoga practitioner.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u9", username: "Ian", bio: "Movie buff.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u10", username: "Julia", bio: "Artist & painter.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u11", username: "Kevin", bio: "Fitness freak.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u12", username: "Laura", bio: "Bookworm.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u13", username: "Mike", bio: "Cyclist.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u14", username: "Nina", bio: "Food blogger.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u15", username: "Oscar", bio: "Photographer.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u16", username: "Paula", bio: "Traveller.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u17", username: "Quinn", bio: "Tech enthusiast.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u18", username: "Rachel", bio: "Musician.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u19", username: "Steve", bio: "Entrepreneur.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u20", username: "Tina", bio: "Dancer.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u21", username: "Uma", bio: "Blogger.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u22", username: "Victor", bio: "Fitness coach.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u23", username: "Wendy", bio: "Chef.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u24", username: "Xander", bio: "Gamer.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u25", username: "Yara", bio: "Photographer.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
//   { _id: "u26", username: "Zack", bio: "Traveller.", image: "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png" },
// ];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [searchUsers, setSearchUsers] = useState([]);
  const navigate = useNavigate();

  async function handleSearch(e) {
    setQuery(e.target.value);
    setTimeout(() => {
      const qry = {
        username: e.target.value,
      };
      if (!!e.target.value.trim()) {
        axiosClient
          .get("/user/search", { params: qry })
          .then((res) => {
            console.log(res.data, qry);
            setSearchUsers(res.data.users);
          })
          .catch((err) => {
            console.log("Error : ", err);
          });
      }else{
        setSearchUsers([])
      }
    }, 300);
  }

  const lenis = useLenis(".main-content", ".main-scroll");

  return (
    <main
      className="main-content  flex-1 flex flex-col bg-zinc-100/80  dark:bg-zinc-900 overflow-y-auto  " // padding-bottom for mobile nav
    >
      <div className="main-scroll bg-white mx-auto  dark:bg-black  flex-1  w-screen  md:max-w-[450px]">
        {/* Search bar */}
        <div className="flex sticky top-0 px-2 py-5 items-center w-full bg-white dark:bg-black z-20">
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <BackChevron
              size={35}
              className="md:hidden  cursor-pointer text-primary dark:text-secondary"
            />
          </button>
          <div className="w-full">
            <div className="flex items-center gap-2  bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Search users..."
                value={query}
                onChange={handleSearch}
                className="bg-transparent flex-1 outline-none text-text-light dark:text-text-dark placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* User List */}
        <div className="space-y-2 px-2 py-4">
          {searchUsers.length > 0 ? (
            searchUsers.map((user) => (
              <div
                key={user._id}
                onClick={() => navigate("/profile", { state: { user } })}
                className="flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <img
                  src={user.image}
                  className="w-12 h-12 rounded-full object-cover border-1 border-gray-300 dark:border-zinc-500"
                />
                <div>
                  <p className="font-semibold text-text-light dark:text-text-dark">
                    {user.username}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-text-light/70 dark:text-text-dark/70">
              No users found
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
