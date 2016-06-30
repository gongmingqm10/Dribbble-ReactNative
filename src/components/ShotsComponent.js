import React, {Component} from 'react';

import {
  View,
  ListView,
  RefreshControl,
  StyleSheet
} from 'react-native';

import ShotRow from './views/ShotRow';
import LoadingFooter from './views/LoadingFooter';
import {Colors} from '../utils/Theme';
import {ShotsStore} from '../store/index';
import Actions from '../actions/Shots';


class ShotsComponent extends Component {
  constructor(props) {
    super(props);
    this.onRefresh = this.onRefresh.bind(this);
    this.onReachEnd = this.onReachEnd.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = ShotsStore.subscribe(() => {
      this.forceUpdate()
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onRefresh() {
    // This is hacked, cause RefreshControl in iOS don't have enabled props
    const state = ShotsStore.getState();
    if (state.loading) {
      ShotsStore.dispatch(Actions.resetPullRefresh());
    } else {
      ShotsStore.dispatch(Actions.refreshShots());
    }
  }

  onReachEnd() {
    const state = ShotsStore.getState();
    if (!(state.finished || state.loading || state.error)) {
      ShotsStore.dispatch(Actions.fetchFromBottom(state.page));
    }
  }

  render() {
    const state = ShotsStore.getState();
    const refreshControl = (
      <RefreshControl
        tintColor={Colors.primary}
        refreshing={state.refreshing}
        enabled={!this.loading}
        onRefresh={this.onRefresh}
      />
    );
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.shotList}
          dataSource={state.dataSource}
          refreshControl={refreshControl}
          enableEmptySections={true}
          renderRow={(shot) => <ShotRow shot={shot} />}
          onEndReachedThreshold={100}
          onEndReached={this.onReachEnd}
          renderFooter={() => <LoadingFooter {...state} />}
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