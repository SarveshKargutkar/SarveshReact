import React from 'react';
// import Todo from './Todo'

class AddTodo extends React.Component {


    render() {
        return (
            <div>
                <button type="button" onClick={() => this.props.filterTodo("all")}>All</button>
                <button type="button" onClick={() => this.props.filterTodo("completed")}>Completed</button>
                <button type="button" onClick={() => this.props.filterTodo("pending")}>Pending</button>
            </div>
        )
    }
}


export default AddTodo;