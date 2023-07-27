import React from "react";
import { spotlightProjects } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { Grid } from "@mui/material";

export default function Projects() {
  return (
    <div>
      <div className="grid grid-cols-4 space-x-4 justify-items-stretch">
          {Object.keys(spotlightProjects).map((key, i) => (
            <div className="bg-Space">
              <div className="">
                <div className="folder-icon">
                  <FontAwesomeIcon icon={faFolderOpen} size="xl"/>
                </div>
              </div>

              <div className="card-title">{key}</div>
              <div>{spotlightProjects[key]["desc"]}</div>
              <div>{spotlightProjects[key]["techStack"]}</div>
            </div>
          ))}
      </div>
      
    </div>
  );
}
