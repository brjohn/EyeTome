import React from 'react';

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
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
        const ifErrors = () => {
            if (this.props.errors.length > 0){
                return "red"
            } else {
                return "normal"
            }
        
        }

        return (
            <div className="login-grid">
                <div className="col-1">
                    <div className="fb-greeting">
                        <h1>friendbook</h1>
                        <br />
                        <p>Connect with friends and the world around you on Friendbook</p>
                    </div>
                </div>
                <div className="col-2">
                    <div className="login-form-container">
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            <input onChange={this.update('email')} placeholder="Email" type="text" value={this.state.email} 
                                className="login-input" id={ifErrors()}/>
                            <div className="errors">{this.props.errors}</div>
                            <input onChange={this.update('password')} placeholder="Password" type="password" value={this.state.password} 
                                className="login-input" id={ifErrors()}/>
                            <br />
                            <button type="submit" className="login-button" >Log In</button>
                            
                        </form>
                        <div className="line"></div>
                        <button onClick={() => this.props.openModal('signup')} className="signup-button">Create New Account</button>
                    </div>
                </div>
                
                

            </div>

            

        )
    }


}

export default LoginForm;