import React from 'react';
import {View,SafeAreaView, StyleSheet} from "react-native"
import ContactMenu from '../components/ContactMenu';
import Header from '../components/Header';
import MenuButtons from '../components/MenuButtons';
import Searchbar from '../components/Searchbar';

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{height:'100%'}}>
            <Header/>
            <Searchbar/>
            <MenuButtons
            navigation={navigation}
            />
            <ContactMenu/>
            </SafeAreaView>
        </View>
    )
}

export default Home
const styles = StyleSheet.create({
container:{
        backgroundColor:"#1c1c1c",
        padding: 15,

}
})
