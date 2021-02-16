import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import {openModal} from '../../actions/modal_actions';
import {clearSessionErrors} from '../../actions/session_actions';

const mapStateToProps = ({errors, ui}) => {
    return {
        errors: errors.session,
        modal: ui.modal,
        formType: 'Log In',
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
        openModal: modal => dispatch(openModal(modal)),
        clearSessionErrors: () => dispatch(clearSessionErrors()),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);