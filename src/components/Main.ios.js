import React, {Component} from 'react';
import {
  TabBarIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Theme from '../utils/Theme';
import DesignersComponent from './DesignersComponent';
import ShotsComponent from './ShotsComponent';
import TeamsComponent from './TeamsComponent';
import MyComponent from './MyComponent';

const Page = {SHOTS: 'shots', DESIGNERS: 'designers', TEAMS: 'teams', MY: 'my'};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: Page.SHOTS};
  }

  onTabItemSelected(title) {
    this.setState({selectedTab: title});
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
          onPress={() => this.onTabItemSelected(Page.SHOTS)}>
          <ShotsComponent />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title={Theme.Strings.labelDesigners}
          iconName="users"
          iconSize={24}
          selected={this.state.selectedTab === Page.DESIGNERS}
          onPress={() => this.onTabItemSelected(Page.DESIGNERS)}>
          <DesignersComponent />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title={Theme.Strings.labelTeams}
          iconName="cloud"
          iconSize={24}
          selected={this.state.selectedTab === Page.TEAMS}
          onPress={() => this.onTabItemSelected(Page.TEAMS)}>
          <TeamsComponent />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title={Theme.Strings.labelMy}
          iconName="user"
          iconSize={24}
          selected={this.state.selectedTab === Page.MY}
          onPress={() => this.onTabItemSelected(Page.MY)}>
          <MyComponent />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

module.exports = Main;