import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class GeoPage extends Component {
    

    render() {
        const { handleHomePageDisplay } = this.props; //set props to use
        return (
            <View style={styles.container}>
                    <View style={styles.geoPage}>
                        <View style={styles.goButt}>
                            <TouchableHighlight onPress={handleHomePageDisplay}>
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
        );
    }
}