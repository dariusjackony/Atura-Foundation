import "./styles/Navbar.css";
import { Link } from "react-router-dom";
function Navbar(){
   
    return(
        <nav className="nav-container">
             <ul className="nav-links-container">
                    <li><Link to="/">LATEST</Link></li>
                    <li><Link to="/ShortFilms">SHORT FILMS</Link></li>
                    <li><Link to="/Documentary">DOCUMENTARY</Link></li>
                    <li><Link to="/Gallery">GALLERY</Link></li>
                    <li><Link to="/About">ABOUT</Link></li>
                 <Link to="/Login">
                    <button className="login-btn">
                    <i className="fas fa-sign-in-alt"></i> SIGN UP
                    </button>
                 </Link>
                 
             </ul>
             
        </nav>
    );
}

export default Navbar;