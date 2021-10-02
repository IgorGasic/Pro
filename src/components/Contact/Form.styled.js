import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const InfoHeading = styled.h3`
    margin-top:70px;
    text-align:center;
`
export const FormWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 0 20px;
    height: 800px;
    margin-top: -70px;
`

export const StyledFrom = styled.form`
    width: 100%;
    max-width: 700px;
    min-width: 320px;
    padding: 60px 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);
    position: relative;
`
export const FormLable = styled.label`
    font-weight:bold;
`

export const FormInput = styled.input`
    display:block;
    width: 100%;
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 5px 0;
    padding: 20px;
    box-sizing: border-box;
`
export const FormTextArea = styled.textarea`
    background-color: #eee;
    width: 100%;
    min-height: 100px;
    resize: none;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 0 0;
    padding: 20px;
    box-sizing: border-box;
`
export const FormButton = styled.button`
    display:block;
    background-color: #92f2fc;
    color: #666666;
    font-weight:bold;
    font-size: 0.9rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    margin: 25px 0;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`
export const FormError = styled.div`
  color: red;
  font-weight: 800;
  margin-bottom: 15px;
  font-size:0.9rem;
  margin-top: -5px;

`
export const SuccessWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin: 100px 0;  
`
export const SuccessImg = styled.img`
    height:300px;
    width:400px;
 
    @media screen and (max-width: 800px){
        padding-left: 20px;
        margin-left: 20px;
        height: 200px;
        width: 200px;
    }
`
export const SuccessForm = styled.div`
    margin: 50px 0;
    background: green;
    border-radius: 10px;   
`
export const SuccessText = styled.p`
    text-align:center;
    padding-top:10%;
    padding-bottom:10%;
    color:#fff;
    font-size: 2rem;
    font-weight: bold;

    @media screen and (max-width: 800px){
        font-size:1.4rem;
    }
`
export const SuccessButton = styled(Link)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    height: 50px;
    width: 200px;
    border-radius: 10px;
    text-decoration:none;
    padding: 10px 10px;
    background-color: #92f2fc;
    color: #ff9b03;
    margin-top:10px;
    text-align: center;
    font-size: 1.3rem;    
`
export const Alert = styled.p`
    color:green;

    @media screen and (max-width: 400px){
        margin-top:60px;
    }
`