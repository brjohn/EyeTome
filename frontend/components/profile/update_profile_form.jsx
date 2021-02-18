import React from 'react';

class UpdateProfileForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            photoFile: null,
            photoUrl: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.currentUser)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = this.props.currentUser;
        // const formData = new FormData();
        if (this.state.photoFile) {
            currentUser.append('user[photos]', this.state.photoFile);
        }
        this.props.updateUser(formData);

    }

    handlFile(e) {
        const reader = new FileReader();
        const fileReader = e.currentTarget.files[0];
        fileReader.onloadend = () =>
            this.setState({ photoFile: file, photoUrl: fileReader.result });

        if (file) {
            fileReader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: "", photoFile: null });
        }
    }


    render () {
        const preview = this.state.photoUrl ? <img height="200px" width="200px" src={this.state.photoUrl} /> : null;

        return (

            <div className="upload-photo-container">
                <form onSubmit={this.handleSubmit}>
                    <div>Preview Photo</div>
                    {preview}
                    <div>Upload a Photo</div>
                    <input type="file" className="upload-photo-button" 
                        onChange={this.handleFile}/>
                    <input type="submit" className="save-photo-button" value="Save Photo"/>
                </form>
                
            </div>
        )





    }
}

export default UpdateProfileForm;