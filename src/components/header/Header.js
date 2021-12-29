import React from 'react'
import Form from './Form'
import { HeaderContainer, MainHeader,FormContainer,FoodInput, Button, Select } from './HeaderStyle'

const Header = ({mealTypes, setMeal,setQuery, getData}) => {
    return (
      <HeaderContainer>
      <MainHeader>Food App</MainHeader>
      <Form 
          mealTypes = {mealTypes}
          setMeal = {setMeal}
          setQuery = {setQuery}
          getData = {getData}
      />

 


      </HeaderContainer>
    )
}

export default Header
