import React, { Component } from 'react';

class Register extends Component {

    render() { 
        return ( 
            <div>
                <h1>Registration</h1>

                <form method='POST' action='/new_user'>
                    First Name: <input type='text' name='first_name' /><br />
                    Last Name: <input type='text' name='last_name' /><br />
                    Username: <input type='text' name='username' /><br />
                    Password: <input type='password' name='password' /><br />
                    <button>register</button><button type='reset'>reset</button>
                </form>
            </div>
         );
    }
}
 
export default Register;



                    