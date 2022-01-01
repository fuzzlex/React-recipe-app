import React from 'react'
import { FormContainer, FoodInput, Button, Select } from './HeaderStyle'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';


const Form = ({mealTypes, setMeal, setQuery, getData}) => {
  
    const { currentUser } = useContext(AuthContext)
    const handleSubmit = (e) =>{

        e.preventDefault();
        currentUser ? getData() : alert("Please login")
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
