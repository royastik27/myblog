import './Signup.css';

function Signup() {
  return (
    <div id="signup-panel" className="col-md-6">
        <center><h4 className="prevent-select">Sign Up 👤</h4></center>
        <hr></hr>

        <form>
          <div className="mb-3">
            <label for="signup-username" class="form-label">Username:</label>
            <input name="signup-username" type="text" id="signup-username" className="form-control"></input>
            <small class="form-text">Your username should only contain lowercase and uppcase letters, numbers and special symbols.</small>
          </div>

          <div className="mb-3">
            <label for="signup-password" class="form-label">Password:</label>
            <input name="signup-password" type="password" id="signup-password" className="form-control"></input>
            <small class="form-text">Your password should be at least 8 characters long containing all of alphabets, numbers and special symbols.</small>
          </div>

          <div className="mb-3">
            <label for="signup-password-repeat" class="form-label">Re-enter password:</label>
            <input name="signup-password-repeat" type="password" id="signup-password-repeat" className="form-control"></input>
          </div>

          <div className="mb-3">
            <label for="signup-birthdate" className="form-label">Birthday:</label>
            <input name="signup-birthdate" type="date" id="signup-birthdate" className="form-control"></input>
          </div>

          <div className="mb-3">
            <label for="signup-gender" className="form-label">Gender:</label>

            <div id="signup-gender">
              <div className="form-check form-check-inline">
                <label className="form-check-label" for="singup-gender-male">Male</label>
                <input name="signup-gender" value="male" type="radio" id="singup-gender-male" className="form-check-input"></input>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" for="singup-gender-female">Female</label>
                <input name="signup-gender" value="male" type="radio" id="singup-gender-female" className="form-check-input"></input>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" for="singup-gender-other">Other</label>
                <input name="signup-gender" value="male" type="radio" id="singup-gender-other" className="form-check-input"></input>
              </div>
            </div>

          </div>

        </form>
    </div>
  );
}

export default Signup;