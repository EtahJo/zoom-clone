import React,{useState} from 'react';
import {View, Text, TextInput,StyleSheet,TouchableOpacity} from "react-native";

function StartMeeting({name,setName,setRoomId,roomId,joinRoom}) {
  
    return (
        <View>
             <View style={styles.startMeetingContainer}>
                <View style={styles.info}>
                    <TextInput
                        style={styles.textInput}
                        value={name}
                        placeholder='Enter Name'
                        placeholderTextColor="#767476"
                        onChangeText={text => setName(text)}
                    />
                </View>
                <View style={styles.info}>
                <TextInput
                        style={styles.textInput}
                        value={roomId}
                        placeholder='Enter Room ID'
                        placeholderTextColor="#767476"
                        onChangeText={text => setRoomId(text)}
                    />
                </View>
                <View style={{alignItems:"center"}}>
                    <TouchableOpacity
                    onPress={()=>joinRoom()}
                    style={styles.startMeetingButton}
                    >
                    <Text style={{color:"white", fontWeight:"bold"}}>Start Meeting</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default StartMeeting
const styles = StyleSheet.create({
    startMeetingContainer:{

    },
    info:{
       width: "100%",
       backgroundColor:"#373538",
       height: 50,
       borderTopWidth:1,
       borderBottomWidth:1,
       borderColor:"#484648",
       padding: 12,
      justifyContent:"center"
    },
    textInput:{
       color: "white",
       fontSize:18,

    },
    startMeetingButton:{
        width: 350,
        height: 50,
        marginTop:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#0470DC",
        borderRadius:15,
        

    }
})
