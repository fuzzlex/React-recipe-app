import React, {useState, useContext} from 'react'
import { Hamburger, Logo, MenuLink, Nav ,Menu} from "./NavbarStyle"
import { AuthContext } from '../../context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../../auth/firebase-config'
import { Button } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom"





const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { currentUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const SignOuthFun = async () =>{
       await signOut(auth)
    }

    return (
        <Nav>
        <Logo to="/">
            <i>{"<<Bolkepce>>"}</i><span>recipe</span>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span/>
            <span/>
            <span/>
        </Hamburger>
        <Menu isOpen={isOpen} >
     
            
            <MenuLink onClick={() => setIsOpen(!isOpen)} to="/about">About</MenuLink>
            <MenuLink onClick={() => setIsOpen(!isOpen)} to={{pathname:"https://github.com/orgs/clarusway/dashboard"}}>Github</MenuLink>
            {currentUser ? <Button secondary size="large" onClick={SignOuthFun} to="/login">Sign out</Button> :
            <Button secondary size="large" onClick={() => navigate("/register")} >Register</Button>}
                   {currentUser ? (
                    <Button style={{backgroundColor:"#00adb5", color:"white"}} animated='drop' size="large">
                        <Button.Content  visible>{currentUser.displayName.toUpperCase()}</Button.Content>
                         <Button.Content hidden>Profile</Button.Content>
                    </Button>
            ) :  <Button primary size="large" onClick={() =>  navigate("/login")} >Login</Button>}
           
            
            
        </Menu>
        </Nav>
     
     )
}

export default Navbar

