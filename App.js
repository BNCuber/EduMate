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

                <ScrollView 
                  style  = {styles.scrollViewContainer}
                  showsVerticalScrollIndicator={false}
                >
                  
                    

                    <TouchableHighlight 
                      style={styles.buttonWrapper}
                      onPress={this.handleJavaPageDisplay}
                      
                    >
                      <View style={styles.setButtonCS}>
                        <View style={styles.titleBox}>
                          <Text style={styles.text}>
                            Programming
                          </Text>
                        </View>
                      </View>
                    </TouchableHighlight>

                    <TouchableHighlight 
                      style={styles.buttonWrapper}
                      onPress={this.handleGeoPageDisplay}
                    >
                      <View style={styles.setButtonGeo}>
                        <View style={styles.titleBox}>
                          <Text style={styles.text}>
                            Geography
                          </Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight 
                      style={styles.buttonWrapper}
                      onPress={this.handleAnatPageDisplay}
                    >
                      <View style={styles.setButtonAnat}>
                        <View style={styles.titleBox}>
                          <Text style={styles.text}>
                            Anatomy
                          </Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                    

                    <TouchableHighlight 
                        style={styles.buttonWrapper}
                        onPress={this.handleNewSetDisplay}
                    >
                    <View style={styles.setAddButton}>                      
                      
                          <Text style={styles.text}>
                            + Add a new Set
                          </Text>
                      
                    </View>

                    </TouchableHighlight>
                </ScrollView> 
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

  buttonWrapper:{
   alignItems: 'center',
   justifyContent: 'center', 
  

   overflow: 'hidden',

  },

  topText: {
    height: 100,
    width: deviceWidth*9,
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

  scrollViewContainer:{
    height:deviceHeight/1.5,
    
    
  },
  setButtonAnat: {
    
    width: (deviceWidth/5)*4,
    height: (deviceHeight/8)*1.5,
    marginTop: deviceHeight/20,
    borderRadius: 25,
    backgroundColor:'#f0b4f4',

    

  },

  titleBox: {
    marginLeft: deviceWidth/30,
    marginTop: deviceHeight/30,
    
    width: deviceWidth/2.15,
    height: deviceHeight/9,
    borderRadius: 20,
    backgroundColor: 'rgba(242, 242, 242, .64)',
    alignItems: 'center',
    justifyContent: 'center',



  },

  setButtonGeo: {
    
    width: (deviceWidth/5)*4,
    height: (deviceHeight/8)*1.5,
    marginTop: deviceHeight/20,
    borderRadius: 25,
    backgroundColor:'#68A5FF',
    
  },

  setButtonCS: {
    
    width: (deviceWidth/5)*4,
    height: (deviceHeight/8)*1.5,
    marginTop: deviceHeight/20,
    borderRadius: 25,
    backgroundColor:'#93E9F2',
    
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
    fontSize: deviceHeight/25,

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
    
    width: (deviceWidth/5)*4,
    height: (deviceHeight/8)*1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: deviceHeight/20,
    borderRadius: 25,
    backgroundColor:'#F3D0D7',
    
  },
});