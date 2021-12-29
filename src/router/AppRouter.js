import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react'
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Detail from "../pages/details/Detail";


const AppRouter = () => {
    return (
        <BrowserRouter>

        <Navbar />
        <Routes>
        <Route>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/details"  element={<Detail/>}/> 
                    <Route path="/login"  element={<Login/>}/>   

        </Route>
        </Routes>

        </BrowserRouter>
    )
}
 export default AppRouter
