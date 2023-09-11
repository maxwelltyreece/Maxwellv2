import React from "react";
import { Card, CardActionArea, CardActions, CardContent,CardMedia } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import PortfolioSite2 from "../../assets/PortfolioSite2.png";


export default function PortfolioSite() {
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
                image={PortfolioSite2}
                
                alt="portfolio site"
            />
            <CardContent className="bg-Space ">
                <p>My portfolio Site. You're currently browsing it!</p>
            </CardContent>
        </CardActionArea>
        
        
    </Card>
      
    );

}