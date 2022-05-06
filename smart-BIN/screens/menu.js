import { NavigationContainer } from '@react-navigation/native';
import React, { useRef, useState, useEffect } from 'react';
import useStatusBar from '../hooks/useStatusBar';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../components/Firebase/firebase';
import { createStackNavigator} from '@react-navigation/stack';
import SupporterScreen from '../screens/SupportersScreen';
import { Modalize } from 'react-native-modalize';
import * as ImagePicker from 'expo-image-picker';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  Alert,
  Modal,
  ScrollView,
  FlatList,
} from 'react-native';


export default class menu extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1,  title: "Upload",      color:"#99D492", image:"https://img.icons8.com/office/70/000000/camera--v2.png"},
        {id:2,  title: "Supporters",     color:"#87CEEB", image:"https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/70/000000/external-donation-charity-kiranshastry-lineal-color-kiranshastry.png"},
        {id:3,  title: "Winners",     color:"#4682B4", image:"https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-competition-teamwork-wanicon-lineal-color-wanicon.png"} ,
        {id:4,  title: "Map",   color:"#8089BC", image:"https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-map-infographic-elements-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"} ,
        {id:5,  title: "Info",  color:"#DE98F6", image:"https://img.icons8.com/bubbles/70/000000/information.png"} ,
        {id:6,  title: "Report",   color:"#F1758F", image:"https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/70/000000/external-error-internet-security-vitaliy-gorbachev-flat-vitaly-gorbachev.png"} ,
        {id:7,  title: "Sign out",   color:"#FFC066", image:"https://img.icons8.com/color-glass/70/000000/export.png"} ,
        {id:8,  title: "Tutorial",    color:"#20B2AA", image:"https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/70/000000/external-video-tutorial-online-learning-kiranshastry-lineal-color-kiranshastry.png"} ,
        //{id:9,  title: "Remember", color:"#191970", image:"https://img.icons8.com/color/70/000000/to-do.png"} ,
        //{id:10, title: "Game",     color:"#008080", image:"https://img.icons8.com/color/70/000000/basketball.png"} ,
      ]
    };
  }

  



  clickEventListener(item) {
    const {navigate} = this.props.navigation;


    //<Modalize ref={modalizeRef}>...your content</Modalize>
    switch(item.id){
        case 1:
            //Alert.alert('Message', 'Item clicked. '+item.id);
            navigate('Add')
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
            Alert.alert('Message', 'Item clicked. '+item.id);
            break;
        case 7:
            logout();
            break;
        case 8:
            Alert.alert('Message', 'Item clicked. '+item.id);
            break;

        default:
            Alert.alert("Unexpected Error");

    }
  }

  render() {

    

    //const {navigate} = this.props.navigation;
    return (

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
                    <Text style={[styles.title, {color:item.color}]}>{item.title}</Text>
                  </View>
                </View>
                
                
              </View>

              
            )
          }}/>
          

                
          
      </View>

      
    );
  }
}
  


const styles = StyleSheet.create({
    
  container:{
    flex:2,
    marginTop:0,
    backgroundColor:'#fff',
  },
  logutbutton: {
    flex: 1,
    backgroundColor:"#123456"
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#fff",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 30,
    backgroundColor:"#e2e2e2",
    //flexBasis: '42%',
    width:120,
    height:120,
    borderRadius:60,
    alignItems:'center',
    justifyContent:'center'
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
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
    height: 52,
    width: 52,
    alignSelf:'center'
  },
  title:{
    fontSize:24,
    flex:1,
    alignSelf:'center',
    fontWeight:'bold'
  },
});     