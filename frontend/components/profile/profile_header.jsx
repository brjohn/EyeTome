import React from 'react';

const ProfileHeader = (props) => {

    return (
        <div className="profile-header">
            <div className="cover-photo-wrapper"></div>
            <div className="profile-pic">
                <div className="profile-circle"></div>
                <div className="photo-edits">
                    <button id="profile-pic-edit">
                        <i class="fas fa-camera"></i>
                    </button>
                    <button>
                        <i class="fas fa-camera"></i>
                        <p>Edit Cover Photo</p>
                    </button>
                </div>
            </div>
            <div className="name-banner">
                <h2>{props.profileOwner.first_name} {props.profileOwner.last_name}</h2>
                <div>Add Bio</div>
            </div>

        </div>
    )

}

export default ProfileHeader;