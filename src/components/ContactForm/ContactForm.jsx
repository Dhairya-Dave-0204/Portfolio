import React from "react";
import { SplineGlobe } from "../component_index";

function ContactForm() {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen mt-20 md:mt-96 lg:mt-32 lg:flex-row lg:h-screen">
        {/* Contact Form */}
        <div className="flex items-center justify-center w-full p-6 lg:w-1/2 sm:p-10">
          <div className="w-full">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-5xl font-medium text-center md:text-6xl font-rose text-primary lg:text-left">
                Send me a message!
              </h1>
              <p className="mt-2 text-lg text-center text-gray-300 md:text-xl lg:text-left">
                Got a question or proposal, or just want to say hello? Go ahead.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-8">
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="block mb-1 text-lg text-gray-200"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full py-2 text-xl border-b-2 border-frost text-frost focus:outline-none focus:border-secondary"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="block mb-1 text-lg text-gray-200"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full py-2 text-xl border-b-2 border-frost text-frost focus:outline-none focus:border-secondary"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-lg text-gray-200"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  className="w-full text-xl resize-none border-b-1 border-frost text-frost focus:outline-none focus:border-secondary"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="mt-6 text-center lg:text-left">
                <button
                  onClick={() => navigate("/about")}
                  className="relative px-6 py-3 overflow-hidden text-sm font-semibold text-black bg-gray-200 rounded-md cursor-pointer sm:text-lg md:text-xl group"
                >
                  <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out transform -translate-x-full bg-secondary group-hover:translate-x-0" />
                  <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-frost">
                    Send message
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Spline Globe - hidden on small screens */}
        <div className="hidden w-full h-full lg:flex lg:w-1/2">
          <div className="w-full h-full">
            <SplineGlobe />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
