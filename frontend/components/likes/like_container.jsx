import { connect } from 'react-redux';
import { fetchComment } from '../../actions/comment_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { fetchPost } from '../../actions/post_actions';
import Like from './like';

const mapStateToProps = ({session, entities}) => {
    return {
    currentUser: session.currentUser
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPost: (id) => dispatch(fetchPost(id)),
    createLike: (like) => dispatch(createLike(like)),
    fetchComment: (id) => dispatch(fetchComment(id)),
    deleteLike: (id) => dispatch(deleteLike(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Like);