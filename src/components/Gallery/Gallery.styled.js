import styled from 'styled-components';

export const GalleryContainer = styled.div`
    max-width:1300px;
    margin: auto;
    display: grid;
    grid-gap:1rem;

    @media (min-width: 600px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px){
        grid-template-columns: repeat(4, 1fr);
    }    
`
export const ImageCard = styled.div`
    padding: 5px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;

    @media (max-width: 400px){
        max-width: 100%;
    }
`
export const Image = styled.img`
    width: 100%;
    min-height: 420px;
    max-height: 420px;

`
export const Tags = styled.div`
    text-align:center;
    padding: 20px 0px;
    margin-top: 20px;

    @media screen and (max-width: 400px){
        margin-top: -20px;
    }
`
export const ButtonTag = styled.button`
    margin: 40px 10px 10px 10px;
    cursor: pointer;
    background-color: #92f2fc;
    font-weight: bold;
    font-size: 1.3rem;
    padding: 5px 10px;
    border:none;
    color: #666666;
    outline: none;
    border-radius: 10px;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 1);

    &:hover{
       transform: scale(1.08);
       transition: all 0.2s ease-in-out;
    }

    @media screen and(max-width: 400px){
        width:100px;
    }
`