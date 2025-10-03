import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserPosts() {
  // const [posts, setPosts] = useState([]);
  const [lastId, setLastId] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch initial posts
//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     if (loading) return;
//     setLoading(true);

//     const res = await fetch(`/api/posts?after=${lastId || ""}&limit=10`);
//     const data = await res.json();

//     setPosts(prev => [...prev, ...data.items]);
//     if (data.items.length > 0) {
//       setLastId(data.items[data.items.length - 1].id);
//     }

//     setLoading(false);
//   };

  // Scroll handler for lazy loading
//   const handleScroll = (e) => {
//     const { scrollTop, scrollHeight, clientHeight } = e.target;
//     if (scrollTop + clientHeight >= scrollHeight - 100) {
//       fetchPosts(); // load more posts near bottom
//     }
//   };

 const   posts = [
      {
    id: 1,
    user: {
      _id: "u1",
      name: "Alice",
      image:
        "https://images.unsplash.com/photo-1508138221679-760a23a2285b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww",
    },
    image:
      "https://ik.imagekit.io/6vgubqn5s/posts/711b7800-793d-4150-a1d1-f4bcecf8ea83_v3JRelm8_",
    caption: "Just finished my new project! 🚀 Loving Zynk.",
    likeCount: 12,
    commentCount: 0,
    mentions: [
      { _id: "u2", name: "Bob" },
      { _id: "u3", name: "Charlie" },
    ],
  },
  {
    id: 2,
    user: {
      _id: "u2",
      name: "Bob",
      image:
        "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png.jpeg?fit=880%2C769&ssl=1",
    },
    image:
      "https://ik.imagekit.io/6vgubqn5s/posts/34e6da77-b78c-4697-b93b-2b089ca82bec_sVkuZK3er?updatedAt=1754301992668",
    caption: "Check out this amazing view! 🌄 #Zynk",
    likeCount: 34,
    commentCount: 0,
    mentions: [],
  },
  {
    id: 3,
    user: {
      _id: "u3",
      name: "Charlie",
      image:
        "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png.jpeg?fit=880%2C769&ssl=1",
    },
    image:
      "https://ik.imagekit.io/6vgubqn5s/posts/e18b494d-fa14-4ab0-8ae6-5fe6d9f29162_tHCplu5jj",
    caption: "Loving the dark mode on Zynk! 💜",
    likeCount: 20,
    commentCount: 0,
    mentions: [{ _id: "u1", name: "Alice" }],
  },
  {
    id: 4,
    user: {
      _id: "u4",
      name: "Diana",
      image:
        "https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png.jpeg?fit=880%2C769&ssl=1",
    },
    image:
      "https://ik.imagekit.io/6vgubqn5s/posts/88b37f27-5255-439d-8018-6690deb62f32_GEVnnMkQD",
    caption:
      "Weekend vibes 😎 #Relax #Zynk asdf adf sdf jkl aditya asd achimanya sdf sadklieoas sdlk jalliodf askldfjaskl a asdf a er a a efasd fj",
    likeCount: 5,
    commentCount: 0,
    mentions: [],
  },
  ] 
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b p-4 z-10">
        <h1 className="text-xl font-bold">Posts</h1>
      </div>

      {/* Scrollable posts grid */}
      <div
        className="flex-1 overflow-y-auto p-4 grid grid-cols-2 sm:grid-cols-3 gap-4"
        // onScroll={handleScroll}
      >
        {posts.map(post => (
          <div
            key={post.id}
            className="cursor-pointer rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            // onClick={() => navigate(`/profile/posts/${post.id}`)}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}

        {loading && <p className="col-span-full text-center">Loading...</p>}
      </div>
    </div>
  );
}
