import React, { Component } from 'react';

class Login extends Component {

    render() { 
        return ( 
            <div>
                <h1>Welcome</h1>

                <form method='POST' action='/user'>
                    Username: <input type='text' name='username' /><br />
                    Password: <input type='password' name='password' /><br />
                    <button>log in</button>
                </form>
            </div>
         );
    }
}
 
export default Login;