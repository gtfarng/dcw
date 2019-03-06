import React, { Component } from 'react'
import './App.css'

export default class Todo extends Component {
    state = {
        tasks: [{ id: 1, task: 'Do homework' },
        { id: 2, task: 'Read book' }],
        id: 3
    }

    addTask = (task) => {
        this.setState({
            tasks: [...this.state.tasks, { id: this.state.id, task }],
            id: this.state.id + 1
        })
    }

    removeTask = (task) => {
        this.setState({
            tasks: [...this.state.tasks, { id: this.state.id, task }],
            id: this.state.id - 1
        })
    }



    render() {
        return (
            <div><br />
                <h1>Todo</h1>
                <TaskList tasks={this.state.tasks} />
                <InputTask addTask={this.addTask} id={this.state.id} />
                <br />

            </div>
        );
    }
}

class TaskList extends Component {
    render() {
        if (this.props.tasks)
            return (<ul > {
                this.props.tasks.map((item) => (
                    <li key={item.id}> {item.task} </li>
                ))
            }
            </ul>)
    }
}

class InputTask extends Component {

    state = { task: '' }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <input type="hidden" name="id" value={this.props.id} /><br />
                <input type="text" name="task" onChange={this.handleChange} /> <br />
                <button onClick={() => this.props.addTask(this.state.task)}>Add</button>
                <button onClick={() => this.props.removeTask(this.state.task)}>Delete</button>
            </div>
        )
    }
}



