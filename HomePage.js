import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, TextInput, ImageBackground, TouchableHighlight, Alert, ScrollView } from 'react-native';
import styles from './styles';

export default class HomePage extends Component {
  state = {
    homePageDisplay: 'block',
    anatPageDisplay: 'none',
    geoPageDisplay: 'none',
    javaPageDisplay: 'none',
    newSetDisplay: 'none',
  };

  handleHomePageDisplay = () => {
    this.setState({
      homePageDisplay: 'block',
      anatPageDisplay: 'none',
      geoPageDisplay: 'none',
      javaPageDisplay: 'none',
      newSetDisplay: 'none',
    });
  };

  // Other methods...

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
      </View>
    );
  }
}