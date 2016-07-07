import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  DrawerLayoutAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors, Strings, Dimens} from '../utils/Theme';
import DesignersComponent from './designers/DesignersComponent';
import ShotsComponent from './shots/ShotsComponent';
import TeamsComponent from './teams/TeamsComponent';
import MyComponent from './my/MyComponent';
import DrawerMenuItem from './common/DrawerMenuItem';

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
    switch (this.state.page) {
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
        <View style={styles.headerView}>
          <Image style={styles.headerAvatar} source={require('../../images/default_avatar.jpg')}/>
          <Text style={styles.headerUser}>Ming Gong</Text>
        </View>
        <DrawerMenuItem
          title={Strings.labelShots}
          iconName="tasks"
          onItemClick={() => this.updatePageState(Page.SHOTS)}
        />
        <DrawerMenuItem
          title={Strings.labelDesigners}
          iconName="users"
          onItemClick={() => this.updatePageState(Page.DESIGNERS)}
        />
        <DrawerMenuItem
          title={Strings.labelTeams}
          iconName="cloud"
          onItemClick={() => this.updatePageState(Page.TEAMS)}
        />
        <DrawerMenuItem
          title={Strings.labelMy}
          iconName="user"
          onItemClick={() => this.updatePageState(Page.MY)}
        />
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
    backgroundColor: 'white',
    alignItems: 'stretch'
  },

  rootContainer: {
    flex: 1
  },
  toolbar: {
    backgroundColor: Colors.primary,
    height: Dimens.androidTabbar,
    elevation: 8,
    shadowColor: Colors.lightGray,
    shadowRadius: 2,
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 1}
  },
  headerView: {
    padding: 24,
    backgroundColor: Colors.primary,
    alignItems: 'center'
  },
  headerAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32
  },
  headerUser: {
    fontSize: 18,
    color: 'white'
  }
});

module.exports = Main;