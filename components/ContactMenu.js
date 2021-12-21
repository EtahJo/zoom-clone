import React from 'react';
import {View, Text, StyleSheet,Image} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

function ContactMenu() {
    const contactMenuButtons=[
        {
            type:"starred",
            name:'Starred'

        },
        {
            type:"contact",
            name:"Etah",
            photo: require("../assets/etah.jpg")
        },
        {
            type:"contact",
            name:"Jovi",
            photo: require("../assets/jovi.jpg")
        },
        {
            type:"contact",
            name:"Stanley Enow",
            photo: require("../assets/stanley.jpg")
        },
        {
            type:"contact",
            name:"Tenor",
            photo: require("../assets/tenor.jpg")
        },
    ]
    return (
        <View style={styles.container}>
            {contactMenuButtons.map((item,index)=>
            <View 
            key={index}
            style={styles.row}>
                {item.type=="starred"?
                  (<View style={styles.starredIcon}>
                  <AntDesign
                   name='star'
                   size={30}
                   color="#efefef"
                  />
              </View> ):(
                  <Image source={item.photo}
                  style={styles.image}
                  />
              )
            
            }
              
                <Text style={styles.text}>
                        {item.name}
                </Text>
            </View>
            )}
        </View>
    )
}

export default ContactMenu
 const styles = StyleSheet.create({
 container:{

 },
 text:{
    color:'white',
    paddingLeft:15,
    fontSize:18,
 },
 row:{
    flexDirection:"row",
    marginTop:20,
    alignItems:"center"

   
   
 },
 starredIcon:{
    backgroundColor:"#333333",
    width: 55,
    height: 55,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20
 },
 image:{
        width: 55,
        height: 55,
        borderRadius:20,
        
 },


 })