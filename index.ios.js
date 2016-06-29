/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  TabBarIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Theme from './src/Utils/Theme';
import DesignersComponent from './src/components/DesignersComponent';
import ShotsComponent from './src/components/ShotsComponent';
import TeamsComponent from './src/components/TeamsComponent';
import MyComponent from './src/components/MyComponent';

const Page = {SHOTS: 'shots', DESIGNERS: 'designers', TEAMS: 'teams', MY: 'my'};

class Dribbble extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: Page.SHOTS};
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor={Theme.Colors.lightGray}
        tintColor={Theme.Colors.primary}
        barTintColor="white">
        <Icon.TabBarItemIOS
          title={Theme.Strings.labelShots}
          iconName="tasks"
          iconSize={24}
          selected={this.state.selectedTab === Page.SHOTS}
          onPress={() => this.setState({selectedTab: Page.SHOTS})}>
          <ShotsComponent />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title={Theme.Strings.labelDesigners}
          iconName="users"
          iconSize={24}
          selected={this.state.selectedTab === Page.DESIGNERS}
          onPress={() => this.setState({selectedTab: Page.DESIGNERS})}>
          <DesignersComponent />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title={Theme.Strings.labelTeams}
          iconName="cloud"
          iconSize={24}
          selected={this.state.selectedTab === Page.TEAMS}
          onPress={() => this.setState({selectedTab: Page.TEAMS})}>
          <TeamsComponent />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title={Theme.Strings.labelMy}
          iconName="user"
          iconSize={24}
          selected={this.state.selectedTab === Page.MY}
          onPress={() => this.setState({selectedTab: Page.MY})}>
          <MyComponent />
        </Icon.TabBarItemIOS>
      </TabBarIOS>

    );
  }
}

AppRegistry.registerComponent('Dribbble', () => Dribbble);
