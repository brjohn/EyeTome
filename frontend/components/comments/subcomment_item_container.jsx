import { connect } from 'react-redux';
import { createComment, deleteComment, fetchComment } from '../../actions/comment_actions';
import SubcommentItem from './subcomment_item';

const mapStateToProps = ({session}) => {
    return {
    currentUser: session.currentUser
    }
}

const mapDispatchToProps = dispatch => ({
    // createComment: (comment) => dispatch(createComment(comment)),
    fetchComment: (id) => dispatch(fetchComment(id)),
    deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SubcommentItem);