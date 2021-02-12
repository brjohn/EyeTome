import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            Birthday: "",
            Gender: ""
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
        this.props.signup(user);
    }

    render() {

        return (

            <div className="signup-form-container">
                <div className="sign-up-header">
                    <h1>Sign Up</h1>
                    <p>It's quick and easy.</p>
                </div>

                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <div>
                        <input onChange={this.update('first_name')} placeholder="First name" type="text" value={this.state.first_name} className="signup-input" />
                        <input onChange={this.update('last_name')} placeholder="Last name" type="text" value={this.state.last_name} className="signup-input" />
                    </div>
                    
                    <input onChange={this.update('email')} placeholder="Mobile number or email" type="text" value={this.state.email} className="signup-input" />
                    
                    <input onChange={this.update('password')} placeholder="New password" type="password" value={this.state.password} className="signup-input" />
                    
                    <input onChange={this.update('birthday')} type="date" value={this.state.birthday} className="signup-input" />
                    
                    <div className="radio">
                        <label>Female
                        <input type="radio" onClick={this.update('gender')} value="Female" />
                        </label>
                        <label>Male
                        <input type="radio" onClick={this.update('gender')} value="Male" />
                        </label>
                        <label>Custom
                        <input type="radio" onClick={this.update('gender')} value="Custom" />
                        </label>
                    </div>
                    
                    
                    <br />
                    
                    <input type="submit" className="signup-button" value="Sign Up" />
                </form>

                
            </div>

        )
    }


}

export default SignupForm;