import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";



function Header() {
    return (
        <View style={styles.container}>
            <Entypo
            name='notification'
            size={30}
            color="white"
            />
            <Text style={styles.heading}>Meet & Chat</Text>
            <Entypo
            name='new-message'
            size={30}
            color="white"
            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:20,
        paddingHorizontal:10,
    },
    heading:{
        color: "white",
        fontSize:20,
        fontWeight:"700",
    }
    
})