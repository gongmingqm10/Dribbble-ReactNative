import {CommentsTypes} from '../utils/ActionTypes';
import api from '../utils/Api';

// Private functions

const loadComments = (dispatch, shotId, page) => {
  api.listComments(shotId, page)
    .then(data => {
      dispatch({data: data, type: CommentsTypes.REQUEST_SUCCESS})
    })
    .catch(error => dispatch({error: error, type: CommentsTypes.REQUEST_FAILURE}));
};

// Export functions

const fetchFromBottom = (shotId, page) => {
  return (dispatch) => {
    dispatch({type: CommentsTypes.SCROLL_TO_BOTTOM});
    loadComments(dispatch, shotId, page + 1);
  };
};

const refreshComments = (shotId) => {
  return (dispatch) => {
    dispatch({type: CommentsTypes.PULL_TO_REFRESH});
    loadComments(dispatch, shotId, 0);
  }
};

const resetPullRefresh = () => {
  return {type: CommentsTypes.RESET_PULL_REFRESH};
};


module.exports = {
  fetchFromBottom: fetchFromBottom,
  refreshComments: refreshComments,
  resetPullRefresh: resetPullRefresh
};