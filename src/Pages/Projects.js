import React from "react";
import PortfolioSite from "../components/projects/PortfolioSite";
import SchoolSimulator from "../components/projects/SchoolSimulator";
import SpotifyCalculator from "../components/projects/SpotifyCalculator";
import { Stack, Divider } from "@mui/material";


export default function Projects() {
  return (
      <section className="flex justify-center">
        <div className="grid justify-items-center p-16">
          <p  className="text-Peach text-4xl pb-8">Projects</p>
          <Stack direction="row" spacing={5}>
            
            <PortfolioSite/>
            <SchoolSimulator/>
            <SpotifyCalculator/>

          </Stack>
          
          
        </div>
      </section>
    );

}