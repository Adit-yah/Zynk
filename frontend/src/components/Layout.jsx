import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoginUser, setLoginUser } from "../feature/userSlice";
import Navigation from "./NavigationFooter";
import axiosClient from "../utils/axios";

export default function Layout() {
  const location = useLocation();

  const dispatch = useDispatch();
  const loginUserDetails = useSelector(getLoginUser);

  useEffect(() => {
    if (!loginUserDetails._id) {
      axiosClient.get("/user/").then((res) => {
        dispatch(setLoginUser(res.data.user));
      });
    }
  }, [loginUserDetails._id, dispatch]);

  // Paths where we want to show the top header
  const hideHeader = ["/home"].includes(location.pathname);

  // Initialize Lenis only on main feed

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white h-screen flex flex-col   md:flex-row">
      {/* Optional top header (only if not hidden) */}
      {hideHeader && (
        <header className=" h-[62px] flex items-center px-6 bg-white border-b border-zinc-900/30 dark:border-gray-300/30 dark:bg-black backdrop-blur-sm md:hidden z-10">
          <h1 className="text-2xl font-extrabold text-primary dark:text-secondary">
            Zynk
          </h1>
        </header>
      )}

      {/* Left Sidebar / Desktop Navigation */}
      <Navigation />

      {/* Main Feed */}
      <Outlet />
      {/* <div className="flex-1 flex items-center justify-center bg-gray-200 dark:bg-zinc-900">
        <h1>Pages</h1>
      </div> */}

      {/* Right sidebar (desktop) */}
      <aside className="hidden lg:block w-72 p-4 border-l shadow-md border-gray-200 dark:border-gray-800">
        <p className="text-gray-500 dark:text-gray-400">
          Suggestions will appear here
        </p>
      </aside>
    </div>
  );
}
