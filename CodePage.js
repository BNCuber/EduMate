import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, ImageBackground } from 'react-native';
import styles from './styles';
import array1 from './assets/array.png';
import stack1 from './assets/stack.png';

export default class CodePage extends Component {
    state = {
        arrayDisplay: 'block',
        stackDisplay: 'none',
        heapDisplay: 'none',
    };

    handleNextCard = () => {
        if(this.state.arrayDisplay == 'block') {
            this.setState({
                arrayDisplay: 'none',
                stackDisplay: 'block',
                heapDisplay: 'none',
              });
        } else if(this.state.stackDisplay == 'block') {
            this.setState({
                arrayDisplay: 'none',
                stackDisplay: 'none',
                heapDisplay: 'block',
              });
        } else {
            this.setState({
                arrayDisplay: 'block',
                stackDisplay: 'none',
                heapDisplay: 'none',
              });
        }
    }

    handlePrevCard = () => {
        if(this.state.arrayDisplay == 'block') {
            return null;
        } else if(this.state.stackDisplay == 'block') {
            this.setState({
                arrayDisplay: 'block',
                stackDisplay: 'none',
                heapDisplay: 'none',
              });
        } else {
            this.setState({
                arrayDisplay: 'none',
                stackDisplay: 'block',
                heapDisplay: 'none',
              });
        }
    }

    render() {
        const { handleHomePageDisplay } = this.props; //set props to use
        return (
            <View style={styles.javaContainer}>
                    <View style={styles.javaPage}>
                        <View style={styles.codeNavbar}>
                            <View style={styles.prev}>
                            <TouchableHighlight onPress={this.handlePrevCard}>
                                <Text style={styles.codeBarTextLeft}>
                                    Previous
                                </Text>
                            </TouchableHighlight>
                            </View>
                            <View style={styles.codeText}>
                                <View style={styles.CSText}>
                                    <Text style={styles.RealCS}>Java</Text>
                                </View>
                                <View style={styles.studyText}>
                                    <Text style={styles.RealStudy}>Study Set</Text>
                                </View>
                            </View>
                            <View style={styles.next}>
                            <TouchableHighlight onPress={this.handleNextCard}>
                                <Text style={styles.codeBarTextRight}>
                                    Next
                                </Text>
                            </TouchableHighlight>
                            </View>
                        </View>

                        <View style={{ display: this.state.arrayDisplay }}>
                        <View style={styles.CSCover}>
                            <ImageBackground
                                source={ array1 }
                                style={{ height: 500, width: 1500, marginLeft: 10, marginRight: 5 }}
                            >
                            </ImageBackground>
                        </View>
                        </View>

                        <View style={{ display: this.state.stackDisplay }}>
                        <View style={styles.CSCover}>
                            <ImageBackground
                                source={ stack1 }
                                style={{ height: 700, width: 1500, marginLeft: 10, marginRight: 5 }}
                            >

                            </ImageBackground>
                        </View>
                        </View>

                        <View style={{ display: this.state.heapDisplay }}>
                        <View style={styles.CSCover}>
                            <ImageBackground
                                source={{ uri: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230726162247/Array-data-structure.png' }}
                                style={{ height: 500, width: 1500, marginLeft: 10, marginRight: 5 }}
                            >

                            </ImageBackground>
                        </View>
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