import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Image, Alert } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Ionicons } from "@expo/vector-icons";
import Fire from "../utils/Fire";
import { getDatabase, ref, set } from 'firebase/database';
import * as ImagePicker from "expo-image-picker";
import { ProgressDialog } from 'react-native-simple-dialogs';
import AnimatedProgressWheel from '../utils/AnimatedProgressWheel';

const firebase = require("firebase");
require("firebase/firestore");




export default class PostScreen extends React.Component {
    state = {
        text: "",
        image: null,
        count: 0
    };

    

    

    setCount = () => this.setState(
        prevState => ({ ...prevState, count: this.state.count + 1 })
    
    
      )
      
    
      setNewval = () => {
        const newVal = this.state.count;
        this.setState({progress: newVal});
        this.circleProgress.animateTo(newVal);
      };

    openProgress = () => {
        this.setState({ showProgress: true });

        setTimeout(
            () => {
                this.setState({ showProgress: false });
            },
            8000,
        );
    }

    componentDidMount() {
        this.getPhotoPermission();
    }

    getPhotoPermission = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);

            if (status != "granted") {
                alert("We need permission to use your camera roll if you'd like to include a photo.");
            }
        }
    };

    handlePost = () => {
        Fire.shared
            .addPost({ text: this.state.text.trim(), localUri: this.state.image })
            .then(ref => {
                this.setState({ text: "", image: null });
                //storeHighScore();
                this.props.navigation.goBack()
                
            })
            .catch(error => {
                alert(error);
            });

            //Alert.alert('Uploaded succesfully!')
            this.openProgress();

            
    };
    

    pickImage = async () => {
        
        
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3]
        });
/*
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
        */
        if(result.cancelled === false){
          this.setState({ image: result.uri });
          this.handlePost();
          this.setCount();
          this.setNewval();
        }
    };

    /*
  <View alignItems={"center"} paddingVertical={50} paddingHorizontal={10}>

                </View>

                <View alignItems={"center"} paddingVertical={30} paddingHorizontal={10}></View>

                <TouchableOpacity style={styles.button} onPress={this.pickImage}>
                    
                    <View style={styles.buttonka}>
                    <Image style={{ width: 200, height: 150, marginBottom: 15}}
              source={require("/Users/kalolevente/Downloads/smartBIN/assets/clipart.png")}></Image>
                    </View>
                </TouchableOpacity>

                
    
    */

    render() {
        const { count } = this.state;

        return (
            <SafeAreaView style={styles.container}>

                <View style={{padding: 80}}></View>

                <AnimatedProgressWheel
                                            duration={300}
                                            ref={ref => (this.circleProgress = ref)}
                                            size={200}
                                            progress={250}
                                            animateFromValue={0}
                                            width={30}
                                            color={'#123456'}
                                            fullColor={'#55E25E'}
                                    />

                        <Text style={{padding: 30, fontSize: 40, color: '#123456', fontWeight: 'bold'}}>
                                    {count} Points
                                </Text>


                                <TouchableOpacity style={styles.button} onPress={this.pickImage}>
                                        <Text>Upload</Text>
                                    </TouchableOpacity>
                
           

                <ProgressDialog
                    title="Uploading Photo"
                    activityIndicatorColor="blue"
                    activityIndicatorSize="large"
                    animationType="slide"
                    message="Please, wait..."
                    visible={this.state.showProgress}
                />
            
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        alignItems: "center",
        backgroundColor: "#fff"
    },
    button: {
    display: 'flex',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    backgroundColor: '#92D3BF',
    shadowColor: '#123456',
    shadowOpacity: 0.2,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 12,
  },
  buttonka: {
    display: 'flex',
    height: 20,
    borderRadius: 250,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    backgroundColor: '#92D3BF',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { 
      height: 15, 
      width: 0 
    },
    shadowRadius: 8,
  },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#D8D9DB"
    },
    inputContainer: {
        margin: 32,
        flexDirection: "row"
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 24,
        marginRight: 16
    },
    photo: {
        alignItems: "center",
        alignContent: 'center',
        marginHorizontal: 32,
        paddingTop: 200
    }
});
