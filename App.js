import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


export default class App extends Component {
    state  =  {
        homePageDisplay: 'block',
        anatPageDisplay: 'none',
        geoPageDisplay: 'none',
        javaPageDisplay: 'none',
        newSetDisplay: 'none',
    }

    handleHomePageDisplay = () => {
      this.setState({
        homePageDisplay:'block',
        anatPageDisplay:'none',
        geoPageDisplay:'none',
        javaPageDisplay:'none',
        NewSetDisplay: 'none',
      })
    }

    handleAnatPageDisplay = () => {
      this.setState({
        homePageDisplay:'none',
        anatPageDisplay:'block',
        geoPageDisplay:'none',
        javaPageDisplay:'none',
        NewSetDisplay: 'none',
      })
    }

    handleGeoPageDisplay = () => {
      this.setState({
        homePageDisplay:'none',
        anatPageDisplay:'none',
        geoPageDisplay:'block',
        javaPageDisplay:'none',
        NewSetDisplay: 'none',
      })
    }

    handleJavaPageDisplay = () => {
      this.setState({
        homePageDisplay:'none',
        anatPageDisplay:'none',
        geoPageDisplay:'none',
        javaPageDisplay:'block',
        NewSetDisplay: 'none',
      })
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
        <View style = {{ display: this.state.homePageDisplay }}>
          <View style={styles.homeScreen}>
            <View style={styles.titleLine}>
                <Text style={styles.eduText}>
                  Edu
                </Text>
                <Text style={styles.mateText}>
                    Mate
                </Text>
            </View>
                <ScrollView style  = {styles.scrollwViewContainer}>
                  
                    <TouchableHighlight onPress={this.handleAnatPageDisplay}>
                      <View style={styles.setButtonAnat}>
                        <Text style={styles.text}>
                          Anatomy
                        </Text>
                      </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this.handleGeoPageDisplay}>
                      <View style={styles.setButtonGeo}>
                        <Text style={styles.text}>
                          Geography
                        </Text>
                      </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight onPress={this.handleJavaPageDisplay}>
                      <View style={styles.setButtonCS}>
                        <Text style={styles.text}>
                          Computer Science
                        </Text>
                      </View>
                    </TouchableHighlight>

                    <View style={styles.setAddButton}>
                      <TouchableHighlight onPress={this.handleNewSetDisplay}>
                        <Text style={styles.text}>
                          + Add a new Set
                        </Text>
                      </TouchableHighlight>
                    </View>
                  
                </ScrollView> 
          </View>  
        </View>
       
        <View style={{ display: this.state.anatPageDisplay }}>
          <View style={styles.anatPage}>
          <View style={styles.goButt}>
            <TouchableHighlight onPress={this.handleHomePageDisplay}>
              <Text style={styles.homeText}>
                ← Back to Home
              </Text>
            </TouchableHighlight>
            </View>
            <View style={styles.anatText}>
              Anatomy
            </View>
            <View style={styles.studyText}>
              Study Set
            </View>
          </View>
        </View>
        <View style={{ display: this.state.geoPageDisplay }}>
          <View style={styles.geoPage}>
          <View style={styles.goButt}>
            <TouchableHighlight onPress={this.handleHomePageDisplay}>
              <Text style={styles.homeText}>
                ← Back to Home
              </Text>
            </TouchableHighlight>
            </View>
            <View style={styles.GeoText}>
              Geography
            </View>
            <View style={styles.studyText}>
              Study Set
            </View>
          </View>
        </View>
        <View style={{ display: this.state.javaPageDisplay }}>
          <View style={styles.javaPage}>
          <View style={styles.goButt}>
            <TouchableHighlight onPress={this.handleHomePageDisplay}>
              <Text style={styles.homeText}>
                ← Back to Home
              </Text>
            </TouchableHighlight>
            </View>
            <View style={styles.CSText}>
              Java
            </View>
            <View style={styles.studyText}>
              Study Set
            </View>
          </View>
        </View>
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
    width: deviceWidth*.9,
    textAlign: 'center',
    borderWidth: 1,
    alignItems: 'center',
  },

  bottomText: {
    borderWidth: 1,
    width: deviceWidth*.9,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: deviceHeight/8,
  },


  titleLine: {
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 1,
    width: deviceWidth*.9,
    justifyContent:'center',
    alignText:'center',

  },

  scrollwViewContainer:{
    height:deviceHeight/1.5,
    
  },
  setButtonAnat: {
    borderWidth: 1,
    width: deviceWidth*.9,
    height: deviceHeight/8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor:'#f0b4f4',

  },
  setButtonGeo: {
    borderWidth: 1,
    width: deviceWidth*.9,
    height: deviceHeight/8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#93e9f1',
    borderRadius: 25,
  },
  setButtonCS: {
    borderWidth: 1,
    width: deviceWidth*.9,
    height: deviceHeight/8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#68a5ff',
    borderRadius: 25,
  },
  eduText: {
   
    color: '#BDE0FE',
    fontSize: 100,
    fontWeight: 'bold',

  },
  mateText: {
    fontSize: 100,
    fontWeight: 'bold',
    color:'#D6CCC2'
  },

  text: {
    fontWeight: 'bold',
    fontSize: 75,

  },

  homeText: {
    fontSize: 30, 
    margin: 5,
  },
  
  goButt: {
    alignSelf: 'start',
    alignItems: 'left',
    justifyContent: 'left',
    borderWidth: 1,
    borderRadius: 25,
  },

  setAddButton: {
    borderWidth: 1,
    width: (deviceWidth*2)/3,
    height: deviceHeight/8,
    alignItems: 'center',
    justifyContent: 'center',
    color:"#E3D5CA",
    borderRadius: 25,
  },
});