import {ShotsTypes} from '../utils/ActionTypes';
import api from '../utils/Api';

// Private functions

const loadShots = (dispatch, page) => {
  api.listShots(page)
    .then(data => {
      dispatch({data: data, type: ShotsTypes.REQUEST_SUCCESS})
    })
    .catch(error => dispatch({error: error, type: ShotsTypes.REQUEST_FAILURE}));
};

// Export functions

const fetchFromBottom = (page) => {
  return (dispatch) => {
    dispatch({type: ShotsTypes.SCROLL_TO_BOTTOM});
    loadShots(dispatch, page + 1);
  };
};

const refreshShots = () => {
  return (dispatch) => {
    dispatch({type: ShotsTypes.PULL_TO_REFRESH});
    loadShots(dispatch, 0);
  }
};

const resetPullRefresh = () => {
  return {type: ShotsTypes.RESET_PULL_REFRESH};
};


module.exports = {
  fetchFromBottom: fetchFromBottom,
  refreshShots: refreshShots,
  resetPullRefresh: resetPullRefresh
};