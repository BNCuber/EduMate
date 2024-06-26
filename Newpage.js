import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, TextInput, ImageBackground, TouchableHighlight, Alert, ScrollView } from 'react-native';
import styles from './styles';

export default class NewPage extends Component {
    state  =  {
        homePageDisplay: 'block',
        anatPageDisplay: 'none',
        geoPageDisplay: 'none',
        javaPageDisplay: 'none',
        newSetDisplay: 'none',
    }

    handleNewSetDisplay = () => {
      this.setState({
        homePageDisplay:'none',
        anatPageDisplay:'none',
        geoPageDisplay:'none',
        javaPageDisplay:'none',
        NewSetDisplay: 'block',
      })
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ display: this.state.newSetDisplay }}>

            <View style={styles.newPage}>
                <View style={styles.goButt}>
                <TouchableHighlight onPress={this.handleHomePageDisplay}>
                <Text style={styles.homeText}>
                    ← Back to Home
                </Text>
                </TouchableHighlight>
                </View>
                <View style={styles.newText}>
                New
                </View>
                <View style={styles.studyText}>
                Study Set
                </View>
            </View>
          
            
        </View>
      </View>
    );
  }
}