
import Listado from "../Data/Borrowers";
import "../assets/style/tittles.css"
import ModalsBorrowers from "../components/ModalsBorrowers";
function BodyBorrower() {
    return (  
        <div>
           
            <p  className="fs-1 px-4 p-3 m-3">Prestamistas</p>
            <div>
            <Listado></Listado>
            </div>
            <ModalsBorrowers></ModalsBorrowers>
            
            
        </div>
     );
}

export default BodyBorrower;