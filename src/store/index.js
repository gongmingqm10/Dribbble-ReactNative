import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Shots from '../reducers/Shots';
import Comments from '../reducers/Comments'

module.exports = {
  ShotsStore: createStore(Shots, applyMiddleware(thunk)),
  CommentsStore: createStore(Comments, applyMiddleware(thunk))
};