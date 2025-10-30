import "./styles/Navbar.css";
function Hello(){
   
    return(
        <nav className="nav-container">
            <div className="logo">ATURA</div>
             <ul className="nav-links-container">
                 <li>HOME</li>
                 <li>ABOUT</li>
                 <li>PROFILE</li>
                 <li>LOGIN</li>
                 <button className="login-btn">
                       <i className="fas fa-sign-in-alt"></i> LOGIN
                 </button>
             </ul>
             
        </nav>
    );
}

export default Hello;