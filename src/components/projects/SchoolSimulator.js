import React from "react";
import { Card, CardActionArea, CardActions, CardContent,CardMedia } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import schoolImage from "../../assets/SchoolSimulator.png";


export default function SchoolSimulator() {
  return (
    <Card sx={{ maxWidth: 350}}>
        <CardActions className="bg-Space">
            <a
            href="https://github.com/maxwelltyreece"
            rel="noopener noreferrer"
            target="_blank"
            
            >
            <FontAwesomeIcon icon={faUpRightFromSquare} size="xl"/>
            </a>

        </CardActions>
        <CardActionArea>
            <CardMedia
                component="img"
                height={10}
                image={schoolImage}
                
                alt="portfolio site"
            />
            <CardContent className="bg-Space ">
                <p>A game I dewveloped inspired by Undertale and Zelda.</p>
            </CardContent>
        </CardActionArea>
        
        
    </Card>
      
    );

}