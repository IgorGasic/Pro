import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {
    FormWrapper,
     StyledFrom, 
     FormInput, 
     FormTextArea, 
     FormButton, 
     InfoHeading, 
     FormLable,
     Alert} from './Form.styled';


const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loader, setLoader] = useState(false);
    const [msg, setMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoader(true);

        emailjs.sendForm('service_jse2ou8', 'template_xp52grs', e.target, 'user_z6c0GnunEejnMLUlEn7v5')
        .then((result) => {
            console.log(result.text);
            setLoader(false);
            setMsg('Uspešno ste poslali poruku!');
        }, (error) => {
            console.log(error.text);
            setLoader(false);
        });


    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
}

    return (
        <>  
            <InfoHeading>Ukoliko imate bilo kakva pitanja možete nas kontaktirati na telefon 064/160-94-47 ili nam poslati email putem forme</InfoHeading>
                <FormWrapper>
                    <StyledFrom onSubmit={handleSubmit}>
                        <FormLable htmlFor="name">Ime i prezime</FormLable>
                        <FormInput type="text" id="name" name="name" value={name} onChange={(e)=> setName(e.target.value)} autoComplete="off"/>
                        <FormLable htmlFor="email">Email</FormLable>
                        <FormInput type="email" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} required autoComplete="off"/>
                        <FormLable htmlFor="subject">Naslov poruke</FormLable>
                        <FormInput type="text" id="subject" name="subject" value={subject} onChange={(e)=> setSubject(e.target.value)} autoComplete="off"/>
                        <FormLable htmlFor="message">Poruka</FormLable>
                        <FormTextArea id="message" name="message" value={message} onChange={(e)=> setMessage(e.target.value)}/>
                        <FormButton type="submit" style={{background: loader ? "#ccc" : " #92f2fc", color: loader ? "#4d4d4d" : "#666666"}}>Pošalji poruku</FormButton>
                        {msg && <Alert>{msg}</Alert>}
                    </StyledFrom>
                </FormWrapper>
        </>
    )
}

export default Form
