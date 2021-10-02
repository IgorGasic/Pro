import React from 'react'
import {FooterContainer, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinksItems, 
    FooterLinkTitle, 
    FooterText, 
    FooterLink,
    FooterSocial, 
    Icon1, 
    Icon2,
    Icon3,
    Icon4,
    Icon5,
    Icon6,
    Icon7} from './Footer.styled';

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Radno vreme</FooterLinkTitle>
                            <FooterText><Icon2 />Svakog dana od 9-15h</FooterText>
                            <FooterText><Icon1 /> Takovska 2</FooterText>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Hitne intervencije</FooterLinkTitle>
                            <FooterText>Svakog dana od 0-24</FooterText>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Kontaktirajte nas</FooterLinkTitle>
                            <FooterText><Icon3 />064 160 94 47</FooterText>
                            <FooterText><Icon4 />prof.upravnik.djm@gmail.com</FooterText>
                            <FooterLink to="/contact"><Icon7 />Kontakt</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Društvene mreže</FooterLinkTitle>
                            <FooterSocial href="https://www.facebook.com/NS-profesionalni-upravnik-stambenih-zgrada-113442150565324"><Icon5 />Facebook</FooterSocial>
                            <FooterSocial href="https://www.facebook.com/NS-profesionalni-upravnik-stambenih-zgrada-113442150565324"><Icon6 />Instagram</FooterSocial>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterContainer>
        </>
    )
}

export default Footer
