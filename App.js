import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native';
import { backgroundColor, color, transform } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

  let count=0;
  const image = { uri: "https://wallpapercave.com/wp/wp6476345.png" };
  
  export default class App extends Component{
 
    state = {
      TextHolder:count
    }
    
    render() {
      return(
        <View style={styles.Container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Counter App</Text>
            
            <View style={styles.counterResult}>
                <Text style={{  textAlign:'center',color:'black',fontSize: 100, alignItems:'center' }}> {this.state.TextHolder} </Text>
            </View>
            

              <TouchableOpacity onPress={this.Increment}>
                  <View style={styles.buttonView}>
                     <Text style={{fontSize:20}}> INCREMENT </Text>
                  </View>
              </TouchableOpacity>
              <Text> </Text>

              <TouchableHighlight onPress={this.Decrement}>
                  <View style={styles.buttonView}>
                     <Text style={{fontSize:20}}> DECREMENT </Text>
                  </View>
              </TouchableHighlight>
              <Text> </Text>

              <TouchableOpacity onPress={this.Clear}>
                  <View style={styles.buttonView}>
                     <Text style={{fontSize:20}}> CLEAR </Text>
                  </View>
              </TouchableOpacity>

        
          </ImageBackground>
          

          <View>
              <Text style={{ color:'white',backgroundColor: '#00000cc0',textAlign: 'center' }}>Designed by Samba Siva Sai D: 20MIS1189</Text>
            
          </View>

        </View>

        );
    }
    

    Increment =()=> {
      this.setState({
          TextHolder: count++
        })
    };

    Decrement =()=> {
      this.setState({
        TextHolder: count-- 
      })
    };
    
    Clear =()=> {
      this.setState({
        TextHolder: 0
      })
    };
     
    
  };
     
   
  const styles = StyleSheet.create(
  {
   
  Container:
  {
    justifyContent: 'center',
    flex:1,
    backgroundColor: 'white',
    flexDirection:"column"
  },

  image: {
    flex: 1,
    justifyContent: "center",
    color:'#000000c0'
  },

  counterResult:{
    margin:40,
    borderRadius:20,
    borderColor: 'grey',
    borderWidth:5,
    textAlign:'center'
  },
  
  text: {
    color: "white",
    fontSize: 40,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    textTransform:"uppercase"
  },

  buttonView: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 20,
    marginTop:5,
    marginLeft:30,
    marginRight:30,
    borderRadius:20

  }
   
  });
