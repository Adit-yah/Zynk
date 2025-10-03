import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaPlusSquare,
  FaRegCommentDots,
  FaUser,
} from "react-icons/fa";

const navItems = [
  { to: "/home", icon: <FaHome />, label: "Home" },
  { to: "/search", icon: <FaSearch />, label: "Search" },
  { to: "/create", icon: <FaPlusSquare />, label: "Create" },
  { to: "/chat", icon: <FaRegCommentDots />, label: "Messages" },
  { to: "/profile", icon: <FaUser />, label: "Profile" },
];

const Navigation = () => {

  const location = useLocation()
  const isVisible = ['/home' , '/profile'].includes(location.pathname)

  return (
    <>
      {/* Mobile Bottom Navigation */}
   {  isVisible &&  
      <footer className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center h-14 px-6 bg-white dark:bg-black md:hidden border-t border-zinc-900/30 dark:border-gray-300/30">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`text-xl transition-colors duration-200 ${
              location.pathname === item.to
                ? "text-primary bg-primary/10 dark:bg-pink-200/30  p-2 dark:text-pink-400"
                : "text-gray-500 dark:text-gray-400"
            } duration-200 ease-in hover:text-primary  rounded-sm p-2 dark:hover:text-pink-400`}
          >
            {item.icon}
          </Link>
        ))}
      </footer>}

      {/* Desktop Left Sidebar Navigation */}
      <aside className="hidden md:flex flex-col shadow-md w-64 h-screen bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 backdrop-blur-sm   py-4">
        
        {/* App name on desktop */}
        <h1 className="hidden md:block text-2xl px-6 font-extrabold mb-6 text-primary dark:text-secondary">
          Zynk
        </h1>

        {/* Nav Items */}
        <div className="flex flex-col px-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex gap-3 items-center transition-colors ${
                location.pathname === item.to
                  ? "text-primary bg-primary/10 dark:bg-pink-200/30  p-2 dark:text-pink-400"
                  : "text-gray-500 dark:text-gray-400"
              }  duration-200 ease-in hover:text-primary  rounded-sm p-2 dark:hover:text-pink-400`}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Navigation;
