import React, { Component } from 'react';
import HomePage from './HomePage';
import JavaPage from './JavaPage';
import GeoPage from './GeoPage';
import styles from './styles';


export default class App extends Component {
    state = {
      homePageDisplay:'block ',
      anatPageDisplay:'none',
      geoPageDisplay:'none',
      codePageDisplay:'none',
      newPageDisplay:'none',
    }

    handleHomePageDisplay = () => {
      this.setState({
        homePageDisplay:'block ',
        anatPageDisplay:'none',
        geoPageDisplay:'none',
        codePageDisplay:'none',
        newPageDisplay:'none',
      })
    }

    handleAnatPageDisplay = () => {
      this.setState({
        homePageDisplay:'none',
        anatPageDisplay:'block',
        geoPageDisplay:'none',
        codePageDisplay:'none',
        newPageDisplay:'none',
      })
    }

    handleGeoPageDisplay = () => {
      this.setState({
        homePageDisplay:'none',
        anatPageDisplay:'none',
        geoPageDisplay:'block',
        codePageDisplay:'none',
        newPageDisplay:'none',
      })
    }
    handleCodePageDisplay = () => {
      this.setState({
        homePageDisplay:'none',
        anatPageDisplay:'none',
        geoPageDisplay:'none',
        codePageDisplay:'block',
        newPageDisplay:'none',
      })
    }
    handleNewPageDisplay = () => {
      this.setState({
        homePageDisplay:'none',
        anatPageDisplay:'none',
        geoPageDisplay:'none',
        codePageDisplay:'none',
        newPageDisplay:'block',
      })
    }

  
  render() {
    return (
      
      <View style={styles.container}>
        <>
          <View style = {{display:this.state.homePageDisplay}}>
              <HomePage />
          </View>

          <View style = {{display:this.state.codePageDisplay}}>
              <CodePage />
          </View>

          <View style = {{display:this.state.geoPageDisplay}}>
              <GeoPage />
          </View>

          <View style = {{display:this.state.anatPageDisplay}}>
              <Anat />
          </View>

          <View style = {{display:this.state.newPageDisplay}}>
              <NewPage />
          </View>
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