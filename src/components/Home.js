import React from "react";
import WordCloud from "./WordCloud";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <div className="grid grid-cols-2">
      <div className="grid content-center gap-y-2 px-20">
        <h1 className="font-extrabold text-3xl sm:text-7xl">Hi, I'm <span className="text-Peach">Maxwell</span></h1>

        <span className="text-md sm:text-4xl">
          I'm interested in {' '}
          <TypeAnimation className="text-Peach"
            sequence={[
              'front-end development',
              2000,
              'UX/UI design',
              1800,
              'game development',
              1600,
              'AI',
              1400,
              'pretty much everything.',
              1000,
            ]}/>
        </span>

        <p className="pt-5">I'm a software engineer currently based in <span className="text-Peach">London</span>, and I am currently </p>
        <p>looking for <span className="text-Peach">international placement</span> year opportunities. I have</p>
        <p className="pb-3"> experience in multiple coding languages and platforms, and I can pick up <span className="text-Peach">new skills fast</span>.</p>
        
        <p className="indent-96">I am currently studying <span className="text-Peach">Computer Science</span> at <span className="text-Peach">King's College London</span></p>
        <p>Outside of studies, I am a student athlete, a semi-professional drummer, and I also play a lot of video games.</p>
         
      </div>

      <div className=" flex justify-center font-extrabold text-Peach">
          <WordCloud></WordCloud>
      </div> 
        
        

      <button class="col-span-2 text-Peach text-lg rounded-full ring-2 ring-Peach p-6 w-80 justify-self-center hover:bg-Peach hover:text-Space delay-50 ">
        Say Hi
      </button>  
    </div>
    
    );
  
}