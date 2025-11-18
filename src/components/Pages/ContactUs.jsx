import React, { useState } from "react";
import emailjs from "emailjs-com";
import Button from "../Global/Button";
import Heading from "../Global/Heading";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    context: "",
    subjectType: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // send email
  const sendEmail = (e) => {
    e.preventDefault();

    // validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.context ||
      !formData.subjectType ||
      !formData.message
    ) {
      setStatus("Please fill all fields!");
      return;
    }

    emailjs
      .send(
        "service_hn8ght8",
        "template_rlfrm1t",
        formData,
        "P0ferkqRMNPGPzzgN"
      )
      .then(
        () => setStatus("Message sent successfully!"),
        () => setStatus("Failed to send message!")
      );
  };

  return (
    <>
      <div className="container py-32">
        <div className="flex flex-col gap-4 items-center mb-16">
          <Heading Heading={"Contact Us"} />
          <p className="font-medium text-[16px] text-[#282938] opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <p className="font-medium text-[16px] text-[#282938] opacity-70">
            sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <section className="mx-auto p-6 bg-[#F4F6FC] rounded-lg shadow-md">
          <form onSubmit={sendEmail} className="space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border bg-[#F4F6FC] border-gray-300 rounded-lg"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full px-4 py-3 border bg-[#F4F6FC] border-gray-300 rounded-lg"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Context and Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Context
                </label>
                <input
                  name="context"
                  type="text"
                  placeholder="Provide context"
                  className="w-full px-4 py-3 border bg-[#F4F6FC] border-gray-300 rounded-lg"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  name="subjectType"
                  className="w-full px-4 py-3 border bg-[#F4F6FC] border-gray-300 rounded-lg"
                  onChange={handleChange}
                >
                  <option value="">Select Subject</option>
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing Question</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Write your question here"
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                onChange={handleChange}
              />
            </div>

            {/* Submit */}
            <div className="flex justify-start">
              <Button className={"bg-black text-white"}>Send Message</Button>
            </div>

            {/* Status text */}
            {status && (
              <p className="text-sm font-medium text-red-600 mt-3">{status}</p>
            )}
          </form>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
