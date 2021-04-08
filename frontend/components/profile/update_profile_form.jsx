import React from 'react';

class UpdateProfileForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bio: "",
            work: this.props.fullUser.work || "",
            education: this.props.fullUser.education || "",
            currentCity: this.props.fullUser.current_city || "",
            hometown: this.props.fullUser.hometown || "",
            relationship: this.props.fullUser.relationship || "",
            namePronunciation: this.props.fullUser.name_pronunciation || "",
            profilePicFile: this.props.fullUser.profilePicFile || null,
            profilePicUrl: this.props.fullUser.profilePicUrl || null,
            coverPhotoFile: this.props.fullUser.coverPhotoFile || null,
            coverPhotoUrl: this.props.fullUser.coverPhotoUrl || null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePPFile = this.handlePPFile.bind(this);
        this.handleCPFile = this.handleCPFile.bind(this);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.currentUser)
    }
    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        
        e.preventDefault();
        const formData = new FormData();
        // const formData = new FormData();
        formData.append('user[id]', this.props.currentUser);
        formData.append('user[bio]', this.state.bio);
        formData.append('user[work]', this.state.work);
        formData.append('user[education]', this.state.education);
        formData.append('user[current_city]', this.state.currentCity);
        formData.append('user[hometown]', this.state.hometown);
        if (this.state.profilePicFile) {
            formData.append('user[profile_pic]', this.state.profilePicFile);
        }
        if (this.state.coverPhotoFile) {
            formData.append('user[cover_photo]', this.state.coverPhotoFile);
        }
        this.props.updateUser(formData);
        this.props.closeModal();

    }

    handlePPFile(e) {
        const fileReader = new FileReader();
        const file = e.currentTarget.files[0];
        fileReader.onloadend = () =>
            this.setState({ profilePicFile: file, profilePicUrl: fileReader.result });

        if (file) {
            fileReader.readAsDataURL(file);
        } 
    }
    handleCPFile(e) {
        const fileReader = new FileReader();
        const file = e.currentTarget.files[0];
        fileReader.onloadend = () =>
            this.setState({ coverPhotoFile: file, coverPhotoUrl: fileReader.result });

        if (file) {
            fileReader.readAsDataURL(file);
        } 
    }


    render () {
        const previewPP = this.state.profilePicUrl ? <img height="168px" width="168px" src={this.state.profilePicUrl} className="pp-preview"/> : <div>Select a Photo</div>;
        const previewCP = this.state.coverPhotoUrl ? <img height="197px" width="512px" src={this.state.coverPhotoUrl} className="cp-preview"/> : <div>Select a Photo</div>;

        return (
            <div className="update-div">
                <div className="update-profile-box" data-simplebar>
                <div className="edit-header">
                    <h3>Edit Profile</h3> 
                   <button onClick={this.props.closeModal}>
                        <i className="fas fa-times-circle"></i>   
                    </button> 
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="profile-picture-div">
                        <div className="pic-header">
                           <div>Profile Picture</div>
                            <input 
                            type="file" 
                            // className="upload-photo-button"
                            id="profile-pic-input"
                            onChange={this.handlePPFile}
                            hidden
                            /> 
                            <label htmlFor="profile-pic-input">
                                <p>Edit</p>    
                            </label>
                        </div>
                        <div className="pp-area">{previewPP}</div>      
                    </div>

                    <div className="cover-photo-div">
                        <div className="pic-header">
                            <div>Cover Photo</div>
                            <input 
                            type="file" 
                            id="cover-photo-input"
                            // className="upload-photo-button" 
                            onChange={this.handleCPFile}
                            hidden
                            />
                            <label htmlFor="cover-photo-input">
                                <p>Edit</p>    
                            </label>
                        </div>
                        <div className="cp-area">{previewCP}</div> 
                    </div>
                    <div className="edit-bio-div">
                        <div className="bio-header">Bio</div>
                        <div className="bio-input-wrapper">
                            <input type="text" className="bio-input" placeholder="Describe yourself..." value={this.state.bio} onChange={this.update('bio')}/>  
                        </div>
                    </div>
                    <div className="intro-div">
                        <h3>Customize your Intro</h3>
                        <div className="intro-inputs">
                        {/* <div>Work */}
                            <label>
                                <i className="fas fa-briefcase"></i>
                                <p>Works at</p>
                                <input placeholder="Add a workplace" type="text" value={this.state.work} onChange={this.update('work')}/>
                            </label>
                        {/* </div> */}
                        {/* <div>Education */}
                            <label>
                                <i className="fas fa-graduation-cap"></i>
                                <p>Studied at</p> 
                                <input placeholder="Add a high school or college" type="text" value={this.state.education} onChange={this.update('education')} />
                            </label>
                        {/* </div> */}
                        {/* <div>Current City */}
                            <label>
                                <i className="fas fa-map-marker-alt"></i>
                                <p>Lives in</p> 
                                <input placeholder="Where do you live?" type="text" value={this.state.currentCity} onChange={this.update('currentCity')} />
                            </label>
                        {/* </div> */}
                        {/* <div>Hometown */}
                            <label>
                                <i className="fas fa-map-marker-alt"></i>
                                <p>From</p> 
                                <input placeholder="Where are you from?" type="text" value={this.state.hometown} onChange={this.update('hometown')} />
                            </label>
                        {/* </div> */}
                        </div>
                    </div>
                    <input type="submit" className="update-button" value="Save Changes" />
                </form>
                </div>
            </div>
        )





    }
}

export default UpdateProfileForm;