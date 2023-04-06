import React from 'react';

import { motion } from 'framer-motion';

const BtnPrimary = ({ title, styles }) => {
  return (
    <motion.button
      className={`box rounded-lg bg-purple-800 px-2 py-1 font-bold text-white  hover:bg-white hover:text-purple-500  ${styles}`}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {title}
    </motion.button>
  );
};

export default BtnPrimary;
