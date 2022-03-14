import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image,Scr } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const Forgot_password_checkemail = ({navigation}) => {
    setTimeout(() => {
        navigation.navigate('ResetPassword')
    }, 4000);
    return (
        <View style={{ paddingLeft: 15, paddingRight: 20, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, }}>
                <Text style={{ width: '100%', textAlign: 'center', alignItems: 'center', fontSize: 18, fontWeight: 'bold' }}>Forgot Password</Text>
                <TouchableOpacity style={{ position: 'absolute', marginLeft: 0, }}
                    onPress={() => navigation.goBack()}
                >
                    <MaterialIcons name='arrow-back-ios' size={24} />
                </TouchableOpacity>
            </View>
            <View style={{
                height: '85%', width: '100%',
                justifyContent: 'center', alignItems: 'center'
            }}>
                <View style={{alignItems:'center',width:'60%'}}>
                    <Image source={require('../assets/check.png')} style={{
                        height: 70, width: 70,
                        borderRadius: 100
                    }} />
                    <Text style={{fontSize:16,marginTop:10}}>Check you email</Text>
                    <Text style={{fontSize:12,marginTop:10,textAlign:'center'}}>We've sent a password recovery instructions to your email.</Text>
                </View>
            </View>

        </View>
    )
}

export default Forgot_password_checkemail

const styles = StyleSheet.create({})





