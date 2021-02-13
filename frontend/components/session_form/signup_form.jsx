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

    makeDate() {

    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
    }

    render() {
        // console.log(this.props.errors)
        return (

            <div className="signup-form-container">
                <div className="sign-up-header">
                    <h1>Sign Up</h1>
                    <p>It's quick and easy.</p>
                </div>

                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <div className="full-name"> 
                        <input onChange={this.update('first_name')} placeholder="First name" type="text" value={this.state.first_name} className="signup-input" />
                        <input onChange={this.update('last_name')} placeholder="Last name" type="text" value={this.state.last_name} className="signup-input" id="lastname"/>
                    </div>
                    
                    <input onChange={this.update('email')} placeholder="Mobile number or email" type="text" value={this.state.email} className="signup-input" />
                    
                    <input onChange={this.update('password')} placeholder="New password" type="password" value={this.state.password} className="signup-input" />
                    
                    <div className="birthday">Birthday</div>
                    <input onChange={this.update('birthday')} type="date" value={this.state.birthday} className="signup-input" />
                    
                    {/* <div className="birthday">Birthday
                        <input type="dropdown"/> */}

                    {/* </div> */}
                    <div className="gender">Gender
                        <div className="radio">
                            <label>
                                <div>Female</div>
                                <input type="radio" onClick={this.update('gender')} value="Female" />
                            </label>
                            <label id="male">
                                <div>Male</div>
                                <input type="radio" onClick={this.update('gender')} value="Male" />
                            </label>
                            <label>
                                <div>Custom</div>
                                <input type="radio" onClick={this.update('gender')} value="Custom" />
                            </label>
                        </div>
                    </div>
                    
                    
                    
                    <br />
                    
                    <input type="submit" className="signup-button" value="Sign Up" />
                    <div className="errors">{this.props.errors}</div>
                </form>

                
            </div>

        )
    }


}

export default SignupForm;