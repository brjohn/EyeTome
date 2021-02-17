import React from 'react';

class UploadPhoto extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            photoFile: null,
            photoUrl: null,
        }
    }


    render () {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ imageUrl: reader.result, imageFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }



    }
}

export default UploadPhoto;