import React, { useEffect, useState } from "react";
import BackChevron from "../../svg/BackChevron";
import axiosClient from "../../utils/axios";
import { setLoginUser } from "../../feature/userSlice";
import { useDispatch } from "react-redux";

const EditProfile = ({ setEditProfile, username }) => {
  const dispatch = useDispatch()
  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState("");
  const [bio, setBio] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [toggleUpload, setToggleUpload] = useState(true)
  const maxChar = 150;

  useEffect(() => {
    isVisible == false ? setIsVisible(true) : "";
  }, []);

  function handleToggle() {
    setIsVisible(false);
    setTimeout(() => {
      setEditProfile(false);
    }, 300);
  }

  function handleProfilePic(e) {
    if (e.target.files[0]) {
      const fileBlob = URL.createObjectURL(e.target.files[0]);
      setImageFile(e.target.files[0]);
      setImage(fileBlob);
    }
  }

  function handleBio(e) {
    const value = e.target.value;
    if (value.length > maxChar) {
      return setBio(value.slice(0, maxChar));
    }
    setBio(value);
  }

  function handleProfileUpdate() {
    
    if(toggleUpload){

      setToggleUpload(false)
      if(!(imageFile || bio)){ return}
  
      const formData = new FormData();
      imageFile ? formData.append("image", imageFile) : "";
      bio ? formData.append("bio", bio) : "";
  
      axiosClient.post("/user/update", formData).then((res) => {
        console.log(res.data);
        dispatch(setLoginUser(res.data.user))
        setBio('')
        setImage('')
        setImageFile('')
        setToggleUpload(true)
        handleToggle() 
      });
    }
  }

  return (
    <div
      className={`h-full w-screen  md:max-w-[450px]  p-4 mx-auto fixed top-0 dark:bg-black bg-white z-80 transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <header className="flex justify-between items-center ">
        <h1 className="text-lg font-medium">Edit Profile</h1>
        <button
          className=""
          onClick={() => {
            handleToggle();
          }}
        >
          <BackChevron
            size={28}
            className=" -rotate-90 cursor-pointer text-primary dark:text-secondary"
          />
        </button>
      </header>

      <main className="flex flex-col gap-5 items-center w-full max-w-[500px] mx-auto mt-4 ">
        {/* profile pic input */}
        <div className="flex flex-col gap-3 w-full items-center">
          <label className="text-primary dark:text-secondary font-semibold w-full">
            Profile Picture
          </label>
          <div className="aspect-square text-sm    h-38  border-dashed relative rounded-full overflow-hidden border-2 flex items-center justify-center border-gray-400">
            <input
              onChange={handleProfilePic}
              type="file"
              name="image"
              className="h-full rounded-full absolute opacity-0 cursor-pointer"
            />
            {!image ? (
              "Select Picture"
            ) : (
              <img
                src={image}
                alt="image"
                className="h-full aspect-square object-cover object-center"
              ></img>
            )}
          </div>
          <h1 className="font-semibold">{username}</h1>
        </div>
        {/* Bio input */}
        <div className="w-full relative">
          <label className="font-semibold  text-primary dark:text-secondary ">
            User Bio
          </label>
          <textarea
            name="Bio"
            value={bio}
            placeholder="Your Bio ..."
            onChange={(e) => {
              handleBio(e);
            }}
            className="h-40 p-2 outline-0 rounded-md bg-gray-100/80 text-text-light/80
                dark:bg-zinc-900/80 resize-none dark:text-text-dark/80
                w-full  overscroll-y-scroll [&::-webkit-scrollbar]:hidden"
          />
          <h1 className="text-xs text-text-light/60 dark:text-text-dark/50 absolute bottom-2 right-2">
            {maxChar - bio.length + " / " + maxChar}{" "}
          </h1>
        </div>
        {/* upload button */}
        <button
          onClick={handleProfileUpdate}
          disabled={!(imageFile || bio)}
          className="bg-primary/30 dark:bg-secondary/30 rounded-sm px-3 py-2 active:scale-95 cursor-pointer  text-lg "
        >
          Update Profile
        </button>
      </main>
    </div>
  );
};

export default EditProfile;
