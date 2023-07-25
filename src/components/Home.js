import React from "react";
import WordCloud from "./WordCloud";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Home() {


    return (
    <>
      <motion.section 
        className="flex justify-between px-3"
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit = {{opacity: 0}}
        transition = {{duration: 1}}
        >
          <div className="grid content-center gap-y-2">
            <h1 className="font-extrabold text-3xl sm:text-7xl">Hi, I'm <span className="text-Peach">Maxwell</span></h1>


            <span className="text-md sm:text-4xl">
              I'm interested in {' '}
              <TypeAnimation className="text-Peach"
                sequence={[
                  'front-end development',
                  2000,
                  'UX/UI design',
                  2000,
                  'game development',
                  2000,
                  'AI',
                  2000,
                  'pretty much everything.',
                  1000,
                ]}/>
            </span>
            
            

            <p className="pt-5">I'm a software engineer currently based in <span className="text-Peach">London</span>, and I am currently looking</p>
            <p> for <span className="text-Peach">international placement</span> year opportunities. I have experience in multiple</p>
            <p className="pb-3">coding languages and platforms, and I can pick up <span className="text-Peach">new skills fast</span>.</p>
            
            <button class="text-Peach rounded-full ring-2 ring-Peach p-4 w-40 justify-self-center hover:bg-Peach hover:text-Space delay-50 ">
              Say Hi
            </button>
          </div>
          
          <div className="font-extrabold text-Peach">
          <WordCloud></WordCloud>
          </div>
          
      </motion.section>
      
    </>
        
        
      );
  
}