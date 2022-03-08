import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const ForgotPassword = () => {
    const [EmailAddress, setEmailAddress] = useState("");
    const [Error, setError] = useState(true);
    return (
        <ScrollView style={{ paddingLeft: 20, paddingRight: 20, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, }}>
                <Text style={{ width: '100%', textAlign: 'center', alignItems: 'center', fontSize: 18, fontWeight: 'bold' }}>Forgot Password</Text>
                <TouchableOpacity style={{ position: 'absolute', marginLeft: 10, }}
                    onPress={() => { }}
                >
                    <MaterialIcons name='arrow-back-ios' size={24} />
                </TouchableOpacity>
            </View>
            <Text style={{ padding: 15, fontSize: 16, marginTop: 20, marginBottom: 20 }}>
                Enter the email associated with your account
                and we'll send an email with instructions to
                reset your password.
            </Text>
            <View style={{ marginTop: 13, marginBottom: 13 }}>
                <TextInput
                    placeholder='Your email address'
                    placeholderTextColor={'gray'}
                    value={EmailAddress}
                    onChangeText={(e) => setEmailAddress(e)}
                    style={[{
                        width: '100%', borderWidth: 1, borderColor: 'rgb(200,200,200)', fontSize: 16, paddingLeft: 20,
                        paddingRight: 20, borderRadius: 20, height: 40
                    }, EmailAddress === "" ? { backgroundColor: 'rgb(220,220,220)', borderColor: 'rgb(220,220,220)' } : {}]} />
            </View>
            <Text style={{paddingLeft:15,marginTop:10,marginBottom:10,color:'red'}}>Email address doesnt exist</Text>
            <View style={{ marginTop: 20, marginBottom: 13 }}>
                <TouchableOpacity
                    style={[{
                        width: '100%', borderWidth: 1, borderColor: 'red', alignItems: 'center', justifyContent: 'center', fontSize: 16, paddingLeft: 20,
                        paddingRight: 20, borderRadius: 20, height: 40
                    }]} ><Text style={{ color: 'red' }}>SEND INSTRUCTIONS</Text></TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({})