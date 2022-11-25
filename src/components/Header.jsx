import { Link } from 'react-router-dom';
import logo from '../assets/img/Biblioteca.png'
import Home from "../assets/img/home.png"
import '../assets/style/header.css'


function Header() {
  return (
    <header>
        <Link to={"/Home"}><img src={Home}></img></Link>
        <h1>ChimboTeca</h1>
        <Link to="/Borrow"><h2>Borrow</h2></Link>
        <Link to="/Borrower"><h2>Borrower</h2></Link>
        <Link to="/Book"><h2>Book</h2></Link>
    </header>
  );
}
export default Header;
