import { motion } from "framer-motion";

const Preloader = ({ isNavigating }) => {
  return (
    <motion.div
      initial={{ height: "100%" }}
      animate={{ height: isNavigating ? "0%" : "100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full bg-white z-50 origin-top"
    />
  );
};

export default Preloader;
