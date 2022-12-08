import { useContext, useEffect } from 'react';
import UserContext from "../context/UserContext";
import { Navigate,useNavigate } from "react-router-dom";
import Header from '../components/Header';
import BodyBooks from '../Bodies/bodyBooks';
import Footer from "../components/Footer";
import '../assets/style/bodyBooks.css'
function Book() {
    const navigate = useNavigate()
    const { isLogued } = useContext(UserContext)

    useEffect(() => {
        if (!isLogued)
            navigate("/NotLogged")
    }, [])
 



    return (
        <>
        <Header></Header>
        <BodyBooks></BodyBooks>
        <Footer></Footer>
        </>

    )
}
export default Book;