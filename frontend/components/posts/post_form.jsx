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
        this.preview = this.preview.bind(this);
        this.thumbnail = this.thumbnail.bind(this);
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
        // debugger
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[poster_id]', this.props.fullCurrentUser.id);
        formData.append('post[wall_owner_id]', this.props.profileOwnerId);
        formData.append('post[body]', this.state.body);
        if (this.state.postPicFile) {
            formData.append('post[post_pic]', this.state.postPicFile);
        }
        this.props.createPost(formData);
        this.props.closeModal();
    }
    preview(){
        if (this.state.postPicUrl){
            debugger
            return <img src={this.state.postPicUrl} className="post-pic"/>
        } else {
            return null;
        }
    }
    thumbnail(){
        if (this.props.fullCurrentUser.profilePicUrl){
            return <img src={this.props.fullCurrentUser.profilePicUrl} className="thumbnail"/>
        } else {
            return <i className="fas fa-user-circle"></i>
        }
    }

    
    render (){

    return (
        <div className="inner-modal-child">
        <div className="post-form-container">
        <div className="post">
            <i className="fas fa-times-circle" id="close-post-form" onClick={()=>this.props.closeModal()}></i>
            <h1>Create Post</h1>
            <div className="post-header"> 
                <div className="poster-thumbnail">
                    {this.thumbnail()}
                </div>  
                <div className="poster-name">
                   <div>{this.props.fullCurrentUser.first_name} {this.props.fullCurrentUser.last_name}</div> 
                </div> 
                
            </div>
            <form onSubmit={this.handleSubmit} className="post-form-el">
                <input 
                    type="text" 
                    className="post-text"
                    placeholder="What's on your mind?" 
                    value={this.state.body}
                    onChange={this.update('body')}   
                />
                {this.preview()}
                <input 
                    type="file"
                    // className="post-pic-input"
                    onChange={this.handlePostPic}
                    id="post-pic-input"
                    hidden
                />
                <label htmlFor="post-pic-input">
                    <p>Add to Your Post</p>
                    <i className="far fa-file-image"></i>
                </label>
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