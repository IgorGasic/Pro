import styled from 'styled-components';

export const ThirdSection = styled.div`
    color:black;
    padding: 80px 0 80px 0;
`

export const InfoRow = styled.div`
    display:flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items:center;
`
export const InfoColumn = styled.div`
    margin-bottom:15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width:50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px){
        max-width:100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`

export const TextWrapper= styled.div`
    max-width:540px;
    padding-top: 70px;
    padding-bottom: 60px;
    font-size: 1.1rem;
    font-weight: bold;
    word-spacing: 0rem;
/*     text-align: justify;
    text-justify: inter-word; */

    @media screen and (max-width: 768px){
        padding-bottom:65px;
        padding-top: 60px;
    }
`

 export const ImgWrapper = styled.div`
    max-width:555px;
    display:flex;
    justify-content: flex-start;
`

export const Img = styled.img`
    padding-right: 0;
    border: 22px solid #ff9b03;
    border-style: ridge;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 700px;
`


