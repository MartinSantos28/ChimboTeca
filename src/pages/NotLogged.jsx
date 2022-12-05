import "../assets/style/notFound.css"
import { Link } from 'react-router-dom';
function NotLogged() {
    return (
        <>
        <div className="padre">
            <div id="hijo">
            <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <span className="error">:((</span>
                <p className="fs-3"> <p className="text-danger">Opps!</p> You are not loggued</p>
                <p className="lead">
                    Please sign 
                  </p>
                <span className="btn btn-primary"><Link id="gohome"to="/Login">Sign in</Link></span>
            </div>
        </div>
            </div>
        
        </div>
        
        </>
    );
}
export default NotLogged;