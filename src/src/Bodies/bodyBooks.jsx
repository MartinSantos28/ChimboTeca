
import Listado from '../Data/Data.jsx';
import ModalsBooks from '../components/ModalsBooks.jsx';
function BodyBooks() {
    return (
        <>
            <p className="fs-1 px-4 p-3 m-3">Libros Disponibles</p>
            <div>
               <Listado></Listado>
            </div>
            <ModalsBooks></ModalsBooks>
            


        </>
    );
}

export default BodyBooks;