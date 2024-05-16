import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Button, Dimensions, ImageBackground } from 'react-native';
import styles from './styles';

import Texas from './assets/Texas.png';
import LocationPin from './assets/LocationPin.png';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


const locationCoordinates = {
    Houston: { x: deviceWidth * 0.175, y: deviceHeight * 0.6 },
    DallasFW: { x: deviceWidth * 0.155, y: deviceHeight * 0.30 },
    Austin: { x: deviceWidth * 0.06, y: deviceHeight * 0.45 },
    SanAntonio: { x: deviceWidth * 0.05, y: deviceHeight * 0.6 },
    ElPaso: { x: deviceWidth * -.175, y: deviceHeight * 0.4 },
    
};

const CardPopup = ({ visible, card, onClose }) => {
    if (!visible || !card) 
        return null;

    return (
        <Modal transparent={true} visible={visible}>
            <View style={styles.popupContainer}>
                <View style={styles.popupContent}>
                    <Text>{`${card.part}`}</Text>
                    {card.facts.map((fact, index) => (
                        <Text key={index}>{`${fact}`}</Text>
                    ))}
                    <Button title="Close" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
};

export default class GeoPage extends Component {
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
            },
            isCardPopupVisible: false,
            selectedCard: null,
        };
    }

    handlePinClick = (location) => {
        const selectedPart = location;
        const selectedFacts = this.state.facts[selectedPart];
        const selectedCard = {
            part: selectedPart,
            facts: selectedFacts,
        };
        this.setState({ isCardPopupVisible: true, selectedCard: selectedCard });
    };

    handleClosePopup = () => {
        this.setState({ isCardPopupVisible: false, selectedCard: null });
    };

    render() {
        const { handleHomePageDisplay } = this.props;
        const { isCardPopupVisible, selectedCard } = this.state;
    
        return (
            <View style={styles.container}>
                <View style={styles.geoPage}>
                    <View style={styles.goButt}>
                        <TouchableOpacity onPress={handleHomePageDisplay}>
                            <Text style={styles.homeText}>← Back to Home</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.geoText}>
                        Geography
                    </View>
                    <View style={styles.studyText}>
                        Study Set
                    </View>
                </View>
    
                <ImageBackground source={Texas} style={{ width: deviceWidth / 2, height: deviceHeight }}>
                    <View style={styles.texasContainer}>
                        {Object.keys(locationCoordinates).map((location, index) => (
                            <TouchableOpacity 
                                key={index} 
                                onPress={() => this.handlePinClick(location)} 
                                style={[styles.bodyPartTouchable, { left: locationCoordinates[location].x, top: locationCoordinates[location].y }]}>
                                <Image source={LocationPin} style={styles.pinImage} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </ImageBackground>
    
                
                <CardPopup
                    visible={isCardPopupVisible}
                    card={selectedCard}
                    onClose={this.handleClosePopup}
                />
            </View>
        );
    }
}
