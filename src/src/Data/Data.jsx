
import '../assets/style/listado.css'
import {useContext, useState} from "react";
import {UserContext} from "../context/UserContext.jsx";
import {v4} from "uuid";
import {Card} from "./Card";

 

function Listado() {
        const {Books,editarBook} = useContext(UserContext)

    return (  
        <div>
            {Books.map((data) =>   <Card value={data}></Card> )}
      </div>
     );
}

export default Listado;