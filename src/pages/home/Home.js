import axios from 'axios';
import React from 'react'
import Header from '../../components/header/Header'
import { useState  } from 'react';
import { MainContainer, ImgDiv, HomeImg } from "./HomeStyle"
import homeSvg from "../../assets/home.svg"
import RecipeCardComp from './RecipeCardComp';


const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"]
const APP_ID = 'c13dada8';
const APP_KEY = 'be8fed291e9ad8f25681005b4a72b689';

const Home = () => {
    const [query, setQuery] = useState("")
    const [recipes, setRecipes] = useState();
    const [meal, setMeal] = useState(mealTypes[0].toLowerCase())




    const Url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`


    const getData = async () => {
        const result = await axios.get(Url)
        console.log(result);
        setRecipes(result.data.hits)
    }

    return (
        <div style={{backgroundColor: "#00adb5"}} >
            <Header
                mealTypes={mealTypes}
                setMeal={setMeal}
                setQuery={setQuery}
                getData={getData} />
            
            

            {recipes  ? (<MainContainer>
                
                {recipes.map((item, index) => (
                    <RecipeCardComp 
                    recipe = {item.recipe}
                    key={index}

                    />

                ))}
              


            </MainContainer>) :

                <ImgDiv>
                    <HomeImg src={homeSvg} />
                </ImgDiv>}



        </div>
    )
}

export default Home
