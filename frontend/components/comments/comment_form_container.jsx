import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import { fetchPost } from '../../actions/post_actions';
import CommentForm from './comment_form';

const mapStateToProps = ({session, entities}) => {
    return {
    fullCurrentUser: entities.users[session.currentUser]
    }
}

const mapDispatchToProps = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment)),
    fetchPost: (id) => dispatch(fetchPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);