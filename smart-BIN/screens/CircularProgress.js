import React, {Component, useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, Modal, StyleSheet, FlatList, Alert, ScrollView, Image} from 'react-native';
import AnimatedProgressWheel from '../utils/AnimatedProgressWheel';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import { HeaderTitle } from '@react-navigation/stack';
import { logout } from '../components/Firebase/firebase';
import firebase from 'firebase'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        //{id:1,  title: "Upload",      color:"#99D492", image:"https://img.icons8.com/office/70/000000/camera--v2.png"},
        {id:4,  title: "Map",   color:"#8089BC", image:"https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-map-infographic-elements-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"} ,
        {id:8,  title: "Tutorial",    color:"#20B2AA", image:"https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/70/000000/external-video-tutorial-online-learning-kiranshastry-lineal-color-kiranshastry.png"} ,
        {id:2,  title: "Supporters",     color:"#87CEEB", image:"https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/70/000000/external-donation-charity-kiranshastry-lineal-color-kiranshastry.png"},
        {id:3,  title: "Winners",     color:"#4796B4", image:"https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-competition-teamwork-wanicon-lineal-color-wanicon.png"} ,
        
        //{id:5,  title: "Info",  color:"#DE98F6", image:"https://img.icons8.com/bubbles/70/000000/information.png"} ,
        //{id:6,  title: "Report",   color:"#F1758F", image:"https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/70/000000/external-error-internet-security-vitaliy-gorbachev-flat-vitaly-gorbachev.png"} ,
        
        //{id:9, title: "EXPO", color:"#0f2151", image:"https://img.icons8.com/fluency/100/000000/exhibition.png"} ,
        {id:7,  title: "Sign out",   color:"#FFC066", image:"https://img.icons8.com/color-glass/70/000000/export.png"} ,
        
        
        //{id:10, title: "Game",     color:"#008080", image:"https://img.icons8.com/color/70/000000/basketball.png"} ,
      ],
      
    };
  }

  

  
  clickEventListener(item) {
    const {navigate} = this.props.navigation;

    //<Modalize ref={modalizeRef}>...your content</Modalize>
    switch(item.id){
        case 1:
            //Alert.alert('Message', 'Item clicked. '+item.id);
            navigate('Add');
            //this.setCount()
            //this.setNewval()
            break;
        case 2:
            //Alert.alert('Message', 'Item clicked. '+item.id);
            navigate('Thanks for the support!')
            break;
        case 3:
            //Alert.alert('Message', 'Item clicked. '+item.id);
            navigate('Info')
            break;
        case 4:
            //Alert.alert('Message', 'Item clicked. '+item.id);
            navigate('Where you can find us')
            break;
        case 5:
            //Alert.alert('Message', 'Item clicked. '+item.id);
            navigate('Information')
            break;
        case 6:
            //Alert.alert('Message', 'Item clicked. '+item.id);
            
            break;
        case 7:
            logout();
            break;
        case 8:
            //Alert.alert('Message', 'Item clicked. '+item.id);
            //this.displayModal1(!this.state.isVisible)
            navigate('tut')
            break;
        case 9:
            navigate('Planet Budapest')
            break;

        default:
            Alert.alert("Unexpected Error");

    }
  }
  
/*
  <TouchableOpacity style={{ width: 150, height: 150, marginBottom: 60 }} onPress={() => {navigate('Add');}}>
  <Image
    style={{ width: 150, height: 150, marginBottom: 15 }}
    source={require("/Users/kalolevente/Downloads/smartBIN/assets/kuka.png")}
  />
</TouchableOpacity>

<TouchableOpacity style={{ width: 150, height: 150, marginBottom: 60 }} onPress={() => {navigate('Add');}}>
                      <Image
                        style={{ width: 150, height: 150, marginBottom: 15 }}
                        source={require("/Users/kalolevente/Downloads/smartBIN/assets/kuka.png")}
                      />
                    </TouchableOpacity>
*/



  render() {

    const {navigate} = this.props.navigation;
    const { count } = this.state;


    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}>

          <TouchableOpacity style={{ width: 150, height: 150, marginBottom: 60, alignContent: "center", alignSelf: "center", alignItems: "center" }} onPress={() => {navigate('Add');}}>
            <View style={styles.cardin}>
              
            </View>
          </TouchableOpacity>


          <View style={styles.cardfirst} paddingVertical={20} >  
          <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <View>

                <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.clickEventListener(item)}}>
                  <Image style={styles.cardImage} source={{uri:item.image}}/>
                  
                </TouchableOpacity>

                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={[styles.title, {color:item.color}]}>{item.title.toString()}</Text>
                  </View>
                </View>
                
                
              </View>

              
            )
          }}/>
          

                
          
      </View>


            
            
          
          </View>
        
        
       
        
        
      </View>

        
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:2,
    marginTop:0,
    backgroundColor:'#1D9A6C',
    borderRadius:20,
  },
  cardfirst: {
    shadowColor: '#00495E',
    width: 330,
    height: 390,
    alignContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.3,
    elevation: 8,
    backgroundColor: '#EBFAF7',
    padding: 10,
    borderRadius: 20
  },
  cardin: {
    shadowColor: '#91B5C6',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: '#123456',
    borderRadius: 100
  },
  cardtext: {
    shadowColor: 'black',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: 250,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    borderRadius: 15
  },
  logutbutton: {
    flex: 1,
    backgroundColor:"#123456"
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#EBFAF7",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00495E',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.0,
    shadowRadius: 6,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 30,
    backgroundColor:"#e2e2e2",
    //flexBasis: '42%',
    width:80,
    height:80,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center'
  },
  cardHeader: {
    paddingTop: 1,
    paddingBottom: 30,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 55,
    width: 55,
    alignSelf:'center'
  },
  title:{
    fontSize:24,
    flex:1,
    alignSelf:'center',
    fontWeight:'bold'
  },
});


export default App;