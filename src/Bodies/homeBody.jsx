import { Link } from "react-router-dom";
import '../assets/style/home.css'

function homeBody() {
    return ( 
        <>
        <div id="home">
        <Link to={"/Book"}><h1>Books</h1></Link>
        <Link to={"/Borrow"}><h1>Prestaciones</h1></Link> 
        <Link to={"/Borrower"}><h1>Prestadores</h1></Link>
        
        </div>
        </>

        
     );
}

export default homeBody;