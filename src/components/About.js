import React from "react";
import { motion } from "framer-motion";


export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 3 }}
    
    >
      <div >
        <p>I am currently studying Computer Science at King's College London, and I am looking for a placement year internship opportunity. I have experience in lots of coding languages and platforms, and I can pick up new skills fast</p>
      
        <p>Outside of studies, I am a student athlete, and I also play a lot of video games.</p>
      </div>
    </motion.section>
  );
}