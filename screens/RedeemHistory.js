import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import profilePicture from '../assets/10.jpg';
import randLogo from '../assets/adaptive-icon.png';

const RedeemHistory = () => {
    return (
        <ScrollView style={{paddingLeft:20,paddingRight:20,}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, }}>
                <Text style={{ width: '100%', textAlign: 'center', alignItems: 'center', fontSize: 18, fontWeight: 'bold' }}>Redeem History</Text>
                <TouchableOpacity style={{ position: 'absolute', marginLeft: 10, }}
                    onPress={() => { }}
                >
                    <MaterialIcons name='arrow-back-ios' size={24} />
                </TouchableOpacity>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
                <Image source={profilePicture} style={{width:110,height:110,borderRadius:55}} />
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={{textAlign:'center',fontSize:18,fontWeight:'600',marginTop:20,marginBottom:10}}>
                Nirmiti Gaitonde
                </Text>
                <Text style={{textAlign:'center',fontSize:16}}>
                    <Text style={{color:'#F3B038'}}>Gold</Text> Member
                </Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'center'}}>
            <View style={{borderWidth:0.5,borderColor:'rgb(220,220,220)',marginTop:30,marginBottom:20,width:'85%'}}></View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:5,marginBottom:5}}>
                <View style={{flex:1}}>
                    <Image source={randLogo} style={{height:60,width:60,borderRadius:30,backgroundColor:'red'}} />
                </View>
                <View style={{padding:15,flex:4}}>
                    <Text style={{fontWeight:'600',marginBottom:3}}>Flat 35 % OFF On All Orders</Text>
                    <Text style={{color:'gray',marginTop:3}}>24 Febraury 2022</Text>
                </View>
                <View>
                    <MaterialIcons name='navigate-next' size={25} style={{color:'gray'}}/>
                </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:5,marginBottom:5}}>
                <View style={{flex:1}}>
                    <Image source={randLogo} style={{height:60,width:60,borderRadius:30,backgroundColor:'red'}} />
                </View>
                <View style={{padding:15,flex:4}}>
                    <Text style={{fontWeight:'600',marginBottom:3}}>Flat 35 % OFF On All Orders</Text>
                    <Text style={{color:'gray',marginTop:3}}>24 Febraury 2022</Text>
                </View>
                <View>
                    <MaterialIcons name='navigate-next' size={25} style={{color:'gray'}}/>
                </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:5,marginBottom:5}}>
                <View style={{flex:1}}>
                    <Image source={randLogo} style={{height:60,width:60,borderRadius:30,backgroundColor:'red'}} />
                </View>
                <View style={{padding:15,flex:4}}>
                    <Text style={{fontWeight:'600',marginBottom:3}}>Flat 35 % OFF On All Orders</Text>
                    <Text style={{color:'gray',marginTop:3}}>24 Febraury 2022</Text>
                </View>
                <View>
                    <MaterialIcons name='navigate-next' size={25} style={{color:'gray'}}/>
                </View>
            </View>
        </ScrollView>
    )
}

export default RedeemHistory

const styles = StyleSheet.create({})