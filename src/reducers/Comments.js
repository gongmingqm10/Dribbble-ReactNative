import {ListView} from 'react-native';
import {CommentsTypes} from '../utils/ActionTypes';
import Constants from '../utils/Constants';

const dataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});

const initialState = {
  comments: [],
  page: 0,
  refreshing: false,
  loading: false,
  finished: false,
  error: undefined,
  dataSource: dataSource.cloneWithRows([])
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case CommentsTypes.SCROLL_TO_BOTTOM:
      return Object.assign(
        {},
        state,
        {page: state.page + 1, loading: true}
      );
    case CommentsTypes.PULL_TO_REFRESH:
      return {
        comments: [],
        page: 0,
        refreshing: true,
        loading: true,
        finished: false,
        error: undefined,
        dataSource: state.dataSource
      };
    case CommentsTypes.REQUEST_SUCCESS:
      let newComments = state.comments.concat(action.data);
      return {
        comments: newComments,
        loading: false,
        refreshing: false,
        error: undefined,
        finished: action.data.length < Constants.commentsPageSize,
        dataSource: dataSource.cloneWithRows(newComments)
      };
    case CommentsTypes.REQUEST_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        refreshing: false,
        error: action.error
      });
    default:
      return state;
  }
};

module.exports = comments;