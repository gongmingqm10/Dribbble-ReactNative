import React, {Component} from 'react';
import {
  TabBarIOS,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors, Strings} from '../utils/Theme';
import DesignersComponent from './designers/DesignersComponent';
import ShotsComponent from './shots/ShotsComponent';
import TeamsComponent from './teams/TeamsComponent';
import MyComponent from './my/MyComponent';

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
        unselectedTintColor={Colors.lightGray}
        tintColor={Colors.primary}
        barTintColor="white">
        <Icon.TabBarItemIOS
          title={Strings.labelShots}
          iconName="tasks"
          iconSize={24}
          selected={this.state.selectedTab === Page.SHOTS}
          onPress={() => this.onTabItemSelected(Page.SHOTS)}>
          <ShotsComponent />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title={Strings.labelDesigners}
          iconName="users"
          iconSize={24}
          selected={this.state.selectedTab === Page.DESIGNERS}
          onPress={() => this.onTabItemSelected(Page.DESIGNERS)}>
          <DesignersComponent />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title={Strings.labelTeams}
          iconName="cloud"
          iconSize={24}
          selected={this.state.selectedTab === Page.TEAMS}
          onPress={() => this.onTabItemSelected(Page.TEAMS)}>
          <TeamsComponent />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title={Strings.labelMy}
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