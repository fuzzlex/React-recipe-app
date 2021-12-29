import React, { useState } from 'react'
import { FormContainer, FoodInput, Button, Select } from './HeaderStyle'

const Form = ({mealTypes, setMeal, setQuery, getData}) => {
  
    const handleSubmit = (e) =>{
        e.preventDefault();
        getData();
        setQuery("")
        


    }
    return (
        <FormContainer onSubmit={handleSubmit}>
        <FoodInput onChange={(e) => setQuery(e.target.value)} />
        <Button type='submit'>Search</Button>
        
        <Select onChange={(e) =>  setMeal(e.target.value)} >
        {mealTypes.map((meal,index) =>( 
         <option key={index} value={meal.toLowerCase()}>{meal}</option>
          ))}
       
     
  
            
        </Select>
  
  
  
  
        </FormContainer>
    )
}

export default Form
