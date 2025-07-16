import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';


interface GetInTouchProps {
  animate: boolean;
}
const GetInTouch: React.FC<GetInTouchProps> = ({ animate }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = form;
  const [emailError, setEmailError] = useState('');


  // Function to validate email using regex
  const validateEmail = (email: any) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle email change and validate
  const handleEmailChange = (val: any) => {
    const emailValue = val.target.value;
    setForm({ ...form, email: val.target.value });
    if (validateEmail(emailValue)) {
      setEmailError("");
    }
  };
  const handleSubmit = async (e?: React.FormEvent | React.MouseEvent) => {
    if (e) e.preventDefault();

    if (!name || !email || !message) {
      toast.error("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError('');
    toast.success("Thanks! I’ll be in touch soon.");

    try {
      const res = await fetch('https://portfolio-production-a5f5.up.railway.app/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      console.log("Response:", res);
      // Clear form
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      toast.error('Failed to send email.');
      console.error(err);
    }
  };
  
  useEffect(() => {
    if (animate) {
      setIsAnimated(true);
    } else {
      setIsAnimated(false);
    }
  }, [animate]);


  return (
    <motion.div
      className="border-b border-neutral-900 pb-20 my-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: isAnimated ? 1 : 0, x: isAnimated ? 0 : -50 }}
      transition={{ duration: 2 }}
    >
      <motion.h1
        className="my-10 text-center text-4xl"
        whileHover={{ scale: 1.2 }}
      >
        Get in Touch
      </motion.h1>
      <div className="flex  flex-col justify-center items-center   tracking-tighter">

        <p className="text-lg p-2">
          I'm always open to new opportunities, collaborations, or just a friendly chat about tech and ideas.
        </p>

        <p className="text-lg p-2">
          Feel free to drop a message — I’ll get back to you as soon as I can.
        </p>

        <div className="flex flex-col justify-center items-center  w-full py-8">
          <input
            className="mb-4 p-3 text-lg text-black border rounded-xl border-gray-300 rounded w-full w-[300px] sm:w-[450px]  mx-auto"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <div className=" flex flex-col justify-center items-center  mb-2  w-full ">
            <input
              className="mb-2 p-3 text-lg text-black border rounded-xl border-gray-300 rounded w-full w-[300px] sm:w-[450px]  mx-auto"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="text-red-500 text-mb mb-4">{emailError}</p>}
          </div>

          <textarea
            className="mb-4 p-2 px-3 text-lg text-black border rounded-xl border-gray-300 rounded sm:h-[100px] w-full w-[300px] sm:w-[450px] mx-auto"
            placeholder="Message"
            value={message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button
            className="p-3 text-lg inline-block  w-full w-[300px] sm:w-[450px]  rounded-xl bg-gradient-to-br from-slate-800 via-fuchsia-800  to-slate-800 text-white"
            onClick={handleSubmit}
          >
            📩 Send Message
          </button>
        </div>
        <div className="text-center tracking-tighter">
          <p>+91 8305805918</p>
          <p>pranpathak01@gmail.com</p>
          <p>Bhopal, mp</p>
        </div>
      </div>
      <ToastContainer />
    </motion.div>
  )
}
export default GetInTouch;
