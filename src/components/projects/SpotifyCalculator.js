import React from "react";
import { Card, CardActionArea, CardActions, CardContent,CardMedia, Modal } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import SpotifyLogo from "../../assets/SpotifyLogo.png";
import SpotifyBanner from "../../assets/Spotify API banner.png";



export default function SpotifyCalculator() {

    const[open,setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <div>
            <Card sx={{ maxWidth: 300}}>
                <CardActionArea onClick={handleOpen}>
                    <CardMedia
                    component="img"
                    image={SpotifyLogo}
                    
                    alt="portfolio site" />
                    <CardContent className="bg-Space ">
                        <p>A web app to calculate music taste similarity using Spotify API</p>
                    </CardContent>               
                </CardActionArea>
            </Card>

            <Modal open={open} onClose={handleClose} className="grid place-content-center">
                <Card> 
                    <CardMedia component="img" image={SpotifyBanner}/>
                    <CardContent className="">
                        <p>in development</p>


                    </CardContent>
                    <CardActions className="bg-Khaki justify-end">
                        <a
                            href="https://github.com/maxwelltyreece"
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