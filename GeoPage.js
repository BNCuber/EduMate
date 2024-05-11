import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class GeoPage extends Component {
    state = {
        homePageDisplay: 'block',
        anatPageDisplay: 'none',
        geoPageDisplay: 'none',
        javaPageDisplay: 'none',
        newSetDisplay: 'none',
    }

    handleGeoPageDisplay = () => {
        this.setState({
            homePageDisplay: 'none',
            anatPageDisplay: 'none',
            geoPageDisplay: 'block',
            javaPageDisplay: 'none',
            newSetDisplay: 'none',
        })
    }

    render() {
        return (
            <View style={styles.container}>
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
            </View>
        );
    }
}