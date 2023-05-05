import React from "react";
import WordCloud from "./WordCloud";
import { TypeAnimation } from "react-type-animation";

export default function Home() {


    return (
    <>
      <section className="flex justify-between">
          <div className="grid content-center gap-y-2">
            <h1 className="font-extrabold text-7xl">Hi, I'm <span className="text-Peach">Maxwell</span></h1>


            <span className="text-4xl">
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
            
            

            <p className="pt-5">I'm a software engineer currently based in London, and I am currently looking</p>
            <p> for international placement year opportunities. I have experience in lots of</p>
            <p>coding languages and platforms, and I can pick up new skills fast.</p>
            
            <button class=" ">
              Say Hi
            </button>
          </div>
          
          <div className="font-extrabold text-Peach">
          <WordCloud></WordCloud>
          </div>
          
      </section>
      
    </>
        
        
      );
  
}