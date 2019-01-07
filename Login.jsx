import React from 'react';

import history from '../history';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            UserName: '',
            Password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }
    handleChange(e, type) {
        this.setState({ [type]: e.target.value });
        console.log(this.state.UserName);
        console.log(this.state.Password)
    }
    handleSubmit() {
        if (this.state.UserName == 'sarvesh' && this.state.Password == '1234') {
            history.push('/Todo')
        }
    }

    render() {
        return (
            <span>
                <label>
                    Username:
                    <input type="text" onChange={(e) => this.handleChange(e, "UserName")} />
                </label>
                <br />
                <label>
                    Password:
                <input type="text" onChange={(e) => this.handleChange(e, "Password")} />
                </label>
                <button type="button" onClick={this.handleSubmit}>Log In</button>
            </span>

        )
    }
}

// ReactDOM.render(<Login />, document.getElementById('root'));
export default Login;