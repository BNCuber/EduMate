import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';

export default class CodePage extends Component {
    

    render() {
        const { handleHomePageDisplay } = this.props; //set props to use
        return (
            <View style={styles.javaContainer}>
               
                    <View style={styles.javaPage}>
                        <View style={styles.CSText}>
                            <Text style={styles.RealCS}>Java</Text>
                        </View>
                        <View style={styles.studyText}>
                            <Text style={styles.RealStudy}>Study Set</Text>
                        </View>

                        <View style={styles.CSCover}>
                            <Image
                                source={{ uri: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230726162247/Array-data-structure.png' }}
                                style={{ height: 300, width: 1000, marginLeft: 10, marginRight: 5 }}
                            />
                        </View>

                        <View style={styles.goButt}>
                            <TouchableHighlight onPress={handleHomePageDisplay}>
                                <Text style={styles.homeText}>
                                    ← Back to Home
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
              
            </View>
        );
    }
}