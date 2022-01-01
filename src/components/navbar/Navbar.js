import React, {useState, useContext} from 'react'
import { Hamburger, Logo, MenuLink, Nav ,Menu} from "./NavbarStyle"
import { AuthContext } from '../../context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../../auth/firebase-config'





const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { currentUser } = useContext(AuthContext)
    console.log(currentUser);

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
            {currentUser ? (
                <p style={{color:"red"}}>Hi {currentUser.displayName.toUpperCase()}</p>
            ) :  <MenuLink onClick={() => setIsOpen(!isOpen)} to="/login">Login</MenuLink>}
            {currentUser ? <MenuLink onClick={SignOuthFun} to="/login">Sign out</MenuLink> :
            <MenuLink onClick={() => setIsOpen(!isOpen)} to="/register">Register</MenuLink>}
            <MenuLink onClick={() => setIsOpen(!isOpen)} to="/about">About</MenuLink>
            <MenuLink onClick={() => setIsOpen(!isOpen)} to={{pathname:"https://github.com/orgs/clarusway/dashboard"}}>Github</MenuLink>
           
            
            
        </Menu>
        </Nav>
     
     )
}

export default Navbar

