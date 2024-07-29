"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import GitHubIcon from "../../public/GitHubIcon.svg";
import LinkedInIcon from "../../public/LinkedInIcon.svg";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const EmailSection = () => {

  const [formState, setFormState] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID, // EmailJS service ID
      process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID, // EmailJS template ID
      formState,
      process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID // EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus("Email sent successfully");
      setFormState({ email: "", subject: "", message: "" });
      toast.success("Email sent successfully!");
    }).catch((error) => {
      console.error('FAILED...', error);
      setStatus("Failed to send email");
      toast.error("Failed to send email.");
    });
  };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Thank you for visiting my portfolio! I am currently looking for new
          opportunities and would love to connect with you. If you're interested
          in collaborating, have any questions, or want to discuss potential
          projects, please reach out to me through the inbox. I look forward to
          hearing from you!
        </p>
        <div className="socials inline-flex items-center flex-row gap-2 bg-white rounded">
          <Link href={"github.com"}>
            <Image src={GitHubIcon} alt="GitHub" />
          </Link>
          <Link href={"linkedin.com"}>
            <Image src={LinkedInIcon} alt="LinkedIn" />
          </Link>
        </div>
      </div>
      <div>
        <form
          className="flex flex-col "
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm mb-2 font-medium">
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
              required
              placeholder="jacob@google.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm mb-2 font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              value={formState.subject}
              onChange={handleChange}
              required
              placeholder="Just saying hi"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              type="text"
              id="message"
              value={formState.message}
              onChange={handleChange}
              required
              placeholder="Let's talk about"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default EmailSection;
