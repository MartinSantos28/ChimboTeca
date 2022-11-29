import { Link } from "react-router-dom";
import '../assets/style/home.css'

function homeBody() {
    return ( 
        <>
        <div id="home" className="card" style={{width: "18rem"}}>
             <ul className="list-group list-group-flush">
              <li className="list-group-item"><Link to={"/Book"}><h1>Books</h1></Link></li>
              <li className="list-group-item"> <Link to={"/Borrow"}><h1>Prestaciones</h1></Link> </li>
              <li className="list-group-item"><Link to={"/Borrower"}><h1>Prestadores</h1></Link></li>
             </ul>
</div>
        <div id="...">
        
       
        
        
        </div>
        </>

        
     );
}

export default homeBody;