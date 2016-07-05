import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  DrawerLayoutAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors, Strings, Dimens} from '../utils/Theme';
import DesignersComponent from './designers/DesignersComponent';
import ShotsComponent from './shots/ShotsComponent';
import TeamsComponent from './teams/TeamsComponent';
import MyComponent from './my/MyComponent';
import Separator from './common/Separator';

const Page = {SHOTS: 'Shots', DESIGNERS: 'Designers', TEAMS: 'Teams', MY: 'My'};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: Page.SHOTS,
      drawerOpen: false
    };
    this.getCurrentComponent = this.getCurrentComponent.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  getCurrentComponent() {
    switch(this.state.page) {
      case Page.SHOTS:
        return <ShotsComponent />;
      case Page.DESIGNERS:
        return <DesignersComponent />;
      case Page.TEAMS:
        return <TeamsComponent />;
      case Page.MY:
        return <MyComponent />;
    }
  }

  updatePageState(page) {
    this.drawer.closeDrawer();
    if (page === this.state.page) return;
    this.setState({
      page: page
    });
  }

  toggleDrawer() {
    if (this.state.drawerOpen) {
      this.drawer.closeDrawer();
    } else {
      this.drawer.openDrawer();
    }
  }

  render() {
    const navigationView = (
      <View style={styles.navigationView}>
        <Text style={styles.menuText} onPress={() => this.updatePageState(Page.SHOTS)}>{Strings.labelShots}</Text>
        <Separator />
        <Text style={styles.menuText} onPress={() => this.updatePageState(Page.DESIGNERS)}>{Strings.labelDesigners}</Text>
        <Separator />
        <Text style={styles.menuText} onPress={() => this.updatePageState(Page.TEAMS)}>{Strings.labelTeams}</Text>
        <Separator />
        <Text style={styles.menuText} onPress={() => this.updatePageState(Page.MY)}>{Strings.labelMy}</Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        ref={(drawer) => this.drawer = drawer}
        drawerWidth={240}
        onDrawerOpen={() => this.setState({drawerOpen: true})}
        onDrawerClose={() => this.setState({drawerOpen: false})}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={styles.rootContainer}>
          <Icon.ToolbarAndroid
            style={styles.toolbar}
            title={this.state.page}
            navIconName="bars"
            iconColor="white"
            titleColor="white"
            iconSize={28}
            onIconClicked={this.toggleDrawer}
          />
          {this.getCurrentComponent()}
        </View>
      </DrawerLayoutAndroid>
    )
  }
}

const styles = StyleSheet.create({
  navigationView: {
    flex: 1,
    backgroundColor: 'white'
  },
  menuText: {
    fontSize: 14,
    color: Colors.fontDark,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
  },
  rootContainer: {
    flex: 1
  },
  toolbar: {
    backgroundColor: Colors.primary,
    height: Dimens.androidTabbar
  }
});

module.exports = Main;