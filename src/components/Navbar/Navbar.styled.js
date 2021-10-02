import styled from 'styled-components';
import {BiBuildingHouse} from 'react-icons/bi';
import {Container} from '../../GlobalStyle';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    background: #92f2fc;
    height: 80px;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    top: 0;
    z-index: 999;
    margin-top: 0px;
    padding-top:0px;
    position: sticky;
`

export const NavbarContainer = styled(Container)`
    display:flex;
    justify-content:space-between;
    height: 80px;

    ${Container}
`

export const NavLogo = styled(Link)`
    justify-self:flex-start;
    cursor: pointer;
    display:flex;
    align-items:center;
    text-decoration:none;
    color:#666666;
    font-size: 2rem;

    @media screen and (max-width: 760px){
        font-size: 1.1rem;
    }

    @media screen and (max-width: 320px){
        font-size: 1rem;
    } 
`
export const NavIcon = styled(BiBuildingHouse)`
    margin-right: 0.5rem;
    `

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 960px){
    display: block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size: 1.9rem;
    cursor: pointer;
    width: 25px;
    }    
`

export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align: center;

    @media screen and (max-width:960px){
        display:flex;
        flex-direction:column;
        width:100%;
        height:50vh;
        position: absolute;
        top: 80px;
        left:${({click}) =>(click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #92f2fc;
    }
    `
export const NavItem = styled.li`
    height:60px;
    border-bottom:2px solid transparent;
    font-size:1.5rem;
    
    &:hover{
        border-bottom: 2px solid #666666;
    }
    
    @media screen and (max-width: 960px){
        width: 100%;

        &:hover{
            border:none;
        }
    }
`
export const NavLinks = styled(Link)`
    color: #666666;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height:100%;

    @media screen and (max-width: 960px){
        text-align:center;
        padding: 2rem;
        width: 100%;
        display: table;
    }
`

