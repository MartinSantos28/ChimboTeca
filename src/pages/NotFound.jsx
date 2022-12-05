import "../assets/style/notFound.css"
import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <>
        <div className="padre">
            <div id="hijo">
            <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <span className="error">404</span>
                <p className="fs-3"> <p className="text-danger">Opps!</p> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <span className="btn btn-primary"><Link id="gohome"to="/Home">Go Home</Link></span>
            </div>
        </div>
            </div>
        
        </div>
        
        </>
    );
}
export default NotFound;