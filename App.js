import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import HomePage from './HomePage';
import CodePage from './CodePage'; // Corrected import
import GeoPage from './GeoPage';
import AnatPage from './AnatPage'; // Corrected import
import Newpage from './Newpage';
import styles from './styles';


export default class App extends Component {
  
  render() {
    return (
      
      <View style={styles.container}>

        <>
          <HomePage />
          <CodePage />
          <GeoPage />
          <AnatPage />
          <Newpage />

        </>

        <View style={styles.navbar}>
        

          <TouchableHighlight 
              style={styles.buttonWrapper}
              onPress={this.handleNewSetDisplay}
              underlayColor="#FFFFFF"
          >

            <View style={styles.addButtonWrapper}> 
              <View style={styles.homebutton}>

              </View>                                
              <Text style={styles.text}>
                + 
              </Text>   
            </View>
  
          </TouchableHighlight>


          <TouchableHighlight 
              style={styles.buttonWrapper}
              onPress={this.handleNewSetDisplay}
              underlayColor="#FFFFFF"
          >

          <View style={styles.libraryButton}>
              <View style={styles.library}>
                  *
              </View>

              <Text style={styles.yourLibrary}>
                Your Collection
              </Text>

           </View>

          </TouchableHighlight>



        </View>

      </View>
    );
  };
}