import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';

export default class Craigslist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      userSelected:[],
      data: [
        {id:1,  name: "Alba Fehárvár",   image:"https://img.icons8.com/clouds/100/000000/groups.png",           count:124.711},
        {id:2,  name: "Pont Velem",    image:"https://img.icons8.com/color/100/000000/real-estate.png",       count:234.722},
        {id:3,  name: "Nemzeti Színház",       image:"https://img.icons8.com/color/100/000000/find-matching-job.png", count:324.723} ,
        {id:4,  name: "Értékmentők",   image:"https://img.icons8.com/clouds/100/000000/employee-card.png",    count:154.573} ,
        {id:5,  name: "McDonalds",   image:"https://img.icons8.com/color/100/000000/land-sales.png",        count:124.678} ,
        {id:6,  name: "Büki Gyógyfürdő",       image:"https://img.icons8.com/color/100/000000/find-matching-job.png", count:324.723} ,
        {id:7,  name: "Székesfehérvár önkormányzata",   image:"https://img.icons8.com/clouds/100/000000/employee-card.png",    count:154.573} ,
        {id:8,  name: "Magyarország Kormánya",   image:"https://img.icons8.com/color/100/000000/land-sales.png",        count:124.678} ,
      ]
    };
  }

  clickEventListener = (item) => {
    Alert.alert('Message', 'Item clicked. '+item.name);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id.toString();
          }}
          renderItem={({item}) => {
          return (
            <View style={styles.card} onPress={() => {this.clickEventListener(item)}}>
              
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name.toString()}</Text>
              </View>
            </View>
          )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:0,
    backgroundColor:"#ebf0f7"
  },
  contentList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000021',
    alignContent: 'center',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 20,
    flexDirection:'column',
    borderRadius:20,
  },

  name:{
    fontSize:24,
    flex:1,
    alignSelf:'center',
    color:"#3399ff",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
  },
  followButtonText:{
    color: "#dcdcdc",
    fontSize:12,
  },
}); 