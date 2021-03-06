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
            month: "1",
            day: "1",
            year: "",
            fn_err: "hide",
            ln_err: "hide",
            email_err: "hide",
            email_err2: "hide",
            bday_err: "hide",
            gender_err: "hide",
            pw_err: "hide",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount(){
        this.props.clearSessionErrors()
    }

    update(field) {

        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

   static getDerivedStateFromProps(nextProps, previousState) {

       let fn_err = "hide";
       if (nextProps.errors.includes("First name can't be blank")) {
           fn_err = "show"
       }
       let ln_err = "hide";
       if (nextProps.errors.includes("Last name can't be blank")) {
           ln_err = "show"
       }
       let bday_err = "hide";
       if (nextProps.errors.includes("Birthday can't be blank")) {
           bday_err = "show"
       }
       let gender_err = "hide";
       if (nextProps.errors.includes("Gender can't be blank")) {
           gender_err = "show"
       }
       let pw_err = "hide";
       if (nextProps.errors.includes("Password is too short (minimum is 6 characters)")) {
           pw_err = "show"
       }
       let email_err = "hide";
       if (nextProps.errors.includes("Email can't be blank")) {
           email_err = "show"
    }
       let email_err2 = "hide";
       if (nextProps.errors.includes("Email has already been taken")) {
           email_err2 = "show"
       }
       
       return {fn_err, ln_err, bday_err, gender_err, pw_err, email_err, email_err2}

   }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state );
        user.birthday = `${user.month}-${user.day}-${user.year}`
        this.props.signup(user)
            .then(this.props.closeModal)
    }


    render() {
        
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const day = new Date().getDay();

        const ifErrors = () => {
            if (this.props.errors.length > 0) {
                return "red"
            } else {
                return "normal"
            }
        }
        
        return (
            
            <div className="signup-fullwidth">
                
            <div className="signup-form-container">
                <div className="sign-up-header">
                    <h1>Sign Up</h1>
                    <p>It's quick and easy.</p>
                </div>

                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <div>
                        <div className="full-name"> 
                            <input onChange={this.update('first_name')} placeholder="First name" type="text" value={this.state.first_name} 
                                    className={`signup-input ${ifErrors()}`}/>
                            <input onChange={this.update('last_name')} placeholder="Last name" type="text" value={this.state.last_name} 
                                className={`signup-input ${ifErrors()}`}/>
                        </div>
                        <div className={this.state.fn_err} id="fn-err">What's your name?
                            <div className="arrow-right"></div>
                        </div>
                        
                        <div className={this.state.ln_err} id="ln-err">What's your name?
                            <div className="arrow-left"></div>
                        </div>
                    </div>
                    <div>
                        <input onChange={this.update('email')} placeholder="Email" type="text" value={this.state.email} 
                            className={`signup-input ${ifErrors()}`}/>
                        <div className={this.state.email_err} id="email-err">
                            You'll use this when you log in and if you ever need to reset your password.
                            <div className="arrow-right"></div>
                        </div>
                        <div className={this.state.email_err2} id="email-err2">
                            This email address has already been taken.
                        <div className="arrow-left"></div>
                        </div>
                    </div>
                    
                    <div>
                        <input onChange={this.update('password')} placeholder="New password" type="password" value={this.state.password} 
                            className={`signup-input ${ifErrors()}`}/>
                        <div className={this.state.pw_err} id="pw-err">
                            Enter a combination of at least six characters.
                            <div className="arrow-right"></div>
                        </div>
                    </div>
                    
                    <div className="birthday">Birthday</div>
                    {/* <input onChange={this.update('birthday')} type="date" value={this.state.birthday} 
                        className="signup-input" id={ifErrors()}/> */}
                    <div className="date-wrapper">
                            <select onChange={this.update('month')} aria-label="Month" name="month" id="month" title="Month" className={`date ${ifErrors()}`}>
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                            <option value="4">Apr</option>
                            <option value="5">May</option>
                            <option value="6">Jun</option>
                            <option value="7">Jul</option>
                            <option value="8">Aug</option>
                            <option value="9">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                        </select>
                            <select onChange={this.update('day')} aria-label="Day" name="day" id="day" title="Day" className={`date ${ifErrors()}`}>
                            {Array.from(new Array(31), (v, i) =>
                                <option key={i} value={`${1 + i}`}>{1 + i}</option>
                            )}

                        </select>
                            <select onChange={this.update('year')} aria-label="Year" name="year" id="year" title="Year" className={`date ${ifErrors()}`}>
                            {Array.from(new Array(116), (v, i) =>
                                <option key={i} value={`${year - i}`}>{year - i}</option>
                            )}
                        </select>
                        <div className={this.state.bday_err} id="bday-err">
                            It looks like you entered the wrong info. Please be sure to use your real birthday.
                            <div className="arrow-right"></div>
                        </div>
                    </div>
                    
                    <div className="gender">Gender </div>
                    <div className="radio">
                            <label className={`gender-input ${ifErrors()}`}>
                                <div>Female</div>
                                <input type="radio" onChange={this.update('gender')} value="Female" 
                                checked={this.state.gender === 'Female'} />
                        </label>
                            <label id="male" className={`gender-input ${ifErrors()}`}>
                                <div>Male</div>
                                <input type="radio" onChange={this.update('gender')} value="Male" 
                                checked={this.state.gender === 'Male'} />
                        </label>
                            <label className={`gender-input ${ifErrors()}`}>
                                <div>Custom</div>
                                <input type="radio" onChange={this.update('gender')} value="Custom" 
                                checked={this.state.gender === 'Custom'} />
                        </label>
                        <div className={this.state.gender_err} id="gender-err">
                            Please choose a gender.
                            <div className="arrow-right"></div>
                        </div>
                    </div>
            
                    
                    
                    
                    <br />
                    
                    <input type="submit" className="signup-button" value="Sign Up" />
                    
                </form>
    
            </div>
                
            </div>
            

        )
    }


}

export default SignupForm;