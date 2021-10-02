import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {GoLocation} from 'react-icons/go';
import {CgWorkAlt} from 'react-icons/cg';
import {BiPhone} from 'react-icons/bi';
import {FiMail} from 'react-icons/fi';
import {AiOutlineFacebook, AiOutlineInstagram, } from 'react-icons/ai';
import {MdContactMail} from 'react-icons/md';

export const FooterContainer = styled.div`
    background-color: #101522;
    padding: 3rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;    
`;

export const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display:flex;
    justify-content:center;

    @media screen and (max-width: 820px){
        padding-top:32px;
    }
`
export const FooterLinksWrapper = styled.div`
    display:flex;
    
    @media screen and (max-width: 1025px){
        display:flex;
        flex-direction:row;
    }

    @media screen and (max-width: 420px){
        display:flex;
        flex-direction:column;
    }
`
export const FooterLinksItems = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin:16px 35px;
    text-align: left;
    width: 220px;
    box-sizing:border-box;
    color: #fff;

    @media screen and (max-width: 1025px){
        margin: 0;
        padding: 10px;
        width: 100%;
        
    }
    
    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h2`
    margin-bottom: 16px;    
`

export const FooterText = styled.p`
    display:inline-flex;
    color: #fff;
    margin-bottom: 0.8rem;
`
export const FooterLink = styled(Link)`
    color: #fff;
    margin-bottom: 0.8rem;
    text-decoration: none;
    display:inline-flex;
`
export const FooterSocial = styled.a`
    text-decoration:none;
    color:#fff;
    margin-bottom:0.8rem;
    display:inline-flex;
`
export const Icon1 = styled(GoLocation)`
    margin-right:0.2rem;

`
export const Icon2 = styled(CgWorkAlt)`
    margin-right:0.4rem;
`
export const Icon3 = styled(BiPhone)`
    margin-right:0.4rem;
`
export const Icon4 = styled(FiMail)`
    margin-right:0.3rem;
`
export const Icon5 = styled(AiOutlineFacebook)`
    margin-right:0.4rem;
`
export const Icon6 = styled(AiOutlineInstagram)`
    margin-right:0.4rem;
`
export const Icon7 = styled(MdContactMail)`
    margin-right:0.4rem;
`