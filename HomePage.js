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

  handleAnatPageDisplay = () => {
    this.setState({
        homePageDisplay: 'none',
        anatPageDisplay: 'block',
        geoPageDisplay: 'none',
        codePageDisplay: 'none',
        newPageDisplay: 'none',
    })
};

handleGeoPageDisplay = () => {
    this.setState({
        homePageDisplay: 'none',
        anatPageDisplay: 'none',
        geoPageDisplay: 'block',
        codePageDisplay: 'none',
        newPageDisplay: 'none',
    })
};

handleCodePageDisplay = () => {
    this.setState({
        homePageDisplay: 'none',
        anatPageDisplay: 'none',
        geoPageDisplay: 'none',
        codePageDisplay: 'block',
        newPageDisplay: 'none',
    })
};

handleNewPageDisplay = () => {
    this.setState({
        homePageDisplay: 'none',
        anatPageDisplay: 'none',
        geoPageDisplay: 'none',
        codePageDisplay: 'none',
        newPageDisplay: 'block',
    })
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
                      onPress={this.handleCodePageDisplay}
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
      </View>
    );
  }
}