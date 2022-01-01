import React from 'react'
import { RecipeCard, RecipeImage, Button, RecipeHeader} from "./HomeStyle"
import { useNavigate } from 'react-router-dom'

const RecipeCardComp = ({recipe}) => {

    let navigate = useNavigate()
    const moreClick = () =>{
        navigate("/details", { state: {recipe} })
    }
    return (

        
        <RecipeCard>

        <RecipeHeader>{recipe.label}</RecipeHeader>
        <RecipeImage  src={recipe.image}/>
        <Button onClick={moreClick}>Details</Button>

        </RecipeCard>
    )
}

export default RecipeCardComp
