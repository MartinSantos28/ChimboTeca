import { Link } from 'react-router-dom';
import logo from '../assets/img/Biblioteca.png'
import '../assets/style/header.css'


function Header() {
  return (
    <header>
        <img src={logo}></img>
        <h1>ChimboTeca</h1>

    </header>
  );
}
export default Header;