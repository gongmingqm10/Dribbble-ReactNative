import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import ShotsReducer from '../reducers/Shots';

module.exports = {
  ShotsStore: createStore(ShotsReducer, applyMiddleware(thunk))
};