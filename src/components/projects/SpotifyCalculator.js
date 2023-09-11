import React from "react";
import { Card, CardActionArea, CardActions, CardContent,CardMedia } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import SpotifyLogo from "../../assets/SpotifyLogo.png";


export default function SpotifyCalculator() {
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
                image={SpotifyLogo}
                
                alt="portfolio site"
            />
            <CardContent className="bg-Space ">
                <p>A web app to calculate music taste similarity using Spotify API.</p>
            </CardContent>
        </CardActionArea>
        
        
    </Card>
      
    );

}