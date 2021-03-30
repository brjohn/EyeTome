import { connect } from 'react-redux';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { fetchPost } from '../../actions/post_actions';
import CommentList from './comment_list';

const mapStateToProps = ({session}) => {
    return {
    currentUser: session.currentUser
    }
}

const mapDispatchToProps = dispatch => ({
    // createComment: (comment) => dispatch(createComment(comment)),
    fetchPost: (id) => dispatch(fetchPost(id)),
    deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);