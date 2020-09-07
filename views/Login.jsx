import React, { Component } from 'react';

class Login extends Component {

    render() { 

        let error = this.props[0];

        return (
          <div>
            <h1>Welcome</h1>

            <form method="POST" action="/user">
              Username: <input type="text" name="username" />
              <br />
              Password: <input type="password" name="password" />
              <br />
              <button>log in</button>
            </form>

            <div>
              <br />
              {error}
            </div>

            <h4>
              <a href="https://toodoo-todolist.herokuapp.com/register">
                Don't have an account yet?
              </a>
            </h4>
            <h4>
              <a href="/">Home</a>
            </h4>
          </div>
        );
    }
}
 
export default Login;