import React from "react";
import { Card, CardActionArea, CardActions, CardContent,CardMedia, Modal } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import schoolImage from "../../assets/SchoolSimulator.png";


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
                <Card>
                    <CardMedia/>
                    <CardContent className="">
                        <p>asfjkashf kjahsf kjsahfask kasjfhask kuashfas kjashf</p>
                        <p>asfjkashf kjahsf kjsahfask kasjfhask kuashfas kjashf</p>
                        <p>asfjkashf kjahsf kjsahfask kasjfhask kuashfas kjashf</p>
                        <p>asfjkashf kjahsf kjsahfask kasjfhask kuashfas kjashf</p>
                        <p>asfjkashf kjahsf kjsahfask kasjfhask kuashfas kjashf</p>
                        <p>asfjkashf kjahsf kjsahfask kasjfhask kuashfas kjashf</p>

                    </CardContent>
                    <CardActions className="bg-Space justify-end">
                        <a href="https://github.com/maxwelltyreece" rel="noopener noreferrer" target="_blank">
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
            </Modal>
        </div> 
    );

}