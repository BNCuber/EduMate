import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class CodePage extends Component {
    

    render() {
        const { handleHomePageDisplay } = this.props; //set props to use
        return (
            <View style={styles.container}>
               
                    <View style={styles.javaPage}>
                        <View style={styles.goButt}>
                            <TouchableHighlight onPress={handleHomePageDisplay}>
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
        );
    }
}