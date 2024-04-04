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
    height: deviceHeight/4,
    width: (deviceWidth*2)/3,
    textAlign: "center",
    borderWidth: 1,
  },

  bottomText: {
    borderWidth: 1,
  },


  titleLine: {
    flexDirection: 'column',
    marginTop: 10,
    borderWidth: 1,
    width: (deviceWidth*2)/3,

  },
  setButtonAnat: {
    borderWidth: 1,
    
  },
  setButtonGeo: {
    borderWidth: 1,
    
  },
  setButtonCS: {
    borderWidth: 1,
    
  },
  eduText: {
    fontSize: 24,
    marginRight: 10,
    color: 'black',
  },
  mateText: {

  },

  text: {


  },

  setAddButton: {

    borderWidth: 1,
  },
});