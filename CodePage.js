import React, { Component } from 'react';
import { Text, View, TouchableHighlight, ImageBackground, Dimensions, Modal } from 'react-native';
import styles from './styles'; // Make sure styles are correctly imported
import array1 from './assets/array.png'; // Check if image paths are correct
import stack1 from './assets/stack.png';
import queue1 from './assets/Queue-Data-structure1.png'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const GRID_SIZE = 15; // Define a 3x3 grid

export default class CodePage extends Component {
    state = {
        currentCard: 'array',
        modalVisible: false,
        selectedCell: null,
        customMessage: '',
    };

    handleNextCard = () => {
        this.setState((prevState) => {
            switch (prevState.currentCard) {
                case 'array':
                    return { currentCard: 'stack' };
                case 'stack':
                    return { currentCard: 'queue' };
                case 'queue':
                    return { currentCard: 'array' };
                default:
                    return { currentCard: 'array' };
            }
        });
    };

    handlePrevCard = () => {
        this.setState((prevState) => {
            switch (prevState.currentCard) {
                case 'array':
                    return { currentCard: 'queue' };
                case 'queue':
                    return { currentCard: 'stack' };
                case 'stack':
                    return { currentCard: 'array' };
                default:
                    return { currentCard: 'array' };
            }
        });
    };

    showModal = (cell) => {
        let customMessage = '';
        if ((cell.row === 2 || cell.row === 1) && cell.col === 7 && this.state.currentCard == 'array') {
            customMessage = 'This is the first array element. ';
        } else if((cell.row === 2 || cell.row === 1) && cell.col === 8 && this.state.currentCard == 'array') {
            customMessage = 'This is the second array element. ';
        } else if((cell.row === 2 || cell.row === 1) && cell.col === 9 && this.state.currentCard == 'array') {
            customMessage = 'This is the third array element. ';
        } else if((cell.row === 2 || cell.row === 1) && cell.col === 11 && this.state.currentCard == 'array') {
            customMessage = 'This is the fourth array element. ';
        } else if((cell.row === 2 || cell.row === 1) && cell.col === 12 && this.state.currentCard == 'array') {
            customMessage = 'This is the fifth array element. ';
        } else if((cell.row === 2 || cell.row === 1) && cell.col === 13 && this.state.currentCard == 'array') {
            customMessage = 'This is the sixth array element. ';
        } else if((cell.row === 7 || cell.row === 8 || cell.row === 9) && cell.col === 7 && this.state.currentCard == 'array') {
            customMessage = 'This is the element that is in the 0th array index position. ';
        } else if((cell.row === 7 || cell.row === 8 || cell.row === 9) && cell.col === 8 && this.state.currentCard == 'array') {
            customMessage = 'This is the element that is in the 1st array index position. ';
        } else if((cell.row === 7 || cell.row === 8 || cell.row === 9) && cell.col === 9 && this.state.currentCard == 'array') {
            customMessage = 'This is the element that is in the 2nd array index position. ';
        } else if((cell.row === 7 || cell.row === 8 || cell.row === 9) && cell.col === 11 && this.state.currentCard == 'array') {
            customMessage = 'This is the element that is in the 3rd array index position. ';
        } else if((cell.row === 7 || cell.row === 8 || cell.row === 9) && cell.col === 12 && this.state.currentCard == 'array') {
            customMessage = 'This is the element that is in the 4th array index position. ';
        } else if((cell.row === 7 || cell.row === 8 || cell.row === 9) && cell.col === 13 && this.state.currentCard == 'array') {
            customMessage = 'This is the element that is in the 5th array index position.';
        } else if((cell.row === 0 || cell.row === 1) && cell.col === 7 && this.state.currentCard == 'stack') {
            customMessage = 'The Push function for a stack adds an element to the very top(end) of the stack.';
        } else if((cell.row === 0 || cell.row === 1) && cell.col === 14 && this.state.currentCard == 'stack') {
            customMessage = 'The Pop function for a stack deletes an element at the very top(end) of the stack.';
        } else if((cell.row === 7 || cell.row === 8) && cell.col === 14 && this.state.currentCard == 'stack') {
            customMessage = 'When the Pop function is called, the second to last element becomes the new last element.';
        } else if((cell.row === 12 || cell.row === 9 || cell.row === 10 || cell.row === 11 || cell.row === 13) && cell.col === 7 && this.state.currentCard == 'queue') {
            customMessage = 'When the remove function of a queue is called, the very first element of the list is removed, and every other element is pushed 1 up.';
        } else if((cell.row === 1 || cell.row === 2 || cell.row === 3) && cell.col === 13 && this.state.currentCard == 'queue') {
            customMessage = 'When the add function of a queue is called, an element is added to the back of the queue.';
        } else {
            customMessage = `You clicked cell at row ${cell.row}, column ${cell.col}`;
        }

        this.setState({ modalVisible: true, selectedCell: cell, customMessage });
    };

    hideModal = () => {
        this.setState({ modalVisible: false, selectedCell: null, customMessage: '' });
    };

    renderGrid = (imageHeight, imageWidth) => {
        const cellHeight = imageHeight / GRID_SIZE;
        const cellWidth = imageWidth / GRID_SIZE;
        let cells = [];

        for (let i = 0; i < GRID_SIZE; i++) {
            for (let j = 0; j < GRID_SIZE; j++) {
                cells.push(
                    <TouchableHighlight
                        key={`${i}-${j}`}
                        style={{
                            position: 'absolute',
                            top: i * cellHeight,
                            left: j * cellWidth,
                            height: cellHeight,
                            width: cellWidth,
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                        }}
                        onPress={() => this.showModal({ row: i, col: j })}
                        underlayColor="transparent"
                    >
                        <View />
                    </TouchableHighlight>
                );
            }
        }
        return cells;
    };

    render() {
        const { handleHomePageDisplay } = this.props;
        const { currentCard, modalVisible, customMessage } = this.state;

        let imageSource, imageHeight, imageWidth;
        switch (currentCard) {
            case 'array':
                imageSource = array1;
                imageHeight = deviceHeight / 3;
                imageWidth = 2 * deviceWidth / 3;
                break;
            case 'stack':
                imageSource = stack1;
                imageHeight = deviceHeight / 2;
                imageWidth = 2 * deviceWidth / 3;
                break;
            case 'queue':
                imageSource = queue1;
                imageHeight = deviceHeight / 3;
                imageWidth = 2 * deviceWidth / 3;
                break;
            default:
                imageSource = array1;
                imageHeight = deviceHeight / 3;
                imageWidth = 2 * deviceWidth / 3;
        }

        return (
            <View style={styles.javaContainer}>
                <View style={styles.javaPage}>
                    <View style={styles.codeNavbar}>
                        <View style={styles.prev}>
                            <TouchableHighlight onPress={this.handlePrevCard} underlayColor="transparent">
                                <Text style={styles.codeBarTextLeft}>Previous</Text>
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
                            <TouchableHighlight onPress={this.handleNextCard} underlayColor="transparent">
                                <Text style={styles.codeBarTextRight}>Next</Text>
                            </TouchableHighlight>
                        </View>
                    </View>

                    <View style={styles.CSCover}>
                        <ImageBackground
                            source={imageSource}
                            style={{ height: imageHeight, width: imageWidth, marginLeft: 10, marginRight: 5 }}
                        >
                            {this.renderGrid(imageHeight, imageWidth)}
                        </ImageBackground>
                    </View>

                    <View style={styles.goButt}>
                        <TouchableHighlight onPress={handleHomePageDisplay} underlayColor="transparent">
                            <Text style={styles.homeText}>← Back to Home</Text>
                        </TouchableHighlight>
                    </View>
                </View>

                <Modal
                    animationType="none"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={this.hideModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>{customMessage}</Text>
                            <TouchableHighlight onPress={this.hideModal} underlayColor="transparent">
                                <Text style={styles.closeText}>Close</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}