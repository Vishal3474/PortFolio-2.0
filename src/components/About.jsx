import React from "react";

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
                <div className="flex text-center items-center">
                  <dd className="mt-1 text-sm text-indigo-500 sm:mt-0 sm:col-span-2 mr-10">
                    VishalKumar3474@gmail.com
                  </dd>
                  <a href="mailto:vishalkumar3474@gmail.com">
                    <img
                      className="animate-bounce"
                      alt="Send Email"
                      src="https://cdn.discordapp.com/attachments/944189291427430421/987949772642066473/email-removebg-preview.png"
                      width="50"
                      height="50"
                    />
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Mobile No.-
                </dt>
                <div className="flex text-center items-center">
                  <dd className="mt-1 text-sm text-indigo-500 sm:mt-0 sm:col-span-2 mr-10">
                    9520630066
                  </dd>

                  <a href="tel:+919520630066">
                    <img
                      className="mr-2 animate-bounce"
                      alt="Call"
                      src="https://cdn.discordapp.com/attachments/944189291427430421/987951071194402847/60-603850_call-us-now-button-camerabewaking-removebg-preview.png"
                      width="100"
                      height="50"
                    />
                  </a>
                  <a href="https://wa.me/919520630066" target="_blank">
                    <img
                      className="animate-bounce"
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
