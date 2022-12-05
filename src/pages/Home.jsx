import { Navigate,useNavigate } from "react-router-dom";
import { useContext, useEffect } from 'react';
import UserContext from "../context/UserContext";
import Header from "../components/Header";
import HomeBody from "../Bodies/homeBody";
import Footer from "../components/Footer";
function Home() {
    const navigate = useNavigate()
    const { isLogued } = useContext(UserContext)

    useEffect(() => {
        if (!isLogued)
            navigate("/NotLogged")
    }, [])

    return ( 
    <>
    <Header></Header>

    </>
        );
}

export default Home;