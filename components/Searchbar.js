import React from 'react';
import {View, Text,StyleSheet} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";


function Searchbar() {
    return (
        <View style={styles.container}>
           <Fontisto
           name='search'
           size={20}
           color={"#858585"}
           />
           <Text style={styles.textSearchbar}>Search</Text>
        </View>
    )
}

export default Searchbar
const styles= StyleSheet.create({
    container:{
        backgroundColor:"#333333",
        flexDirection:"row",
        paddingHorizontal:10,
        height: 40,
        alignItems:"center",
        borderRadius:20,
    },
    textSearchbar:{
        color: "#858585",
        paddingLeft:10,
        fontSize:20

    }
})
