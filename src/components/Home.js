import React from "react";
import WordCloud from "./WordCloud";
import Typist from "react-typist";

export default function Home() {


    return (
    <>
      <section className="flex">
          <div>
            <Typist avgTypingDelay={120} cursor={true}> 
              <h1 className="font-extrabold text-7xl">Hi, I'm <span className="text-Peach">Maxwell</span></h1>
            </Typist>
            

            <p>I'm a software engineer based in Lonon, interested in front end development, UX/UI design, robotics and everything between.</p>
            <p>I am looking for a placement year internship opportunities. I have experience in lots of coding languages and platforms, and I can pick up new skills fast</p>
            
            <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
              Say Hi
            </button>
          </div>
          <div className="font-extrabold text-Peach justify-center">
          <WordCloud></WordCloud>
          </div>
          
      </section>
      
    </>
        
        
      );
  
}