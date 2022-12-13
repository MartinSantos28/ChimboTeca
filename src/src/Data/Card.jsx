import {useContext, useState} from "react";
import {UserContext} from "../context/UserContext.jsx";

export function Card({value}) {
    const {Books,editarBook} = useContext(UserContext)

    const [book,setBook]=useState(
        {
            id: value.id,
            tittle:value.tittle,
            author: value.author,
            year:value.year,
            img:value.img,
        })
    const handleChange = (e) => {
        setBook({...book ,[e.target.name]: e.target.value})
        console.log(book)
    }
    const handleClik= (e) => {
        editarBook(book)
    }
    return (
        <>
            <section className="seccion-1">
                <div className="container">
                    <div className="row ">
                        <div className="card p-5" style={{width:"18rem"}}>
                            <img src={value.img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-white">{value.tittle}</h5>
                                <p className="card-text text-white">{value.author}</p>
                                <p className="card-text text-white">{value.year}</p>
                                <button type="button" className="btn btn-danger rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Eliminar
                                </button>
                                <button type="button" className="btn btn-warning  rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Actualizar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" px-1">
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

                <div className=" px-1">
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

            </section>
        </>
    )
}