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
            <View style={styles.topText}>
              <Text style={styles.eduText}>
                Edu
              </Text>
            </View>

            <View style={styles.bottomText}>

              <Text style={styles.mateText}>
                  Mate
              </Text>
            </View>
          </View>

          <View style={styles.setButtonAnat}>
            <Text style={styles.text}>
              Computer Science
            </Text>
          </View>

          

          <View style={styles.setButtonGeo}>
            <Text style={styles.text}>
              Geography
            </Text>
          </View>

          <View style={styles.setButtonCS}>
            <Text style={styles.text}>
              Computer Science
            </Text>
          </View>


          <View style={styles.setAddButton}>
            <Text style={styles.text}>
              + Add a new Set
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },

  topText: {
    height: 100,
    width: (deviceWidth*2)/3,
    textAlign: 'center',
    borderWidth: 1,
    alignItems: 'center',
  },

  bottomText: {
    borderWidth: 1,
    width: (deviceWidth*2)/3,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: deviceHeight/8,
  },


  titleLine: {
    flexDirection: 'column',
    marginTop: 10,
    borderWidth: 1,
    width: (deviceWidth*2)/3,

  },
  setButtonAnat: {
    borderWidth: 1,
    width: (deviceWidth*2)/3,
    height: deviceHeight/8,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  setButtonGeo: {
    borderWidth: 1,
    width: (deviceWidth*2)/3,
    height: deviceHeight/8,
    alignItems: 'center',
    justifyContent: 'center',

  },
  setButtonCS: {
    borderWidth: 1,
    width: (deviceWidth*2)/3,
    height: deviceHeight/8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eduText: {
    fontSize: 75,
    color: 'black',
    fontSize: 100,
    fontWeight: 'bold',

  },
  mateText: {
    fontSize: 75,
    fontWeight: 'bold',

  },

  text: {
    fontWeight: 'bold',
    fontSize: 75,

  },

  setAddButton: {
    borderWidth: 1,
    width: (deviceWidth*2)/3,
    height: deviceHeight/8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});