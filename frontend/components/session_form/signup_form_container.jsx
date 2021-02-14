import {connect} from 'react-redux';
import React from 'react';
import {signup} from '../../actions/session_actions';
import {openModal, closeModal} from '../../actions/modal_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
        month: "",
        day: "",
        year: ""
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (user) => dispatch(signup(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);