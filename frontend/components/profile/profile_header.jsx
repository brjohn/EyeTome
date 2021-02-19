import React from 'react';
import { Link } from 'react-router-dom';
import UpdateProfileFormContainer from './update_profile_form_container';

const ProfileHeader = (props) => {
    const bio = () => {
        if (props.profileOwner.bio){
            return props.profileOwner.bio; 
        } else {
            if (props.profileOwner.id === props.currentUser) {
                return "Add Bio";
            } else {
                return "";
            }
        }
    }
    // openPhotoUpload = (display) => {

    // }

    // let uploadForm = this.openPhotoUpload;

    
    const restrict = () => {
        
        if (props.profileOwner.id === props.currentUser){
            return "";
        } else {
            return "hide";
        }
    }

    return (
        <div className="profile-header">
            <div className="cover-photo-wrapper">
                <div className="cover-photo"></div>
                <div className="profile-circle"></div>
                <div className="pic-edit-banner">
                    <div className={`photo-edits ${restrict()}`}>
                        
                        <button onClick={() => props.openModal('editprofile')} id="profile-pic-edit">
                            <i className="fas fa-camera"></i>
                        </button>
                        <button onClick={() => props.openModal('editprofile')} id="cover-photo-edit">
                            <i className="fas fa-camera"></i>
                            <p>Edit Cover Photo</p>
                        </button>
                    </div>
                </div>
                
            </div>
            <div className="name-banner">
                <h2>{props.profileOwner.first_name} {props.profileOwner.last_name}</h2>
                <div>{bio()}</div>
            </div>
            {/* <UpdateProfileFormContainer/> */}

        </div>
    )

}

export default ProfileHeader;