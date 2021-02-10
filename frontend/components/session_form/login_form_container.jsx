import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import {openModal} from '../../actions/modal_actions';

const mapStateToProps = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'Log In',
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
        openModal: modal => dispatch(openModal(modal))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);