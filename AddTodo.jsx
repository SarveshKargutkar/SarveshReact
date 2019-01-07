import React from 'react';
// import Todo from './Todo'

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.todoAdd = this.todoAdd.bind(this)
    }
    handleChange(e) {
        this.setState({ text: e.target.value })
    }   
    todoAdd() {
        return (
            <div>
                {this.setState({ text: ' ' })}
                {this.props.addaTodo(this.state.text)}
            </div>
        )
    }
    
    render() {
        return (
            <div>
                <label>
                    Add :<input type="text" onChange={this.handleChange} value={this.state.text} ></input>
                </label>
                <button type="button" onClick={this.todoAdd} >Add</button>
            </div>
        )
    }
}


export default AddTodo;