
import Listado from "../Data/Borrowers";
import "../assets/style/tittles.css"
function BodyBorrower() {
    return (  
        <div>
            <div id="titulo" >
            <p  className="fs-1 px-4 p-3 m-3">Prestamistas</p>
            <div>
            <Listado></Listado>
            </div>
            </div>
            
        </div>
     );
}

export default BodyBorrower;