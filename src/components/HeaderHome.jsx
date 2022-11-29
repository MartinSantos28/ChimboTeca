
import logo from '../assets/img/Biblioteca.png'
import '../assets/style/headerhome.css'


function Header() {
  return (
    <header>
      <div className='logo'>
        <img src={logo}></img>
        <h1>ChimboTeca</h1>
        </div>
    </header>
  );
}
export default Header;