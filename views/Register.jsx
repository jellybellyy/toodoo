import React, { Component } from 'react';

class Register extends Component {

    render() { 
        return (
          <div>
            <h1>Registration</h1>

            <form method="POST" action="/new_user">
              First Name: <input type="text" name="first_name" required />
              <br />
              Last Name: <input type="text" name="last_name" required />
              <br />
              Username: <input type="text" name="username" required />
              <br />
              Password: <input type="password" name="password" required />
              <br />
              <button>register</button>
              <button type="reset">reset</button>
            </form>

            <h4><a href="http://localhost:3000/login">Already have an account?</a></h4>
            <h4><a href='http://localhost:3000'>Home</a></h4>
          </div>
        );
    }
}
 
export default Register;



                    