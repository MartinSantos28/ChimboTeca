import { useContext, useEffect } from 'react';
import UserContext from "../context/UserContext";
import { Navigate,useNavigate } from "react-router-dom";
import Header from "../components/Header";
import BodyBorrower from "../Bodies/bodyBorrower";
import Footer from "../components/Footer";
function Borrower() {
    const navigate = useNavigate()
    const { isLogued } = useContext(UserContext)

    useEffect(() => {
        if (!isLogued)
            navigate("/NotLogged")
    }, [])

    return ( 
        <>
         <Header></Header>
        <BodyBorrower></BodyBorrower>
        <Footer></Footer>
        </>
        
     );
}

export default Borrower;