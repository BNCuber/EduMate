import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class AnatPage extends Component {
   

    render() {
        const {handleHomePageDisplay} = this.props; //set props to use
        return (
            <View style={styles.container}>
            
                    <View style={styles.anatPage}>
                        <View style={styles.goButt}>
                            <TouchableHighlight onPress={handleHomePageDisplay}>
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
        );
    }
}