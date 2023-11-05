import {
    Box, FooterContainer, Row, Column, FooterLink, Heading
}
from "./CustomFooterStyles"

function CustomFooter(){
    return (
        <Box style={{width: "100%"}}>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">
                            Aim
                        </FooterLink>
                        <FooterLink href="#">
                            Vision
                        </FooterLink>
                        <FooterLink href="#">
                            Testimonials
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">
                            Interviews 
                        </FooterLink>
                        <FooterLink href="#">
                            Podcasts 
                        </FooterLink>
                        <FooterLink href="#">
                            Reels 
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                            Apply 
                        </FooterLink>
                        <FooterLink href="#">
                            Email
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-spotify-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                Spotify
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>

                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );

}

export default CustomFooter;