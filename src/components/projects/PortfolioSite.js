import React from "react";
import { Card, CardActionArea, CardActions, CardContent,CardMedia, Zoom, Modal } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import PortfolioSite2 from "../../assets/PortfolioSite2.png";
import PortfolioBanner from "../../assets/PortfolioSite Banner.jpg"
import {faGithub} from '@fortawesome/free-brands-svg-icons'



export default function PortfolioSite() {

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
                    image={PortfolioSite2}
                    
                    alt="portfolio site" />
                    <CardContent className="bg-Space ">
                        <p>My portfolio Site. You're currently browsing it!</p>
                    </CardContent>               
                </CardActionArea>
            </Card>

            <Modal open={open} onClose={handleClose} className="grid place-content-center">
                <Zoom in={open}>
                    <Card>
                        <CardMedia component="img" image={PortfolioBanner} />
                        <CardContent className="">
                            <p>This is the second released edition of my software / web development portfolio site. I have built it using React, utilising MaterialUI, and TailwindCSS. I host my website</p>
                            <p>on Netifly.</p>
                            <br/>
                            <p>Aside from internship experience, this is my largest full scale React project, and I have gained a lot of experience building a complete application from the top down,</p>
                            <p>for example Routes and other components in React Router DOM. It also gave me opportunites to experiment with web design without the limitations and restrictions that</p>
                            <p>premade builders implement.</p>
                            <br/>
                            <p>I am deploying new updates frequently, as there are still multiple areas that require more functionality, however each deploy gives me more scope for learning qualites</p>
                            <p>needed in fullstack development.</p>


                        </CardContent>
                        <CardActions className="bg-Khaki justify-end">
                            <a href="https://maxwellmartin.co.uk" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faUpRightFromSquare} size="xl"/>
                            </a>
                            <a
                                href="https://github.com/maxwelltyreece/Maxwellv2"
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