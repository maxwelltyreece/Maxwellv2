import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section 
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit = {{opacity: 0}}
        transition = {{duration: 1}}
        >
      
    </motion.section>
  );
}