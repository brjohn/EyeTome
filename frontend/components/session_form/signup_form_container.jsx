import {connect} from 'react-redux';
import React from 'react';
import {createNewUser} from '../../actions/session_actions';
import {openModal, closeModal} from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'Sign Up'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
}