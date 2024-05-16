import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Button, Dimensions } from 'react-native';
import styles from './styles';

import heart from './assets/heart.PNG';
import liver from './assets/liver.PNG';
import lung from './assets/lungs.PNG';
import stomach from './assets/stomach.PNG';
import intestine from './assets/intestine.PNG';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const CardPopup = ({ visible, card, onClose }) => {
    if (!visible) 
        return null;

    return (
        <Modal transparent={true} visible={visible}>
            <View style={styles.popupContainer}>
                <View style={styles.popupContent}>
                    <Text>
                        {`${card.part}`}
                    </Text>

                    <Text>
                        {`${card.fact}`}
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
                intestine: [
                    "The intestines consist of two parts: the small intestine and the large intestine (colon). The small intestine absorbs nutrients from digested food. The large intestine absorbs water and electrolytes, ultimately forming feces for elimination."
                ],
                
            },
            flashcards: [], 
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
                fact: this.state.facts[this.state.selectedPart][0], 
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

                
                <View style={styles.bodyContainer}>
                    
                    <TouchableOpacity onPress={() => this.handleBodyPartClick('lung')} style={[styles.bodyPartTouchable, { width: 75, height: 75 }]}>
                        <Image source={lung} style={styles.bodyPartImage} />
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.bodyContainer}>
                    <TouchableOpacity onPress={() => this.handleBodyPartClick('heart')} style={[styles.bodyPartTouchable, { width: 75, height: 75 }]}>
                    <Image source={heart} style={styles.bodyPartImage} />
                    </TouchableOpacity>
                </View>

                <View style={styles.bodyContainer}>
                    <TouchableOpacity onPress={() => this.handleBodyPartClick('stomach')} style={[styles.bodyPartTouchable, { width: 75, height: 75 }]}>
                        <Image source={stomach} style={styles.bodyPartImage} />
                    </TouchableOpacity>
                </View>

                <View style={styles.bodyContainer}>
                    <TouchableOpacity onPress={() => this.handleBodyPartClick('intestine')} style={[styles.bodyPartTouchable, { width: 75, height: 75 }]}>
                        <Image source={intestine} style={styles.bodyPartImage} />
                    </TouchableOpacity>
                </View>

                <View style={styles.bodyContainer}>
                    <TouchableOpacity onPress={() => this.handleBodyPartClick('liver')} style={[styles.bodyPartTouchable, { width: 75, height: 75 }]}>
                        <Image source={liver} style={styles.bodyPartImage} />
                    </TouchableOpacity>
                </View>

                
                {selectedPart && (
                    <View style={styles.factsContainer}>
                        <Text>{`Facts about ${selectedPart}:`}</Text>
                        {facts[selectedPart].map((fact, index) => (
                            <Text key={index}>{fact}</Text>
                        ))}
                        
                    </View>
                )}

                
                <CardPopup
                    visible={isCardPopupVisible}
                    card={selectedCard}
                    onClose={this.handleClosePopup}
                />
            </View>
        );
    }
}
