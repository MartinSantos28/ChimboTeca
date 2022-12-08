
import Listado from "../Data/Borrows";
import "../assets/style/tittles.css"
function bodyBorrows() {
    return ( 
        <>
        <div id="titulo">
        <p  className="fs-1 px-4 p-3 m-3">Rentas</p>
            <div>
            <Listado></Listado>
        </div>    
        </div>
        
        </>
        
     );
}

export default bodyBorrows;