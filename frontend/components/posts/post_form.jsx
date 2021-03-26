import React from 'react';

class PostForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: "",
            postPicUrl: null,
            postPicFile: null
        }
        this.handlePostPic = this.handlePostPic.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }
    handlePostPic(e){
        const fileReader = new FileReader();
        const file = e.currentTarget.files[0];
        fileReader.onloadend = () =>
            this.setState({ postPicFile: file, postPicUrl: fileReader.result });

        if (file) {
            fileReader.readAsDataURL(file);
        } 
    }
    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[poster_id]', this.props.poster.id);
        formData.append('post[wall_owner_id]', this.props.poster.id);
        formData.append('post[body]', this.state.body);
        if (this.state.postPicFile) {
            formData.append('post[post_pic]', this.state.postPicFile);
        }
        this.props.createPost(formData);
    }

    
    render (){

    return (
        <div className="inner-modal-child">
        <div className="post-form-container">
        <div className="post">
            <h1>Create Post</h1>
            <div className="post-header">   
                <i className="fas fa-user-circle"></i> 
                <div>{this.props.poster.first_name} {this.props.poster.last_name}</div>
            </div>
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    className="post-text"
                    placeholder="What's on your mind?" 
                    value={this.state.body}
                    onChange={this.update('body')}   
                />
                <input 
                    type="file"
                    className="post-pic-input"
                    onChange={this.handlePostPic}
                />
                <input 
                    type="submit"
                    className="post-button"
                    value="Post"    
                />

            </form>

        </div>
        </div>
        </div>
    )
    }

}

export default PostForm;