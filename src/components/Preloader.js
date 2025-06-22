import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center"
    >
      {/* Loading Animation */}
      <div className="text-gray-900 text-lg font-semibold animate-pulse">Loading...</div>
    </motion.div>
  );
};

export default Preloader;
