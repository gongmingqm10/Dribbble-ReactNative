import {ListView} from 'react-native';
import {ShotsTypes} from '../utils/ActionTypes';
import Constants from '../utils/Constants';

const dataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});

const initialState = {
  shots: [],
  page: -1,
  refreshing: false,
  loading: false,
  finished: false,
  error: undefined,
  dataSource: dataSource.cloneWithRows([])
};

const shots = (state = initialState, action) => {
  switch (action.type) {
    case ShotsTypes.SCROLL_TO_BOTTOM:
      return Object.assign(
        {},
        state,
        {loading: true}
      );
    case ShotsTypes.PULL_TO_REFRESH:
      return {
        shots: [],
        page: 0,
        refreshing: true,
        loading: true,
        finished: false,
        dataSource: state.dataSource
      };
    case ShotsTypes.REQUEST_SUCCESS:
      let newShots = state.shots.concat(action.data);
      return {
        shots: newShots,
        loading: false,
        refreshing: false,
        page: state.page + 1,
        finished: action.data.length < Constants.shotsPageSize,
        dataSource: dataSource.cloneWithRows(newShots)
      };
    case ShotsTypes.REQUEST_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        refreshing: false,
        error: action.error
      });
    default:
      return state;
  }
};

module.exports = shots;