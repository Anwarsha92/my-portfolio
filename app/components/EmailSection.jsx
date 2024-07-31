"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import GitHubIcon from "../../public/GitHubIcon.svg";
import LinkedInIcon from "../../public/LinkedInIcon.svg";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useInView } from "framer-motion";

const EmailSection = () => {
  const [formState, setFormState] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
// Create a ref for the email input
const emailInputRef = useRef(null);
  
// Create a ref for the section
const sectionRef = useRef(null);

// Check if the section is in view
const isInView = useInView(sectionRef);

  // Focus the email input when the section comes into view
  useEffect(() => {
    if (isInView) {
      emailInputRef.current.focus();
    }
  }, [isInView]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const isEmailValid = await verifyEmail(formState.email);
    if (!isEmailValid) {
      setStatus("Your email address not valid");
      toast.error("Your email address not valid.");
      setLoading(false);
      return;
    }
    try {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID, // EmailJS service ID
          process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID, // EmailJS template ID
          formState,
          process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID // EmailJS user ID
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Email sent successfully");
          setFormState({ email: "", subject: "", message: "" });
          toast.success("Email sent successfully!");
          setLoading(false);
        })
        .catch((error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send email");
          toast.error("Failed to send email.");
          setLoading(false);
        });
    } catch (error) {
      console.error("FAILED...", error);
      setStatus("Failed to send email");
      toast.error("Failed to send email.");
      setLoading(false);
    }
  };

  const verifyEmail = async (email) => {
    try {
      const response = await axios.get(
        `https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${process.env.NEXT_PUBLIC_HUNTER_API_KEY}`
      );
      return response.data.data.status === "valid";
    } catch (error) {
      console.error("Email verification failed", error);
      return false;
    }
  };
  return (
    <section ref={sectionRef} id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
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
          <Link
            href={"https://github.com/Anwarsha92"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GitHubIcon} alt="GitHub" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/anwar-sha-970141262/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={LinkedInIcon} alt="LinkedIn" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col " onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm mb-2 font-medium">
              Your email
            </label>
            <input
              ref={emailInputRef}
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
            disabled={loading}
            type="submit"
            className={`${loading? "hover:bg-gray-500 bg-gray-500":"hover:bg-primary-600  bg-primary-500"}  font-medium py-2.5 px-5 rounded-lg w-full`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default EmailSection;
