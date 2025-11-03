import "./styles/Navbar.css";
function Navbar(){
   
    return(
        <nav className="nav-container">
             <ul className="nav-links-container">
                 <li>LATEST</li>
                 <li>SHORT FILMS</li>
                 <li>DOCUMENTARY</li>
                 <li>GALLERY</li>
                 <li>ABOUT</li>
                 
                 <button className="login-btn">
                       <i className="fas fa-sign-in-alt"></i> SIGN UP
                 </button>
                
                 
             </ul>
             
        </nav>
    );
}

export default Navbar;