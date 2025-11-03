import "./styles/Navbar.css";
function Hello(){
   
    return(
        <nav className="nav-container">
             <ul className="nav-links-container">
                 <li>LATEST</li>
                 <li>SHORT FILMS</li>
                 <li>DOCUMENTARY</li>
                 <li>GALLERY</li>
                 <div className="nav-actions">
                 <li><i className="fas fa-user"></i>PROFILE</li>
                 <button className="login-btn">
                       <i className="fas fa-sign-in-alt"></i> LOGIN
                 </button>
                 </div>
                 
             </ul>
             
        </nav>
    );
}

export default Hello;