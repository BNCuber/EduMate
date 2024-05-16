import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Button, Dimensions } from 'react-native';
import styles from './styles';

import Texas from './assets/Texas.png';
import LocationPin from './assets/LocationPin.png';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

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
                Houston: [
                    "Houston is a large metropolis in Southeast Texas close to the Gulf of Mexico and Galveston Bay. It is Texas' largest city and America's fourth largest city, as of 2022, with an estimated population of 2,345,606. In Houston, there is a medical center bigger than Dallas' downtown. The profitable oil and gas business in America has one of its hubs in Houston as well. International trade on a large scale helps the city's rapid job growth."
                ],
                DallasFW: [
                    "Dallas is the 9th largest city in the United States and the third largest city in Texas, with an estimated population of 1,325,691 as of 2022. Forth Worth is the 13th largest city in the United States and the fifth largest city in Texas, with a population of 954,457. Together they make up the Dallas-Fort Worth metropolitan area."
                ],
                Austin: [
                    "Austin is a city in the Texas counties of Travis and Williamson. Austin serves as both the capital of Texas and the county seat of Travis County. It is the 11th largest city in the United States and the fourth largest city in Texas, with an estimated population of 996,147 in 2022. "
                ],
                SanAntonio: [
                    "The city of San Antonio is situated in south-central Texas' Bexar and Comal counties.  It is the second-largest city in Texas and the seventh-largest city in the United States as of 2022, with an estimated population of 1,456,069 people. San Antonio, well-known for its magnificent Spanish colonial missions and the battle surrounding one of them (The Alamo), is hugely popular with history aficionados."
                ],
                ElPaso: [
                    "El Paso  is the 24th largest city in the United States and the sixth largest city in Texas as of 2020, with a population of 684,753. El Paso is the largest American city on the Mexican border and is situated on the left bank of the Rio Grande, which here defines the state of Texas' western border with Mexico."
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
                        Geography
                    </View>
                    <View style={styles.studyText}>
                        Study Set
                    </View>
                </View>

                <Image source={Texas} style={{ width: deviceWidth/2, height: deviceHeight }} />

                <View style={styles.bodyContainer}>
                    {/* Overlay touchable components on top of the image */}
                    <TouchableOpacity onPress={() => this.handleBodyPartClick('Houston')} style={[styles.bodyPartTouchable, { width: 60, height: 40, top:100, left:50 }]}>
                        <Image source={LocationPin} style={styles.bodyPartImage} />
                    </TouchableOpacity>
                    {/* Add more touchable components for other body parts as needed */}
                </View>

                
               
                

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