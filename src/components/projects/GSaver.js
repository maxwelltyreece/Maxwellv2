import React from "react";
import { Card, CardActionArea, CardActions, CardContent,CardMedia, Modal, Zoom } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import GoogleLogo from '../../assets/Google.jpg';
import GSaverBanner from '../../assets/GSaver Banner.png'


export default function GSaver() {

    const[open,setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <div>
            <Card sx={{ maxWidth: 300}}>
                <CardActionArea onClick={handleOpen}>
                    <CardMedia
                    component="img"
                    image={GoogleLogo}
                    
                    alt="portfolio site" />
                    <CardContent className="bg-Space ">
                        <p>GSaver - A financial hub for students</p>
                    </CardContent>               
                </CardActionArea>
            </Card>

            <Modal open={open} onClose={handleClose} className="grid place-content-center">
                <Zoom in={open}>
                    <Card> 
                        <CardMedia component="img" image={GSaverBanner}/>
                        <CardContent className="">
                        <p>Thrilled to have participated and excelled at the BGN Hackathon 2023, showcasing my passion for innovation and leadership. Our project - 'GSaver' - leveraged generative AI</p>
                        <p> to craft an intuitive and user-centric platform, revolutionizing how students manage their finances.</p>
                        <br/>
                        <p>Alongside react for our front end, we used OpenAI API to create our chatbot, and Google Cloud Platform for text-to-speech compatability. Our endeavours were rewarded with</p>
                        <p>winning second place!</p>


                        </CardContent>
                        <CardActions className="bg-Khaki justify-end">
                            <a
                                href="https://github.com/maxwelltyreece/Gsaver"
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