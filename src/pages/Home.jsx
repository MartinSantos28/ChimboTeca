import { Navigate,useNavigate } from "react-router-dom";
import { useContext, useEffect } from 'react';
import UserContext from "../context/UserContext";
import Header from "../components/HeaderHome";
import HomeBody from "../Bodies/homeBody";
import Footer from "../components/Footer";
function Home() {
    const navigate = useNavigate()
    const { isLogued } = useContext(UserContext)

    useEffect(() => {
        if (!isLogued)
            navigate("/Home")
    }, [])

    return ( 
    <>
    <Header></Header>
    <HomeBody></HomeBody>
    <Footer></Footer>
    </>
        );
}

export default Home;