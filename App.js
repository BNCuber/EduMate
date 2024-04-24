import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, TextInput, ImageBackground, TouchableHighlight, Alert, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'react-native';
import styles from './styles';




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
                      underlayColor="#FFFFFF"
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
                      underlayColor="#FFFFFF"
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
                      underlayColor="#FFFFFF"
                    >
                      <View style={styles.setButtonAnat}>
                        <View style={styles.titleBox}>
                          <Text style={styles.text}>
                            Anatomy
                          </Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                    
                </ScrollView> 

                
          </View>  

          

        </View>


        <View style={styles.navbar}>
          

          <TouchableHighlight 
              style={styles.buttonWrapper}
              onPress={this.handleNewSetDisplay}
              underlayColor="#FFFFFF"
          >

            <View style={styles.addButtonWrapper}> 
              <View style={styles.homebutton}>

              </View>                                
              <Text style={styles.text}>
                + 
              </Text>   
            </View>
  
          </TouchableHighlight>


          <TouchableHighlight 
              style={styles.buttonWrapper}
              onPress={this.handleNewSetDisplay}
              underlayColor="#FFFFFF"
          >

          <View style={styles.libraryButton}>
              <View style={styles.library}>
                  *
              </View>

              <Text style={styles.yourLibrary}>
                Your Collection
              </Text>

           </View>

          </TouchableHighlight>



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
  };
}