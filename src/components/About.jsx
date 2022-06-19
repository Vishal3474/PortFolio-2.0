import React from "react";
import { PaperClipIcon } from "@heroicons/react/solid";
const About = () => {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5  sm:px-6">
            <h3 className="text-4xl leading-6 font-medium text-indigo-900">
              About
            </h3>
            <p className="mt-1 max-w-2xl text-2xl text-indigo-500">
              Know Who I'M.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                <dd className="mt-1 text-sm text-indigo-500 sm:mt-0 sm:col-span-2">
                  Vishal
                </dd>
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-indigo-500 sm:mt-0 sm:col-span-2">
                  VishalKumar3474@gmail.com
                </dd>
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Mobile No.-
                </dt>
                <div className="flex text-center items-center">
                  <dd className="mt-1 text-sm text-indigo-500 sm:mt-0 sm:col-span-2 mr-4">
                    9520630066
                  </dd>

                  <a href="tel:+919520630066">
                    <img
                      alt="Call"
                      src="https://www.pngkey.com/png/detail/60-603850_call-us-now-button-camerabewaking.png"
                      width="100"
                      height="50"
                    />
                  </a>
                  <a href="https://wa.me/919520630066">
                    <img
                      alt="Whatsapp Me"
                      src="https://mrgultimus2.in/wp-content/uploads/2022/01/whatsapp.png"
                      width="70"
                      height="50"
                    />
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">About</dt>
                <dd className="mt-1 text-sm text-indigo-500 sm:mt-0 sm:col-span-2">
                  Hi Everyone, I am Vishal from Khatima,Uttarakhand, India.
                  <dd className="mt-1 text-sm text-indigo-500 sm:mt-0 sm:col-span-2">
                    “I am CodeYogi Student, CodeYogi Offers Me 6 Months Long
                    Software Engineering Program”{" "}
                  </dd>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
