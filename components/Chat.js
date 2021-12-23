import React, {useState} from 'react';
import {View,Text,StyleSheet, TextInput,SafeAreaView, TouchableOpacity} from "react-native";
import ChatHeader from './ChatHeader';
import FontAwesome from "react-native-vector-icons/FontAwesome";

function Chat({modalVisible, setModalVisible}) {
    const[messageText,setMessageText] = useState("")
    return (
        
        <View style={styles.container}>
            <SafeAreaView style={{height:"100%"}}>
            <ChatHeader
            setModalVisible={setModalVisible}
            />
            <View style={styles.chatMessages}>

            </View>
            <View style={styles.chatFormContainer}>
                <Text style={{color:"white"}}>Send to:Everyone</Text>
            </View>
            <View style={styles.chatForm}>
                <TextInput
                style={styles.textInput}
                placeholder='Tap here to chat'
                value={messageText}
                onChangeText={text=> setMessageText(text)}
                placeholderTextColor="#595859"
                />
                <TouchableOpacity>
                    <FontAwesome
                    name={'send'}
                    size={18}
                    color="#efefef"
                    />
                </TouchableOpacity>

                
            </View>
            </SafeAreaView>
        </View>
      
    )
}

export default Chat

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1c1c1c"
    },
    chatMessages:{

    },
    chatFormContainer:{
        borderColor:"#2f2f2f",
        borderTopWidth:1,
        padding:12,
    },
    textInput:{
        height: 40,
        color: "#efefef",
        borderColor:"#595859",
        borderWidth:1,
        borderRadius:10,
        padding: 10,
        marginTop:12,
    }
})