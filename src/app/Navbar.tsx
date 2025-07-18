import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface NavbarProps {
  animate: boolean;
}
const Navbar: React.FC<NavbarProps> = ({ animate }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    if (animate) {
      setIsAnimated(true);
    } else {
      setIsAnimated(false);
    }
  }, [animate]);
  return (
    <motion.div className="w-full h-40 mb:16 md:mb-20 md:mt-2 flex flex-row items-center justify-between md:py-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: isAnimated ? 1 : 0, y: isAnimated ? 0 : -50 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex flex-shrink-0 item-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img className="w-28 sm:w-36 xl:w-40 h-auto" src="/pp.png" />
      </motion.div>
      <div className="m-8 flex items-center justify-center gap-4 md:gap-6 text-2xl">
        <motion.a
          href="https://www.linkedin.com/in/pransu-pathak-354b1721a"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="pr-2"

        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            className="w-6 h-6 md:w-8 md:h-8"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
          </svg>
        </motion.a>
        <motion.a
          href="https://github.com/Pransupathak01/"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="pr-2"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 496 512"
            className="w-6 h-6 md:w-8 md:h-8"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
          </svg>
        </motion.a>
        <motion.a
          href="https://x.com/PransuPathak"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="pr-2"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            className="w-6 h-6 md:w-8 md:h-8"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
          </svg>
        </motion.a>
        <motion.a
          href="https://expo.dev/accounts/pransup01"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="pr-1"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 20 20"
            className="w-6 h-6 md:w-8 md:h-8"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.072 7.75a1.749 1.749 0 00-1.56-.732 1.763 1.763 0 00-1.436.946 1.55 1.55 0 00.302 1.75 2.57 2.57 0 001.716-.484 2.53 2.53 0 00.978-1.48zM12.866 1L11.751.394 6.897 3.072l.387.207.736.383 1.332-.733L12.867.987 12.866 1zm.449-.184a.173.173 0 01.124.115l1.626 4.755a.158.158 0 01-.077.207 3.126 3.126 0 00-1.384 1.519 3.09 3.09 0 00-.134 2.042 3.29 3.29 0 001.35 1.793 3.343 3.343 0 002.195.524.208.208 0 01.202.123l1.68 4.88a.196.196 0 01-.078.215l-5.163 2.992a.195.195 0 01-.078.015.208.208 0 01-.14-.022l-1.81-1.129a.18.18 0 01-.078-.076l-3.538-8.065-5.388 3.039a.25.25 0 01-.21.008l-1.224-.69a.177.177 0 01-.077-.23l5.234-9.847c.02-.033.05-.06.085-.076L11.65.023a.2.2 0 01.186 0l1.479.793zM6.843 3.46l-.256-.13-5.044 9.523.92.514 4.352-5.643a.212.212 0 01.178-.077.217.217 0 01.155.115l4.738 10.82 1.266.775L8.066 4.62l-.216-.614-1.014-.552.007.007zm7.804 5.679a1.932 1.932 0 01.092-1.28c.176-.404.484-.737.875-.945a2.152 2.152 0 012.509.307 1.934 1.934 0 01.056 2.745l-.056.056a2.118 2.118 0 01-1.986.516 2.118 2.118 0 01-.928-.508 2.091 2.091 0 01-.562-.891z" ></path>
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};
export default Navbar;
