import React, { Component } from 'react'

export class NewUser extends Component {
    render() {

        let first_name = this.props.rows[0].first_name;

        return (
            <div>
                <h1>Hi {first_name}, welcome to TOODOO!</h1>
                <h2>Let's get you started by keying in your first task!</h2>

                <form method="POST" action="/user/:username">
                    <input type="text" name="task" />
                    <button>+</button>
                </form>

            </div>
        );
    }
}

export default NewUser
