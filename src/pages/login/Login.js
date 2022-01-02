import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../auth/firebase-config'
import { Button, Form, Grid, Header,  Message, Segment } from 'semantic-ui-react'

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
  <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle' >
    <Grid.Column style={{ maxWidth: 500 }} >
      <Header as='h1' color='teal' textAlign='center' size='huge'>
       Login Recipe App
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input  onChange={(e) => setEmail(e.target.value)}  fluid icon='user' iconPosition='left' placeholder='E-mail address' size='huge' />
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
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
    )
}
export default Login