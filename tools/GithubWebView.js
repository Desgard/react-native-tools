'use strict'
import React, { Component } from 'react';
import {
    StyleSheet,
    WebView,
    Dimensions,
    View,
} from 'react-native';


const {width, height} = Dimensions.get('window');

export default class GithubWebView extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView 
                    style = {styles.webStyle}
                    source = {{uri: 'https://github.com/desgard/',}}
                    javaScriptEnabled = {true}
                    domStorageEnabled = {true}
                    scalesPageToFit = {false}
                >
                </WebView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    }, 
    webStyle: {
        flex: 1,
    },
});