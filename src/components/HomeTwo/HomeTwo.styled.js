import styled from 'styled-components';

export const SecondSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:#92f2fc;
    width:100%;
    padding: 150px 0 160px;

`
export const ServiceWrapper = styled.div`
    max-width:1300px;
    margin: 0 auto;
    display: flex;
    flex-direction:row;
    align-items: center;
    padding: 0 50px;
    
    @media screen and (max-width: 1025px){
        margin: 0 30px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 20px 0;
        margin-top: 10px;
    }
`
export const ServiceCard = styled.div`
    background: #a6a6a6;
    display: flex;
    flex-direction:column;
    align-items: center;
    border-radius: 10px;
    min-height: 635px;
    padding: 10px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.8);
    transition: all 0.2s ease-in-out;
    width: 400px;
    margin: 0 20px;

    &:hover{
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 1025px){
        width: 100%;
        margin-bottom: 20px;
        max-height:500px;
        margin-top: 20px;
    } 
`
export const ServiceIcon = styled.img`
    margin-top: 10px;
    height: 150px;
    width: 150px;
    margin-bottom: 10px;
`
export const ServiceHeading = styled.h1`
    font-size: 2.5rem;
    color: #8c8c8c;
    margin-bottom: 50px;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.8);

    @media screen and (max-width:960px){
        text-align:center;
    }

    @media screen and (max-width: 480px){
        font-size: 2rem;
        text-align: center;
    }
`
export const ServiceH3 = styled.h3`
    font-size:1.5rem;
    margin-bottom: 10px;
    text-align:center;
`
export const ServiceList = styled.ul`
    margin: 10px 0 32px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;    
`
export const ListItem = styled.li`
    margin-bottom: 5px;
    text-align:center;
    font-size: 1.1rem;

    @media screen and (max-width: 1025px){
        font-size:1.8rem;
    }

    @media screen and (max-width: 500px){
        font-size: 1rem;
    }
    @media screen and (max-width: 400px){
        font-size:0.9rem;
    }
    
`