
import logo from '../assets/img/Biblioteca.png'
import '../assets/style/headerhome.css'


function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">ChimboTeca</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        
      </div>
    </div>
  </nav>
  );
}
export default Header;