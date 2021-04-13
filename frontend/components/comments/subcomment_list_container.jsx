import { connect } from 'react-redux';
import { createComment, deleteComment, fetchComment } from '../../actions/comment_actions';
import SubcommentList from './subcomment_list';

const mapStateToProps = ({session, entities}, ownProps) => {
    let comments = Object.values(entities.comments).filter(comment => comment.commentable_id === ownProps.comment.id && comment.commentable_type === 'Comment')
    return {
    currentUser: session.currentUser,
    comments: comments
    }
}

const mapDispatchToProps = dispatch => ({
    // createComment: (comment) => dispatch(createComment(comment)),
    fetchComment: (id) => dispatch(fetchComment(id)),
    deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SubcommentList);