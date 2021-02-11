import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "First name",
            last_name: "Last name",
            email: "Email or Phone Number",
            password: "New password",
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
                <div>
                    <h1>Sign Up</h1>
                    <p>It's quick and easy.</p>
                </div>

                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    
                    <input onChange={this.update('first_name')} type="text" value={this.state.first_name} className="signup-input" />
                    <input onChange={this.update('last_name')} type="text" value={this.state.last_name} className="signup-input" />
                    <br />
                    <input onChange={this.update('email')} type="text" value={this.state.email} className="signup-input" />
                    <br />
                    <input onChange={this.update('password')} type="password" value={this.state.password} className="signup-input" />
                    <br />
                    <input onChange={this.update('birthday')} type="date" value={this.state.birthday} className="signup-input" />
                    <br />
                    {/* <input onChange={this.update('gender')} type="text" value={this.state.gender} className="signup-input" /> */}
                    <label>Female
                        <input type="radio" onClick={this.update('gender')} value="Female" />
                    </label>
                    <label>Male
                        <input type="radio" onClick={this.update('gender')} value="Male" />
                    </label>
                    <label>Custom
                        <input type="radio" onClick={this.update('gender')} value="Custom" />
                    </label>
                    
                    <br />
                    
                    <input type="submit" className="signup-button" value="Sign Up" />
                </form>

                
            </div>

        )
    }


}

export default SignupForm;