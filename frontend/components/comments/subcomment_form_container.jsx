import { connect } from 'react-redux';
import { createComment, fetchComment } from '../../actions/comment_actions';
// import { fetchPost } from '../../actions/post_actions';
import SubcommentForm from './subcomment_form';

const mapStateToProps = ({session, entities}) => {
    return {
    fullCurrentUser: entities.users[session.currentUser]
    }
}

const mapDispatchToProps = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment)),
    fetchComment: (id) => dispatch(fetchComment(id)),
    // fetchPost: (id) => dispatch(fetchPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SubcommentForm);