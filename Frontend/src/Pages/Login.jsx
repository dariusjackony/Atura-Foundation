import ".styles/Login.css"
function Login(){
    return(
      <div className="login-container">
          <h2>Sign Up</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button type="submit">Submit</button>
          </form>
          <p>
            Already have an account? Login
          </p>
      </div>
    )
}
export default Login;