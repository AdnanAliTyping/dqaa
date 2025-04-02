
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const IntroScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // Show for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <img 
              src="/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png" 
              alt="DQAA Logo" 
              className="w-32 h-32 mb-4"
            />
            <h1 className="text-2xl font-display font-bold text-dqaa-500 text-center">
              Darul Quran Abdulla Academy
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
