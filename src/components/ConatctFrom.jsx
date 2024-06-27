"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ConatctFrom = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6jxwwes", "template_u0mq6th", form.current, {
        publicKey: "cpYgjdwqPTj6sL8is",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="bg-white rounded-xl px-4">
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <span className="text-base font-medium">Your Name</span>
              <input
                required
                name="user_name"
                placeholder="Your Name"
                className="p-3 focus:outline-none border-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-medium">Your Email</span>
              <input
                required
                name="user_Phone"
                placeholder="Email Address"
                className="p-3 focus:outline-none border-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-medium">Phone Number</span>
              <input
                required
                name="user_email"
                placeholder="Phone Number"
                className="p-3 focus:outline-none border-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-medium">Date Of Birth</span>
              <input
                required
                name="user_Subject"
                placeholder="dd-mm-yyyy"
                className="p-3 focus:outline-none border-2 rounded-lg"
              />
            </div>
          </div>
          <div className="py-6">
            <div className="flex flex-col">
              <span className="text-base font-medium">Message</span>
              <textarea
                required
                name="user_Messages"
                placeholder="Write Your Messages"
                className="p-3 focus:outline-none border-2 w-full h-28 rounded-lg"
              />
            </div>
          </div>
          <div className="pb-6">
            <button
              type="submit"
              className="bg-[#FF7A00] py-2 px-5 font-medium rounded-full text-base text-white"
            >
              SEND US A MESSAGE
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ConatctFrom;
