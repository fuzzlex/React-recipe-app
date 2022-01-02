import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../auth/firebase-config'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Grid, Header,  Message, Segment } from 'semantic-ui-react'

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
    const navigatelogin = () =>{
        navigate("/login")
    }
    return (
       <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
    <Grid.Column style={{ maxWidth: 500 }} >
      <Header as='h1' color='teal' textAlign='center' size='huge'>
       Register
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input  onChange={(e) => setName(e.target.value)}  fluid icon='user' iconPosition='left' placeholder='Name' size='huge' />
          <Form.Input  onChange={(e) => setSurname(e.target.value)}  fluid icon='user' iconPosition='left' placeholder='Surname' size='huge' />
          <Form.Input  onChange={(e) => setEmail(e.target.value)}  fluid icon='mail' iconPosition='left' placeholder='E-mail address' size='huge' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            size='huge'
             onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleSubmit} color='teal' fluid size='huge'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an account? <a style={{cursor:"pointer"}} onClick={navigatelogin}>Sign In</a>
      </Message>
    </Grid.Column>
  </Grid>
    )
}
export default Register