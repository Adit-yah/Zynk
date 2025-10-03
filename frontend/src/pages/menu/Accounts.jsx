import React from "react";
import { useNavigate } from "react-router-dom";
import BackChevron from "../../svg/BackChevron";
import { useSelector } from "react-redux";
import { getLoginUser } from "../../feature/userSlice";

const Accounts = () => {
  const navigate = useNavigate();
  const loginUser = useSelector(getLoginUser);

  return (
    <div className=" relative bg-zinc-100/80 flex-1 flex flex-col dark:bg-zinc-900">
      <div className="w-full p-3 md:max-w-[450px] h-screen mx-auto bg-white dark:bg-black">
        {/* header */}
        <header className="flex py-2 gap-2  items-center">
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <BackChevron
              size={24}
              className="cursor-pointer text-primary dark:text-secondary"
            />
          </button>
          <h1 className="font-semibold text-xl">Accounts</h1>
        </header>
        {/* main */}
        <main className="p-2 space-y-3">
          {/* Personal details */}
          <div className="space-y-2">
            <h1 className="font-semibold text-md  text-gray-600 dark:text-zinc-100">Personal details</h1>
            {/* details container */}
            <div className="p-3 flex flex-col gap-1 bg-gray-100 text-gray-500 dark:bg-zinc-800 dark:text-zinc-400 rounded-xl ">
              {/* username */}
              <div className="flex items-center justify-between">
                <p>Username</p>
                <p>{loginUser.username}</p>
              </div>
              {/* Email */}
              <div className="flex items-center justify-between">
                <p>Email</p>
                <p>{loginUser.email}</p>
              </div>
            </div>
          </div>
          {/* Edit from  */}
          <div className="space-y-2">
            <h1 className="font-semibold text-md text-gray-600 dark:text-zinc-100">Update Information</h1>
            {/* Form Type */}
            <p className="text-sm">Later...</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Accounts;
