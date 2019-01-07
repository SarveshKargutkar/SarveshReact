import React from 'react';
// import Todo from './Todo'

class Todolist extends React.Component {
    constructor(props) {
        super(props);
    
        // this.handleChange = this.handleChange.bind(this);
    
    }
    
    render() {
        return (
            <div>
               {this.props.todolist.map(todo => (
                <p key={todo.value}> {todo.value}
                    <input type="checkbox" id="mycheck" value="todo" checked={todo.completed} 
                            onChange={() => this.props.handleCheck(todo.value)} />
                    <button type="submit" onClick={()=>this.props.handleCancel(todo.value)}>cancel</button>
                </p>
            ))}
            </div>
        )
    }
}


export default Todolist;