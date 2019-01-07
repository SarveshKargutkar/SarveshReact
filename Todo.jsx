import React from 'react';
// import history from './history';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterTodo from './FilterTodo';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            todoArray: [],
            filtered:''
        }
        this.addaTodo = this.addaTodo.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.FilterTodo = this.FilterTodo.bind(this);
    }
    addaTodo(todo) {
        this.setState(prevState => {
            const newArray = ([...prevState.todoArray, { value: todo, completed: false }])
            const t1 = newArray.filter(todo => !todo.completed)
            t1.sort();
            const t2 = newArray.filter(todo => todo.completed)
            t2.sort()
            return {
                todoArray: t1.concat(t2)
            }
        })
    }
    FilterTodo(value){
        console.log(value)
        this.setState({filtered:value})
    }
    handleCancel(value) {
        this.setState({
            todoArray: this.state.todoArray.filter(todo => ((value !== todo.value)
            )
            )
        })
    }
    handleCheck(val) {
        this.setState(prevState => {
            const newArray = prevState.todoArray.map(todo => {
                if (val === todo.value) {
                    return {
                        value: val,
                        completed: !(todo.completed)

                    }
                }
                return {
                    value: todo.value,
                    completed: todo.completed
                }
            })
            return { todoArray: newArray };
        })

    }
    render() {

        const filteredTodo = this.state.todoArray.filter(todo => {
            if (this.state.filtered === "pending" && todo.completed === true) { }
            else if (this.state.filtered === "completed" && todo.completed === false) { }
            else {

                return true
            }
        })
        return (
            <div>
                <AddTodo addaTodo={this.addaTodo} />
                <FilterTodo filterTodo={this.FilterTodo}/>
                <TodoList todolist={filteredTodo}
                    handleCancel={this.handleCancel}
                    handleCheck={this.handleCheck} />

            </div>
        )
    }
}

export default Todo;