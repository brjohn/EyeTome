import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday: "",
            gender: "",
            month: "",
            day: "",
            year: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.finalSubmit = this.finalSubmit.bind(this);
    };

    update(field) {

        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };


    // handleInput(field) {
    //     return e => this.
    // }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.setState({ 
            [birthday]: this.state.month + "-" + this.state.day + "-" +this.state.year
        })
        this.finalSubmit(e);
    }

    finalSubmit(e) {
        debugger
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
    }



    render() {
        // console.log(this.props.errors)
        const year = new Date().getFullYear();
        
        return (

            <div className="signup-form-container">
                <div className="sign-up-header">
                    <h1>Sign Up</h1>
                    <p>It's quick and easy.</p>
                </div>

                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <div className="full-name"> 
                        <input onChange={this.update('first_name')} placeholder="First name" type="text" value={this.state.first_name} 
                        className="signup-input"/>
                        <input onChange={this.update('last_name')} placeholder="Last name" type="text" value={this.state.last_name} 
                            className="signup-input" id="lastname"/>
                    </div>
                    
                    <input onChange={this.update('email')} placeholder="Email" type="text" value={this.state.email} className="signup-input" />
                    
                    <input onChange={this.update('password')} placeholder="New password" type="password" value={this.state.password} className="signup-input" />
                    
                    <div className="birthday">Birthday</div>
                    {/* <input onChange={this.update('birthday')} type="date" value={this.state.birthday} className="signup-input" /> */}
                    <div className="date-wrapper">
                        <select onChange={this.update('month')} aria-label="Month" name="month" id="month" title="Month" className="date">
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                            <option value="12">Apr</option>
                            <option value="4">May</option>
                            <option value="5">Jun</option>
                            <option value="6">Jul</option>
                            <option value="11">Aug</option>
                            <option value="7">Sep</option>
                            <option value="8">Oct</option>
                            <option value="9">Nov</option>
                            <option value="10">Dec</option>
                        </select>
                        <select onChange={this.update('day')} aria-label="Day" name="day" id="day" title="Day" className="date">
                            {Array.from(new Array(31), (v, i) =>
                                <option key={i} value={`${1 + i}`}>{1 + i}</option>
                            )}

                        </select>
                        <select onChange={this.update('year')} aria-label="Year" name="year" id="year" title="Year" className="date">
                            {Array.from(new Array(116), (v, i) =>
                                <option key={i} value={`${year - i}`}>{year - i}</option>
                            )}
                        </select>
                    </div>
                    
                    <div className="gender">Gender </div>
                    <div className="radio">
                        <label>
                                <div>Female</div>
                                <input type="radio" onClick={this.update('gender')} value="Female" 
                                checked={this.state.gender === 'Female'}/>
                        </label>
                        <label id="male">
                                <div>Male</div>
                                <input type="radio" onClick={this.update('gender')} value="Male" 
                                    checked={this.state.gender === 'Male'}/>
                        </label>
                        <label>
                                <div>Custom</div>
                                <input type="radio" onClick={this.update('gender')} value="Custom" 
                                    checked={this.state.gender === 'Custom'}/>
                        </label>
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