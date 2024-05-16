import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Button } from 'react-native';
import styles from './styles';

import human from './assets/humanBody.png';

const CardPopup = ({ visible, card, onClose }) => {
    if (!visible) 
        return null;

    return (
        <Modal animationType="slide" transparent={true} visible={visible}>
            <View style={styles.popupContainer}>
                <View style={styles.popupContent}>
                    <Text>
                        {`Part: ${card.part}`}
                    </Text>

                    <Text>
                        {`Fact: ${card.fact}`}
                    </Text>
                    <Button title="Close" onPress={onClose} />

                </View>
            </View>
        </Modal>
    );
};

export default class AnatPage extends Component {
   constructor(props) {
        super(props);
        this.state = {
            selectedPart: null,
            facts: {
                brain: [
                    "The brain is the control center of the body.",
                    "It weighs about 3 pounds.",
                    // Add more facts as needed
                ],
                // Add more body parts and facts as needed
            },
            flashcards: [], // Array to store flashcards
            isCardPopupVisible: false,
            selectedCard: null,
        };
    }

    handleBodyPartClick = (part) => {
        if(this.state.selectedPart) {
            this.setState({ isCardPopupVisible: false, selectedCard: null, selectedPart: null });
        } else {
            this.setState({ selectedPart: part });
        }
    };

    handleAddToFlashcards = () => {
        if (this.state.selectedPart && this.state.facts[this.state.selectedPart]) {
            const newFlashcard = {
                part: this.state.selectedPart,
                fact: this.state.facts[this.state.selectedPart][0], // Assuming you add the first fact by default
            };
            this.setState((prevState) => ({
                flashcards: [...prevState.flashcards, newFlashcard],
            }));
        }
    };

    handleCardClick = (card) => {
        this.setState({ isCardPopupVisible: true, selectedCard: card });
    };

    handleClosePopup = () => {
        this.setState({ isCardPopupVisible: false, selectedCard: null });
    };


    render() {
        const { handleHomePageDisplay } = this.props;
        const { selectedPart, facts, isCardPopupVisible, selectedCard } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.anatPage}>
                    <View style={styles.goButt}>
                        <TouchableOpacity onPress={handleHomePageDisplay}>
                            <Text style={styles.homeText}>← Back to Home</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.anatText}>
                        Anatomy
                    </View>
                    <View style={styles.studyText}>
                        Study Set
                    </View>
                </View>

                {/* Display Human Body */}
                <View style={styles.bodyContainer}>
                    {/* Overlay touchable components on top of the image */}
                    <TouchableOpacity onPress={() => this.handleBodyPartClick('brain')} style={[styles.bodyPartTouchable, { left: 50, top: 100, width: 60, height: 40 }]}>
                        <Image source={human} style={styles.bodyPartImage} />
                    </TouchableOpacity>
                    {/* Add more touchable components for other body parts as needed */}
                </View>

                {/* Display Facts */}
                {selectedPart && (
                    <View style={styles.factsContainer}>
                        <Text>{`Facts about ${selectedPart}:`}</Text>
                        {facts[selectedPart].map((fact, index) => (
                            <Text key={index}>{fact}</Text>
                        ))}
                        <TouchableOpacity onPress={this.handleAddToFlashcards}>
                            <Text>Add to Flashcards</Text>
                        </TouchableOpacity>
                    </View>
                )}

               
                

                {/* Popup for displaying card */}
                <CardPopup
                    visible={isCardPopupVisible}
                    card={selectedCard}
                    onClose={this.handleClosePopup}
                />
            </View>
        );
    }
}