import React, {Component} from 'react';

import {
  View,
  Text,
  ListView,
  RefreshControl,
  StyleSheet
} from 'react-native';

import API from '../Utils/API';
import Constants from '../Utils/Constants';
import ShotRow from './views/ShotRow';

class ShotsComponent extends Component {
  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    this.state = {
      shots: [],
      page: 0,
      refreshing: false,
      loading: false,
      dataSource: this.dataSource.cloneWithRows([])
    };
    this.loadShots = this.loadShots.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }

  loadShots() {
    this.setState({loading: true});
    API.listShots(this.state.page)
      .then(data => {
        let newShots = this.state.shots.concat(data);
        this.setState({
          shots: newShots,
          loading: false,
          dataSource: this.dataSource.cloneWithRows(newShots)
        });
        console.log('State: => ', this.state.shots.length);

      })
      .catch(error => {
        console.log("List Shots Error", error);
        this.setState({loading: false});
      });
  }

  componentDidMount() {
    this.loadShots();
  }

  refreshControl() {
    return (
      <RefreshControl />
    )
  }

  onRefresh() {
    console.log('Refreshing.............');
    this.setState({
      refreshing: false
    });
  }

  render() {
    var refreshControl = (
      <RefreshControl
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
          renderRow={(shot) => {
            return <ShotRow shot={shot} />;
          } }
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
  }
});

module.exports = ShotsComponent;