import React, { Component } from 'react'
import "./Todo.css";

export default class Todo extends Component {
    render() {
        return (
            <div className="todo-cont">
            <form className="input">
                <h1>Todo App</h1> 
                <input type="text" placeholder="Enter items"/>
                
            </form>
            <ul>
                <li>items<i className="fas fa-trash-alt"></i></li>
                <li>items<i className="fas fa-trash-alt"></i></li>
                <li>items<i className="fas fa-trash-alt"></i></li>
            </ul>
            </div>
        )
    }
}

