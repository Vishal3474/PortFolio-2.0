import React from "react";
import { useState } from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

function Footer() {
  const [inputValue, SetInputValue] = useState("");
  const inputChange = (event) => {
    SetInputValue(event.target.value);
  };

  const BtnClick = () => {
    alert(" Message Send SuccessFully!");
  };

  return (
    <div className="w-full mt-24 bg-black text-gray-300  py-y px-2">
      <div className=" md:grid-cols-6 border-b-2 items-center border-gray-600">
        <div className="col-span-2 text-center items-center  md:pt-2">
          <p className="font-bold uppercase">Hiring Me</p>
          <p className="py-4">
            If You Want Hire Me Please send a msg in Text Box .
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              value={inputValue}
              onChange={inputChange}
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="text"
              placeholder="Enter Your Messages.."
            />
            <button
              disabled={inputValue.length < 1}
              onClick={BtnClick}
              className="p-2 mb-4 bg-indigo-700 disabled:bg-gray-700"
            >
            Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">
          {" "}
          Made With <span >❤</span> at
          CodeYogi
        </p>
        <p className="py-4"> Copyright © 2022 Vishal All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl ">
          <a
            
            href="https://www.facebook.com"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
           
            href="https://www.instagram.com/its_vi.shal/"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
          
            href="https://twitter.com/Vishal3474"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
          
            href="https://www.twitch.tv/its_vishal"
            target="_blank"
          >
            <FaTwitch />
          </a>
          <a
        
            href="https://github.com/Vishal3474"
            target="_blank"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
