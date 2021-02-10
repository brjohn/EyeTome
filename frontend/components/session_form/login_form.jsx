import React from 'react';

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "Email or Phone Number",
            password: "Password"
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    render(){

        return (

            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <input onChange={this.update('email')} type="text" value={this.state.email} className="login-input"/>
                    <br/>
                    <input onChange={this.update('password')} type="password" value={this.state.password} className="login-input" />
                    <br/>
                    <input type="submit" className="login-button" value="Log In"/>
                </form>
                <button onClick={() => this.props.openModal('signup')}>Create New Account</button>
            </div>

        )
    }


}

export default LoginForm;