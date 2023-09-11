import React from "react";
import JobPannel from "./JobPannel";

export default function Experience() {
  return (
      <section className="flex justify-center">
        <div className="grid justify-items-center p-16">
          <p  className="text-Peach text-4xl pb-8">Experiences</p>
          <JobPannel/>
        </div>
      </section>
    );

}