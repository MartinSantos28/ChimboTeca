import ModalsBorrows from "../components/ModalsBorrows";
import Listado from "../Data/Borrows";
import "../assets/style/tittles.css"
function bodyBorrows() {
    return ( 
        <>
        <p  className="fs-1 px-4 p-3 m-3">Rentas</p>
            <div>
            <Listado></Listado>
        </div>    
        
        <ModalsBorrows></ModalsBorrows>
        </>
        
     );
}

export default bodyBorrows;