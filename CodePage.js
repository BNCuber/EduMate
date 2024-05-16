import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, ImageBackground, Dimensions } from 'react-native';
import styles from './styles'; // Make sure styles are correctly imported
import array1 from './assets/array.png'; // Check if image paths are correct
import stack1 from './assets/stack.png';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

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
    };

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
    };

    render() {
        const { handleHomePageDisplay } = this.props;
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

                    {/* Display the appropriate image based on state */}
                    <View style={{ display: this.state.arrayDisplay }}>
                        <View style={styles.CSCover}>
                            <ImageBackground
                                source={array1}
                                style={{ height: deviceHeight / 4, width: 2 * deviceWidth / 3, marginLeft: 10, marginRight: 5 }}
                            />
                        </View>
                    </View>

                    <View style={{ display: this.state.stackDisplay }}>
                        <View style={styles.CSCover}>
                            <ImageBackground
                                source={stack1}
                                style={{ deviceHeight / 3, width: 2 * deviceWidth / 3, marginLeft: 10, marginRight: 5 }}
                            />
                        </View>
                    </View>

                    {/* You may need to adjust the source URL for the heap image */}
                    <View style={{ display: this.state.heapDisplay }}>
                        <View style={styles.CSCover}>
                            <ImageBackground
                                source={{ uri: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230726162247/Array-data-structure.png' }}
                                style={{ height: 500, width: 1500, marginLeft: 10, marginRight: 5 }}
                            />
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
