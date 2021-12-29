import React, {useState} from 'react'
import { Hamburger, Logo, MenuLink, Nav ,Menu} from "./NavbarStyle"





const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen);


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
            <MenuLink onClick={() => setIsOpen(!isOpen)} to="/login">Logout</MenuLink>
        </Menu>
        </Nav>
     
     )
}

export default Navbar

