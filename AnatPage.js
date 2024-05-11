import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class AnatPage extends Component {
    state = {
        homePageDisplay: 'block',
        anatPageDisplay: 'none',
        geoPageDisplay: 'none',
        javaPageDisplay: 'none',
        newSetDisplay: 'none',
    }

    handleHomePageDisplay = () => {
        this.setState({
            homePageDisplay: 'block',
            anatPageDisplay: 'none',
            geoPageDisplay: 'none',
            javaPageDisplay: 'none',
            newSetDisplay: 'none',
        })
    }

    handleAnatPageDisplay = () => {
        this.setState({
            homePageDisplay: 'none',
            anatPageDisplay: 'block',
            geoPageDisplay: 'none',
            javaPageDisplay: 'none',
            newSetDisplay: 'none',
        })
    }

    render() {
        return (
            <View style={styles.container}>
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
            </View>
        );
    }
}