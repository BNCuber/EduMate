import React, { Component } from 'react';
import HomePage from './HomePage';
import JavaPage from './JavaPage';
import GeoPage from './GeoPage';
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