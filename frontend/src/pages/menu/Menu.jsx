import React, {  useState } from "react";
import BackChevron from "../../svg/BackChevron";
import AccountIcon from "../../svg/AccountIcon";
import {  Link, useNavigate } from "react-router-dom";
import Logout from "../../svg/Logout";
import LogoutComponent from '../auth/Logout'

const Menu = () => {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false)

  return (
    <main className=" relative bg-zinc-100/80 flex-1 flex flex-col dark:bg-zinc-900">
    <div className="w-screen flex flex-col gap-3 p-3 bg-white dark:bg-black h-screen md:max-w-[450px]   mx-auto">
      {/* header */}
      <header className="flex py-2 gap-2  items-center">
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <BackChevron
            size={24}
            className="  cursor-pointer text-primary dark:text-secondary"
          />
        </button>
        <h1 className="font-semibold text-xl">Menu</h1>
      </header>
      {/* options */}
      <main className={` rounded-xl p-2  dark:bg-zinc-800 bg-gray-100  w-full`} >
        {/* Accounts */}
        <Link
          to={location.pathname + '/account'}
          className={`flex p-2 items-center gap-2 text-zinc-500 dark:text-gray-300/60 w-full rounded-md cursor-pointer hover:text-primary dark:hover:text-pink-400
         `}>
          <AccountIcon />
          <h1>Account</h1>
        </Link>
        {/* LogOut */}
        <button
          onClick={()=>{setLogout(true)}}
          className={`flex p-2 items-center gap-2 text-zinc-500 dark:text-gray-300/60 w-full rounded-md cursor-pointer hover:text-primary dark:hover:text-pink-400
         `}>
          <Logout size={28}/>
          <h1>Log Out</h1>
        </button>
      </main>
    </div>
    {logout ? <LogoutComponent setLogout={setLogout}/> : ""}
    </main>
  );
};

export default Menu;
