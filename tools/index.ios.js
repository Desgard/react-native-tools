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
} from 'react-native';

class tools extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['test', 'test', 'test', 'stest', 'bad', 'fdafdsa', 'fdafdsa', 'fdafdsa', 'rewqreqw']),
    };
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight underlayColor="red">
        <View>
          <View style={styles.row}>
            <Image style={styles.thum}/>
            <Text style={styles.text}>
              {rowData}, {sectionID}, {rowID}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <ListView 
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        pageSize={4}
        renderRow={this.renderRow}
      />
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
    width: 80,
    height: 80,
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',  
    borderWidth: 1,
    borderColor: '#CCC',
  },  
  thumb: {  
    width: 64,  
    height: 64,  
  },  
  text: {  
    flex: 1,  
    marginTop: 5,  
    fontWeight: 'bold', 
  },  
});

AppRegistry.registerComponent('tools', () => tools);
