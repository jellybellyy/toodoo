import React, { Component } from 'react';

class User extends Component {

    render() { 

        let first_name = this.props.rows[0].first_name;
        let tasks = this.props.rows;

        let allTasks = tasks.map((item,index) => {
            return (
                <div>
                    {/* <input type='checkbox'/>
                    <p key={index}>{item.task}</p> */}
                    <input type="checkbox" id={index} name={index}/>
                    <label htmlFor={index}>{item.task}</label>
                </div>
            )
        })

        let reversedTasks = allTasks.reverse();

        return (
            <div>

                <h1>Hey, {first_name}! Hope you're having a pleasant day!</h1>

                <form method="POST" action="/user/:username">
                    <input type="text" name="task" />
                    <button>+</button>
                </form>

                {reversedTasks}

                <form method="POST" action="/">
                    <button>log out</button>
                </form>
            </div>
        );
    }
}
 
export default User;