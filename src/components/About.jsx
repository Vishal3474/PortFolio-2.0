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
                <dd className="mt-1 text-sm text-indigo-500 sm:mt-0 sm:col-span-2">
                  9520630066
                </dd>

                <a href="tel:+919520630066">
                  <img
                    alt="Call"
                    src="https://cdn.discordapp.com/attachments/944189291427430421/987935603553357874/png-clipart-blue-call-icon-dialer-android-google-play-telephone-phone-blue-text-removebg-preview.png"
                    width="30"
                    height="50"
                  />
                </a>
                <a href="https://wa.me/919520630066">
                  <img
                    alt="Whatsapp Me"
                    src="https://cdn.discordapp.com/attachments/944189291427430421/987938497597960202/372108180_WHATSAPP_ICON_400.gif"
                    width="40"
                    height="50"
                  />
                </a>
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
