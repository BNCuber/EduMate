import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class CodePage extends Component {
    state = {
        homePageDisplay: 'block',
        anatPageDisplay: 'none',
        geoPageDisplay: 'none',
        javaPageDisplay: 'none',
        newSetDisplay: 'none',
    }

    handleJavaPageDisplay = () => {
        this.setState({
            homePageDisplay: 'none',
            anatPageDisplay: 'none',
            geoPageDisplay: 'none',
            javaPageDisplay: 'block',
            newSetDisplay: 'none',
            //  Test
        })
    }

    render() {
        return (
            <View style={styles.container}>
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
            </View>
        );
    }
}