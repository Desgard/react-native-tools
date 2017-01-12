'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

import NavigationBar from 'react-native-navbar';

var IMAGE_URLS = [
  require('./image/Calculator.png'),
];

class tools extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['Calculator',]),
    };
  }

  renderRow(rowData, sectionID, rowID) {
    var imgSource = IMAGE_URLS[rowID];
    return (
      <TouchableHighlight underlayColor="red">
        <View>
          <View style={styles.row}>
            <Image 
              source={imgSource}
              style={styles.thum}
            />
            <Text style={styles.text}>
              {rowData}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    var navTitleConfig = {
      title: 'RN小应用学习',
      tintColor: 'white',
    };
    var navStatusBarConfig = {
      style: 'light-content',
    }
    return (
      <View style={{ flex: 1, backgroundColor: '#F5FCFF' }}>
        <NavigationBar
          title={navTitleConfig}
          tintColor='#0767c8'
          statusBar={navStatusBarConfig}
        />
        <ListView 
          automaticallyAdjustContentInsets={false}
          contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          pageSize={4}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {  
    marginTop:20,  
    flexDirection: 'row',  
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },  
  row: {  
    flex: 1,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',  
    // borderWidth: 1,
    // borderColor: '#CCC',
    alignItems: 'center',
  },  
  thum: { 
    alignItems: 'center', 
    width: Dimensions.get('window').width / 8,  
    height: Dimensions.get('window').width / 8,
  },  
  text: {  
    marginTop: 5,  
    fontWeight: 'bold', 
  },  
});

AppRegistry.registerComponent('tools', () => tools);
