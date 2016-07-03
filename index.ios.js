/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import Main from './src/components/Main.ios';
import ShotComponent from './src/components/shot/ShotComponent';
import WebComponent from './src/components/common/WebComponent';
import UserComponent from './src/components/users/UserComponent';
import {Strings} from './src/utils/Theme';

class Dribbble extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='mainPage' component={Main} title={Strings.appName} initial={true}/>
          <Scene key='shotPage' component={ShotComponent} title={Strings.titleShotDetail}/>
          <Scene key='webPage' component={WebComponent} title={Strings.titleWebView}/>
          <Scene key='userPage' component={UserComponent} title={Strings.titleUserDetail}/>
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('Dribbble', () => Dribbble);
