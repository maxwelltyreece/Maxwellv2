import React from "react";
import WordCloud from "./WordCloud";

export default function Home() {


    return (
    <>
      <section className="flex">
          <div>
            <h1 className="font-extrabold text-Peach">Hi, I'm Maxwell</h1>

            <p>I'm a software engineer based in Lonon. I am interested in front end development, UX/UI design, robotics and everything between.</p>
            <p>I am currently studying Computer Science at King's College London, and I am looking for a placement year internship opportunity. I have experience in lots of coding languages and platforms, and I can pick up new skills fast</p>
            <p>Outside of studies, I am a student athlete, and I also play a lot of video games.</p>
            <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
              Save Changes
            </button>
          </div>
          <div className="font-extrabold text-Peach justify-center">
          <WordCloud></WordCloud>
          </div>
          
      </section>
      
    </>
        
        
      );
  
}