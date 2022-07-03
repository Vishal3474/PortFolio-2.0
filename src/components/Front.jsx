import React from "react";

import bgImg from "../assets/cyber-bg.png";

const Front = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between bg-cover bg-[url('https://cdn.discordapp.com/attachments/944189291427430421/993208131964370984/ezgif.com-gif-maker.gif')]"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Hi There!</p>
          <h1 className="py-3 text-5xl  md:text-7xl font-bold">
            {" "}
            I'am{" "}
            <span class=" text-5xl text-purple-700 md:text-7xl font-bold">
              {" "}
              Vishal{" "}
            </span>
          </h1>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            {" "}
            Web Developer
          </h1>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Front;
