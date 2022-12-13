import   {Books}  from '../Data/books'  
import {useContext, useState} from "react";
import {UserContext} from "../context/UserContext.jsx";
import {v4} from "uuid";

function Modalsbooks() {

    const {agregarBook,Books} = useContext(UserContext)
    const [books, setbooks]=useState({
        id: v4(),
        tittle:"",
        author: "",
        year:"",
        img:"",



    })
    const handleChange = (e) => {
        setbooks({...books ,[e.target.name]: e.target.value})
        console.log(books)
    }
    const handleClik= (e) => {
        agregarBook(books)
    }
  
    return (
        <>
            <div className="nav d-flex flex-row-reverse ">
                <div className="px-1 ">
                    <button type="button" className="btn btn-success rounded-pill" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Agregar
                    </button>
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Agregar Libro</h5>
                                </div>
                                <form>
                                <div className="modal-body">
                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-secondary" type="button" id="button-addon1">Titulo</button>
                                        <input onChange={handleChange} name="tittle" type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-secondary" type="button btn-date" id="button-addon1">Autor</button>
                                        <input name="author" onChange={handleChange} type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                    </div>

                                    <div className="input-group mb-3">
                                        <button className="btn btn-outline-secondary" type="button btn-date" id="button-addon1">Año de publicacion</button>
                                        <input name="year" type="text" onChange={handleChange} className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <label className="input-group-text" htmlFor="inputGroupFile01">Portada</label>
                                        <input name="img" type="text" className="form-control" onChange={handleChange} id="inputGroupFile01" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button onClick={()=> handleClik()} type="button"  className="btn btn-success">Agregar</button>
                                </div>    
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Modalsbooks;