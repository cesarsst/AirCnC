import React, { useState , useEffect } from 'react';
import { SafeAreaView, ScrollView ,StyleSheet, Image, Text, AsyncStorage } from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

export default function List(){
    
    const [techs, setTechs] = useState([]);
    
    useEffect(()=>{
        AsyncStorage.getItem('techs').then(storegedTechs =>{
            const techsArray = storegedTechs.split(',').map(tech => tech.trim());
            setTechs(techsArray);
        });
    }, [])

    
    return(
        <SafeAreaView style={style.container}>
            <Image style={style.logo} source={logo} />

            <ScrollView>
             {techs.map(tech =>  <SpotList key={tech} tech={tech}/>)}
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    logo:{
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    }
})
