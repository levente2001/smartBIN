// App.js

import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  width,
  CustomSwitch,
  Modal
} from 'react-native';
import { color } from 'react-native-reanimated';
import SwitchSelector from "react-native-switch-selector";

const options = [
  { label: "Weekly", value: "W" },
  { label: "Monthly", value: "M" }
];

export default class App extends Component {

 
  // initial state
  state = {
    isVisible: true
  };

  // hide show modal
  displayModal1(show){
    this.setState({isVisible: show})
  }



  render() {
    return (
      <View style = { styles.container }>
        <Modal
            animationType = {"slide"}
            transparent={true}
            alignItems={'center'}
            alignContent={'center'}
            paddingTop={180}
            visible={this.state.isVisible}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

              <View style={{height: 400}}></View>

              <View style={styles.cardfirst} alignContent={'center'} alignItems={'center'} >
                <Text style = { styles.text }>
                    A heti nyertes: XY</Text>
                <Text style = { styles.texttext }>
                    Gratulálunk, hamarosan fel vesszük veled a kapcsolatot a nyereményed miatt.</Text>

                    <Text style={styles.closeText}
                      onPress={() => {
                      this.displayModal1(!this.state.isVisible);}
                      }> Close</Text>
              </View>
              
          </Modal>

          

          <SwitchSelector
            options={options}
            onPress={() => {
            this.displayModal1(!this.state.isVisible);}}
            initial={0}
            hasPadding
            paddingValue={60}
            height={40}
            buttonMargin={5}
          />

          

          

          
          
        </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "#EBEFEF",
    alignItems: 'center',
    alignContent: 'center'
  },
  cardfirst: {
    shadowColor: '#00495E',
    width: '100%',
    height: 500,
    alignContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.3,
    elevation: 8,
    backgroundColor: '#123456',
    padding: 10,
    borderRadius: 20,
  },
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  closeButton: {
    display: 'flex',
    height: 30,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3974',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold'
  },
  image: {
    marginTop: 180,
    width: '100%',
    height: 350,
  },
  text: {
    fontSize: 30,
    padding: 20,
    paddingTop: 20,
    color: "#fff",
    backgroundColor: '#123456',
    fontWeight: 'bold'
  },
  texttext: {
    fontSize: 24,
    padding: 20,
    paddingTop: 20,
    color: "#fff",
    textAlign: 'justify',
    backgroundColor: '#123456',
    fontWeight: 'bold'
  },
  closeText: {
    fontSize: 24,
    color: '#fff',
    padding: 20,
    marginBottom: 20,
    paddingTop: 140,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#123456'
  }
});