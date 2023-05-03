import React from "react";
import WordCloud from "./WordCloud";

export default function Home() {
    return (
    <>
      <section className="bg-Space font-comfortaa text-Khaki">
          <div>
            <h1>Hi, I'm Maxwell</h1>

            <p>I'm a software engineer based in Lonon. I am interested in front end development, UX/UI design, robotics and everything between.</p>

          </div>
          <div>
          <WordCloud></WordCloud>
          </div>
          
      </section>
      
    </>
        
        
      );
  
}