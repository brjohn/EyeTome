import { connect } from 'react-redux';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { fetchPost } from '../../actions/post_actions';
import CommentList from './comment_list';

const mapStateToProps = ({session, entities}, ownProps) => {
    let comments = Object.values(entities.comments).filter(comment => comment.commentable_id === ownProps.post.id && comment.commentable_type === 'Post')
    // debugger
    return {
    currentUser: session.currentUser,
    comments: comments

    }
}

const mapDispatchToProps = dispatch => ({
    // createComment: (comment) => dispatch(createComment(comment)),
    fetchPost: (id) => dispatch(fetchPost(id)),
    deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);