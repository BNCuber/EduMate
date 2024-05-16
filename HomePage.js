import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import styles from './styles';

export default class HomePage extends Component {
    render() {
        const { handleCodePageDisplay, handleGeoPageDisplay, handleAnatPageDisplay } = this.props;
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
                        style={styles.scrollViewContainer}
                        showsVerticalScrollIndicator={false}
                    >
                        <TouchableHighlight 
                            style={styles.buttonWrapper}
                            onPress={handleCodePageDisplay}
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

                    
                     
                </View>  
            </View>
        );
    }
}
