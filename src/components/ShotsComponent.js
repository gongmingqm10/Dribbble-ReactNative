import React, {Component} from 'react';

import {
  View,
  Text,
  ListView,
  RefreshControl,
  StyleSheet,
  ActivityIndicatorIOS
} from 'react-native';

import API from '../Utils/API';
import Constants from '../Utils/Constants';
import ShotRow from './views/ShotRow';
import {Colors, Strings} from '../Utils/Theme';

const LoadingFooter = ({finished}) => {
  return finished ? (
    <View style={styles.footerContainer}>
      <Text style={styles.loadingText}>{Strings.messageDataLoaded}</Text>
    </View>
  ) : (
    <View style={styles.footerContainer}>
      <ActivityIndicatorIOS size="small" color={Colors.darkPrimary}/>
      <Text style={styles.loadingText}>{Strings.messageLoading}</Text>
    </View>
  )
};
LoadingFooter.propTypes = {
  finished: React.PropTypes.bool.isRequired
};

class ShotsComponent extends Component {
  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    this.state = {
      shots: [],
      page: 0,
      refreshing: false,
      loading: false,
      finished: false,
      dataSource: this.dataSource.cloneWithRows([])
    };
    this.loadShots = this.loadShots.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.scrollToEnd = this.scrollToEnd.bind(this);
  }

  loadShots() {
    this.setState({loading: true});
    API.listShots(this.state.page)
      .then(data => {
        let newShots = this.state.shots.concat(data);
        this.setState({
          shots: newShots,
          loading: false,
          refreshing: false,
          finished: data.length < Constants.shotsPageSize,
          dataSource: this.dataSource.cloneWithRows(newShots)
        });
        console.log('State: => ', this.state.shots.length);

      })
      .catch(error => {
        console.log("List Shots Error", error);
        this.setState({
          loading: false,
          refreshing: false
        });
      });
  }

  onRefresh() {
    this.setState({
      refreshing: true,
      page: 0,
      finished: false,
      shots: []
    });
    this.loadShots();
  }

  scrollToEnd() {
    if (!this.state.finished) {
      this.setState({page: this.state.page++});
      this.loadShots();
    }
  }

  render() {
    const refreshControl = (
      <RefreshControl
        tintColor={Colors.primary}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
      />
    );
    return (
      <View style={[styles.container]}>
        <ListView
          contentContainerStyle={styles.shotList}
          dataSource={this.state.dataSource}
          refreshControl={refreshControl}
          enableEmptySections={true}
          renderRow={(shot) => <ShotRow shot={shot} />}
          onEndReachedThreshold={100}
          onEndReached={this.scrollToEnd}
          renderFooter={() => <LoadingFooter finished={this.state.finished} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  shotList: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  footerContainer: {
    width: 250,
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingText: {
    marginLeft: 6,
    marginRight: 6,
    color: Colors.darkPrimary,
    fontWeight: '500'
  }
});

module.exports = ShotsComponent;