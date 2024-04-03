import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.homeScreen}>
          <View style={styles.titleLine}>
            <Text style={styles.eduText}>
              Edu
            </Text>
            <Text style={styles.setButtonAnat}>
              Anatomy
            </Text>
          </View>

          <View style={styles.setButtonGeo}>
            <Text style={styles.geoText}>
              Geography
            </Text>
          </View>

          <View style={styles.setButtonCS}>
            <Text style={styles.csText}>
              Computer Science
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeScreen: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleLine: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  setButtonAnat: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'gray',
    width: deviceWidth * 0.99,
    height: deviceHeight / 3,
    backgroundColor: 'red',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  setButtonGeo: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'gray',
    width: deviceWidth * 0.99,
    height: deviceHeight / 3,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  setButtonCS: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'gray',
    width: deviceWidth * 0.99,
    height: deviceHeight / 3,
    backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  eduText: {
    fontSize: 24,
    marginRight: 10,
    color: 'white',
  },
  geoText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  csText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
});