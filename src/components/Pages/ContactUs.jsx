import React from "react";
import Button from "../Global/Button";
import Heading from "../Global/Heading";

const ContactUs = () => {
  return (
    <>
      <div className="container py-32">
        <div className="flex flex-col gap-4 items-center mb-16">
          <Heading Heading={"Contact Us"} />
          <p className=" font-medium text-[16px] text-[#282938] opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
          <p className=" font-medium text-[16px] text-[#282938] opacity-70">
          sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <section className=" mx-auto p-6 bg-[#F4F6FC] rounded-lg shadow-md">
          <form className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border bg-[#F4F6FC] border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full px-4 py-3 border bg-[#F4F6FC] border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>

            {/* Context and Subject Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Provide context"
                  className="w-full px-4 py-3 border bg-[#F4F6FC] border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select className=" w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-[#F4F6FC]">
                  <option>Select Subject</option>
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing Question</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Message Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                placeholder="Write your question here"
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-vertical"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
              <Button className={"bg-black text-white"}>Send Messege</Button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
