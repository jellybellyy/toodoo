import React, { Component } from "react";

class Home extends Component {

    render() {

        let error = this.props[0];

        return (
            <div>
                <h1>TOODOO</h1>

                <form method='GET' action='/login'>
                    <button>Log In</button>
                </form>

                <form method='GET' action='/register'>
                    <input type='submit' value='register' />
                </form>

                <div>
                    {error}
                </div>
            </div>
        );
    }
}

export default Home;
