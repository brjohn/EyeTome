import { connect } from 'react-redux';
import { fetchComment, fetchComments } from '../../actions/comment_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { fetchPost } from '../../actions/post_actions';
import CommentLike from './comment_like';

const mapStateToProps = ({session, entities}) => {
    return {
    currentUser: session.currentUser,
    comments: entities.comments
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPost: (id) => dispatch(fetchPost(id)),
    createLike: (like) => dispatch(createLike(like)),
    fetchComment: (id) => dispatch(fetchComment(id)),
    fetchComments: () => dispatch(fetchComments()),
    deleteLike: (id) => dispatch(deleteLike(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentLike);