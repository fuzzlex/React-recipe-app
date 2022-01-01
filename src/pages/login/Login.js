import React, { useState } from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyle'
import mealSvg from "../../assets/meal.svg"
import {  useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../auth/firebase-config'
const Login = () => {

    const navigate = useNavigate();
    const [email , setEmail ] = useState();
    const [password , setPassword ] = useState();
    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            await  signInWithEmailAndPassword(auth, email, password)
            navigate("/")
            
        } catch  {
            alert("You enter invalid password")            
        }
 
        
  
    }

    return (
     <LoginContainer>
         <FormContainer>
         <StyledImg src={mealSvg}/>
         <Header>Recipe App LogIn</Header>
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput type="e-mail" onChange={(e) => setEmail(e.target.value)} placeholder="e-mail" required />
            <StyledInput type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" required/>
            <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
        </FormContainer>
     </LoginContainer>
    )
}
export default Login