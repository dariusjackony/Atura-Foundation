import "../Components/styles/SignUp.css";

function SignUp(){
    return(
      <div className="SignUp-container">
          <h2>Sign Up</h2>
          <form>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <button type="submit" id="submit-btn">Submit</button>
          </form>
          <p>
            Already have an account? Login
          </p>
      </div>
    )
}
export default SignUp;