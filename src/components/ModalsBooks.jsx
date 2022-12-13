import   {Books}  from '../Data/books'  
import { useState } from "react";

function Modalsbooks() {
    const [books, setbooks]=useState({
    })
    const handleChange = (e) => {
        setbooks({...books ,[e.target.name]: e.target.value})
        console.log(books)
    }
        const deletes =()=>{

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
                                        <input name="img" type="file" className="form-control" onChange={handleChange} id="inputGroupFile01" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button   onClick={handlerClick} type="button"  className="btn btn-success">Agregar</button>
                                </div>    
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" px-1">
                    <button type="button" className="btn btn-warning  rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Actualizar
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Título del libro a eliminar</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="input-group">
                                        <div className="input-group-text">
                                            <input className="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input"/>
                                        </div>
                                        <input type="text" className="form-control" aria-label="Text input with radio button"/>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="button" className="btn btn-danger">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" px-1">
                    <button type="button" className="btn btn-danger rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Eliminar
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Título del libro a eliminar</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="input-group">
                                        <div className="input-group-text">
                                            <input className="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input"/>
                                        </div>
                                        <input type="text" className="form-control" aria-label="Text input with radio button"/>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="button" className="btn btn-danger">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Modalsbooks;