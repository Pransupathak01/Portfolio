import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface GetInTouchProps {
  animate: boolean;
}
const GetInTouch: React.FC<GetInTouchProps> = ({ animate }) => {
  const [isAnimated, setIsAnimated] = useState(false);

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
      <div className="text-center tracking-tighter">
        <p>Hyderabad, Telangana</p>
        <p>+91 8305805918</p>
        <p>pranpathak01@gmail.com</p>
      </div>
    </motion.div>
  )
}
export default GetInTouch;
