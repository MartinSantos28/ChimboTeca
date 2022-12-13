import { Link } from "react-router-dom";
import "../assets/style/home.css"

function homeBody() {
    return ( 
        <>
        <div className="container md-3 " style={{width: "50%",marginLeft:"25%"}}>
          <div className="row" style={{witdh:"50%"}}>
              <div className="row align-items-center" >
              <div className="col ">
              <Link className="link" to={"/Book"}><h1>Books</h1></Link>
              </div>
              <div className="col">
               <Link className="link" to={"/Borrow"}><h1>Prestaciones</h1></Link> 
              </div>
              <div className="col">
              <Link className="link" to={"/Borrower"}><h1>Prestadores</h1></Link>
              </div>
        </div>
          </div>
        
        </div>
        
        </>

        
     );
}

export default homeBody;