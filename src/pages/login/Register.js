import React, { useState } from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyle'
import mealSvg from "../../assets/meal.svg"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../auth/firebase-config'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail ] = useState()
    const [password, setPassword ] = useState()
    const navigate = useNavigate();

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const displayName = name + " " + surname;
        console.log(displayName);
        try {
            await createUserWithEmailAndPassword(auth , email, password)
            await updateProfile(auth.currentUser, {displayName : displayName})
            navigate("/")
            
        } catch  {
            alert("Something wrong!!! ")            
        }
    }
    return (
     <LoginContainer>
         <FormContainer>
         <StyledImg src={mealSvg}/>
         <Header>Recipe app Register</Header>
        <StyledForm >
            <StyledInput type="text" placeholder="name" onChange={(e) => setName(e.target.value)} required/>
            <StyledInput type="text" placeholder="surname" onChange={(e) => setSurname(e.target.value)} required/>
            <StyledInput type="e-mail" placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)} required/>
            <StyledInput type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required/>
            <StyledButton onClick={handleSubmit}>Sign In</StyledButton>
        </StyledForm>
        </FormContainer>
     </LoginContainer>
    )
}
export default Register