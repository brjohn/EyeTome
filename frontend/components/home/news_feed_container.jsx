import { connect } from 'react-redux';
import {fetchPosts, createPost, deletePost} from '../../actions/post_actions';
import NewsFeed from './news_feed';
import {openModal, closeModal} from '../../actions/modal_actions';
import { fetchComments } from '../../actions/comment_actions';
import {fetchUser} from '../../actions/user_actions'

const mapStateToProps = ({session, entities: {users, posts}}) => {
    // let myfriends = [];
    // if (users[session.currentUser].friendships){
    //     myfriends = Object.values(users[session.currentUser].friendships)
    // }
    return {
    poster: users[session.currentUser],
    posts: Object.values(posts),
    postForm: 'createpost',
    currentUser: session.currentUser,
    // friends: myfriends
    }
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchPosts: (wallId) => dispatch(fetchPosts(wallId)),
    createPost: (post) => dispatch(createPost(post)),
    openModal: (modal) => dispatch(openModal(modal)),
    deletePost: (id) => dispatch(deletePost(id)),
    // fetchComments: ()=> dispatch(fetchComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
