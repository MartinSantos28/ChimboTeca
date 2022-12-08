import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from "../context/UserContext";

import "../assets/style/Home.css"


function Header() {
  const { setIsLogued } = useContext(UserContext)
  const handleClick = () => {
    setIsLogued(false);
  };
  return (

    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">ChimboTeca</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="collapsibleNavbar" >
          <ul className="navbar-nav ">
           
          </ul>
        </div>
        <div className="float-right "><Link to={"/Book"}><a className="nav-link">Libros</a></Link></div>      
        <div className="float-right"><Link to={"/Borrower"}><a className="nav-link" >Prestadores</a></Link></div> 
        <div className="float-right"><Link to={"/Borrow"}> <a className="nav-link" href="#">Rentas</a></Link></div> 
        <div className="float-right"><Link className="nav-item" to={"/Login"} onClick={handleClick}><a className='nav-link'>Cerrar Sesion</a></Link></div>

      </div>
    </nav>
  );
}
export default Header;
