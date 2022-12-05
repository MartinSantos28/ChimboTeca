import { useContext, useEffect } from 'react';
import UserContext from "../context/UserContext";
import { Navigate,useNavigate } from "react-router-dom";
import Header from "../components/Header";
import BodyBorrows from "../Bodies/bodyBorrows";
import Footer from "../components/Footer";
function Borrow() {
    const navigate = useNavigate()
    const { isLogued } = useContext(UserContext)

    useEffect(() => {
        if (!isLogued)
            navigate("/NotLogged")
    }, [])
    return ( 
        <>
        <Header></Header>
       <BodyBorrows></BodyBorrows>
       <Footer></Footer>
        </>
     );
}

export default Borrow;