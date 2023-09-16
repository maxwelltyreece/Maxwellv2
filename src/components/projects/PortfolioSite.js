import React from "react";
import { Card, CardActionArea, CardActions, CardContent,CardMedia, Modal } from "@mui/material";
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
                <Card>
                    <CardMedia component="img" image={PortfolioBanner} />
                    <CardContent className="">
                        <p>dskfghsdk ksdjhfsd kjshdrf skdjfh</p>
                        <p>dskfghsdk ksdjhfsd kjshdrf skdjfh</p>
                        <p>dskfghsdk ksdjhfsd kjshdrf skdjfh</p>
                        <p>dskfghsdk ksdjhfsd kjshdrf skdjfh</p>


                    </CardContent>
                    <CardActions className="bg-Space justify-end">
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
            </Modal>
        </div> 
    );

}