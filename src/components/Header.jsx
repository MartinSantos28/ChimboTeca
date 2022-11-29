import { Link } from 'react-router-dom';
import Home from "../assets/img/home.png"
import '../assets/style/header.css'


function Header() {
  return (
    <header>
     
        <nav className="navbar navbar-expand-lg bg-light">
              <div className='logo'>
              <Link to={"/Home"}><img src={Home}></img></Link>
              <div className="container-fluid">
                <h1 className="navbar-brand">Chimboteca</h1>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <h2><Link className='link' to="/Borrow">Borrow</Link></h2>
                    <h2> <Link className='link' to="/Borrower">Borrower</Link></h2>
                    <h2> <Link className='link' to="/Book">Book</Link></h2>
                  </div>
                </div>
              </div>
              </div>
          </nav>
        
    </header>
  );
}
export default Header;
