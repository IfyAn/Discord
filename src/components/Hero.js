import React, { useState } from "react";
import ShareModal from "./ShareModal";
import { ShareIcon } from "@heroicons/react/outline";
// import { auth, provider } from "../firebase";

function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  // const signIn = (e) => {
  //   e.preventDefault();

  //   auth.signInWithPopup(provider).catch((error) => alert(error.message));
  // };

  return (
    <div className="bg-[#9226F3] pb-8 md:pb-0">
      {modalOpen && <ShareModal setOpenModal={setModalOpen} />}
      <div className="p-7 py-9 h-screen md:h-[83vh] md:flex relative">
        <div className="flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center ">
        
          <h1 className="text-5xl text-white font-bold">Talk to the world</h1>
          <h2 className="text-white text-lg font-light tracking-wide lg:max-w-3xl w-full">
            Easy way of communicating with people all around the world, your love ones, friends, those nearby. have it the world is yours 
          </h2>
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6">
            <button className="bg-white w-60 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-discord_blurple focus:outline-none transition duration-200 ease-in-out"  
              onClick={() => {setModalOpen(true)
          }}>
              <ShareIcon className="w-6 mr-2" />
               Share it
            </button>
          </div>
        </div>
        <div className="flex-grow">
          <img
            src="https://rb.gy/ohwmdy"
            alt=""
            className="absolute -left-36 mt-16 sm:-left-44 md:hidden"
          />
          <img
            src="https://rb.gy/gjs8ch"
            alt=""
            className="hidden md:inline absolute"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
