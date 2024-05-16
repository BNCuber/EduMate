import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Button } from 'react-native';
import styles from './styles';

import human from './assets/humanBody.png';
import heart from './assets/heart.PNG';

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
                lung: [
                    "The lungs, located in the chest cavity, are vital for breathing. They allow oxygen to enter the bloodstream while removing carbon dioxide."
                ],
                heart: [
                    "The heart, a muscular organ, tirelessly pumps blood throughout the body. It consists of four chambers: two atria (upper chambers) and two ventricles (lower chambers).The rhythmic contractions of the heart (heartbeat) ensure efficient blood circulation."
                ],
                stomach: [
                    "Situated in the upper abdomen, the stomach plays a crucial role in digestion.It receives food from the esophagus and breaks it down using gastric juices.The stomach’s muscular walls churn and mix the food, transforming it into a semi-liquid substance called chyme."
                ],
                liver: [
                    "Liver performs various vital functions, including detoxification, metabolism, and production of bile. Bile aids in digesting fats and is stored in the gallbladder."
                ],
                intestines: [
                    "The intestines consist of two parts: the small intestine and the large intestine (colon). The small intestine absorbs nutrients from digested food. The large intestine absorbs water and electrolytes, ultimately forming feces for elimination."
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
                    <TouchableOpacity onPress={() => this.handleBodyPartClick('lung')} style={[styles.bodyPartTouchable, { left: 50, top: 100, width: 60, height: 40 }]}>
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