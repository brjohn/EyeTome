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

    const pp = () => {
        if (props.profileOwner.profilePicUrl) {
            return <img height="168px" width="168px" src={props.profileOwner.profilePicUrl} className="prof-circle" />;
        } else {
            return <div className="profile-circle"></div>;
        }
    }
    const cp = () => {
        if (props.profileOwner.coverPhotoUrl){
            return <img height="348px" width="940px" src={props.profileOwner.coverPhotoUrl} className="cov-photo" />;
        } else {
            return <div className="cover-photo"></div>;
        }
    }
    
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
                {cp()}
                {pp()}
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
                <div onClick={() => props.openModal('editprofile')}>{bio()}</div>
            </div>
            

        </div>
    )

}

export default ProfileHeader;