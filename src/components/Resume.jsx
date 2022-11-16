import React from "react";

const Resume = () => {
  return (
    <div name="Resume" className="w-full my-32">
      <h1 class="text-indigo-500 text-4xl font-bold text-center mb-6">
        Resume
      </h1>

      <div class=" border border-2 border-indigo-400 mr-20 ml-20 cursor-wait">
        <img src="https://cdn.discordapp.com/attachments/1031605156996972574/1042409683597672469/vishal_CV_1.jpg"></img>
      </div>
      <div className="items-center text-center">
        <button className="p-2 mb-4 mt-2 mb-2 text-center cursor-pointer ">
          <a
            href="https://drive.google.com/file/d/1gu9s0YixybAuwQA_erd1rrMUFYceeGNW/view"
            target="_blank"
          >
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Resume;
