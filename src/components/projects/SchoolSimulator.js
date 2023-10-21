import React from "react";
import { Card, CardActionArea, CardActions, CardContent,CardMedia, Zoom, Modal } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import schoolImage from "../../assets/SchoolSimulator2.png";
import schoolBanner from "../../assets/SchoolSimulator.png"


export default function SchoolSimulator() {
    const[open,setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <div>
            <Card sx={{ maxWidth: 300}}>
                <CardActionArea onClick={handleOpen}>
                    <CardMedia
                        component="img"
                        height={10}
                        image={schoolImage}
                    
                        alt="portfolio site"
                    />
                    <CardContent className="bg-Space ">
                        <p>A game I developed inspired by Undertale and Zelda.</p>
                    </CardContent>  
                </CardActionArea>
        
        
            </Card>

            <Modal open={open} onClose={handleClose} className="grid place-content-center">
                <Zoom in={open}>
                    <Card>
                        <CardMedia component="img" image={schoolBanner}/>
                        <CardContent className="">
                            <p>This is 'School Simulator' a game I developed for the Computing Club in my school, primarily built through Unity, using C# scripting.</p>
                            <br/>
                            <p>After playing Undertale and seeing it's art inspiration from older adventure style games, I aimed to make my own rendition for my school computing club, with a familiar </p>
                            <p>theme, as I built and designed all sprites, maps, and items myself, all modelled from my school and people within it. This project gave me a larger understanding of not</p>
                            <p>just game design, but the entire process of creating a game, as I had to widen my skillset to encompass taking market data, analysing competitor games in my niche to </p>
                            <p>find popular traits, and developing achievable criteria before even beginning the design process.</p>

                        </CardContent>
                        <CardActions className="bg-Khaki justify-end">
                            <a href="https://play.unity.com/mg/other/webgl-builds-298570" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faUpRightFromSquare} size="xl"/>
                            </a>
                            <a
                                href="https://github.com/maxwelltyreece/School-Simulator"
                                rel="noopener noreferrer"
                                target="_blank"
                                
                                >
                                <FontAwesomeIcon icon={faGithub} size="xl"/>
                            </a>
                        </CardActions>
                    </Card>
                </Zoom>
            </Modal>
        </div> 
    );

}