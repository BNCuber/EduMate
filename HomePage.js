import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, TextInput, ImageBackground, TouchableHighlight, Alert, ScrollView } from 'react-native';
import styles from './styles';
import App from './App';


export default class HomePage extends Component {
 

  // Other methods...

  render() {
    const { handleCodePageDisplay, handleGeoPageDisplay,handleAnatPageDisplay } = this.props; //set props to use
    return (
      <View style={styles.container}>
        
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
                      onPress={handleCodePageDisplay} //uses prop to call method from App.js
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
                      onPress={handleGeoPageDisplay}
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
                      onPress={handleAnatPageDisplay}
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

                <View style={styles.navbar}>
                    <TouchableHighlight
                        style={styles.buttonWrapper}
                        onPress={this.handleNewPageDisplay}
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
                        onPress={this.handleCodePageDisplay}
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
                
          </View>  

        
      </View>
    );
  }
}