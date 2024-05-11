import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import HomePage from './HomePage';
import CodePage from './CodePage';
import GeoPage from './GeoPage';
import AnatPage from './AnatPage';
import NewPage from './NewPage';
import styles from './styles';


export default class App extends Component {
 

    render() {
        return (
            <View style={styles.container}>
                <>
                    
                        <HomePage />
                    
                </>
 
            </View>
        );
    };
}