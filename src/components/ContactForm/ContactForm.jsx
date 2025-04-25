import React, { useState } from "react";
import { SplineGlobe } from "../component_index";
import { toast } from "react-toastify";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const toastDisplay = (message, status) => {
    if (status) {
      toast.success(message, {
      });
    } else {
      toast.error(message, {
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "a14bf5dd-003f-4db0-8b16-d1545324aae9",
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      toastDisplay("Form Submitted Successfully", true);
      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      toastDisplay("Error in submitting the form", false);
      setError(true);
    }
  };

  return (
    <>
      <section id="contact" className="flex flex-col w-full px-6 mt-20 lg:min-h-screen md:px-28 lg:px-40 md:mt-96 lg:mt-32 lg:flex-row lg:h-screen">
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
            <form onSubmit={handleSubmit} className="space-y-8">
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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="w-full text-xl resize-none border-b-1 border-frost text-frost focus:outline-none focus:border-secondary"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="mt-6 text-center lg:text-left">
                <button
                  type="submit"
                  className="relative px-6 py-3 overflow-hidden text-sm font-semibold text-black bg-gray-200 rounded-md cursor-pointer sm:text-lg md:text-xl group"
                >
                  <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out transform -translate-x-full bg-primary group-hover:translate-x-0" />
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
      </section>
    </>
  );
}

export default ContactForm;
