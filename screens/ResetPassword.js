import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image, Scr } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const ResetPassword = ({navigation}) => {
    const [NewPassword, setNewPassword] = useState("");
    const [ConfirmNewPassword, setConfirmNewPassword] = useState("");
    const [Error, setError] = useState(true);
    const [Error2, setError2] = useState(true);
    return (
        <ScrollView style={{ paddingLeft: 15, paddingRight: 20, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, }}>
                <Text style={{ width: '100%', textAlign: 'center', alignItems: 'center', fontSize: 18, fontWeight: 'bold' }}>Reset Password</Text>
                <TouchableOpacity style={{ position: 'absolute', marginLeft: 0, }}
                    onPress={() => navigation.goBack()}
                >
                    <MaterialIcons name='arrow-back-ios' size={24} />
                </TouchableOpacity>
            </View>
            <Text style={{ padding: 15, fontSize: 16, marginTop: 20, marginBottom: 20 }}>
                Your new password must be different from the prevous password
            </Text>
            <View style={{ marginTop: 13, marginBottom: 13 }}>
                <Text style={{ paddingLeft: 20, color: 'black', marginBottom: 5 }}>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder='Your New Password'
                    placeholderTextColor={'gray'}
                    value={NewPassword}
                    onChangeText={(e) => setNewPassword(e)}
                    style={[{
                        width: '100%', borderWidth: 1, borderColor: 'rgb(200,200,200)', fontSize: 16, paddingLeft: 20,
                        paddingRight: 20, borderRadius: 20, height: 40
                    }, NewPassword === "" ? { backgroundColor: 'rgb(220,220,220)', borderColor: 'rgb(220,220,220)' } : {}]} />
                {
                    Error &&
                    <Text style={{ paddingLeft: 20, color: 'gray', marginTop: 5 }}>Must be atleast 8 characters</Text>
                }
            </View>
            <View style={{ marginTop: 13, marginBottom: 13 }}>
                <Text style={{ paddingLeft: 20, color: 'black', marginBottom: 5 }}>Confirm Password</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder='Confirm your password'
                    placeholderTextColor={'gray'}
                    value={ConfirmNewPassword}
                    onChangeText={(e) => setConfirmNewPassword(e)}
                    style={[{
                        width: '100%', borderWidth: 1, borderColor: 'rgb(200,200,200)', fontSize: 16, paddingLeft: 20,
                        paddingRight: 20, borderRadius: 20, height: 40
                    }, ConfirmNewPassword === "" ? { backgroundColor: 'rgb(220,220,220)', borderColor: 'rgb(220,220,220)' } : {}]} />
                {
                    Error2 &&
                    <Text style={{ paddingLeft: 20, color: 'gray', marginTop: 5 }}>Both passwords must match</Text>
                }
            </View>
            <View style={{ marginTop: 20, marginBottom: 13 }}>
                <TouchableOpacity
                    onPress={() => {
                        if (NewPassword.length >= 8) {
                            setError(true)
                            if (NewPassword === ConfirmNewPassword) {
                                setError2(false)
                                navigation.navigate('Reset_password_thatsit');
                            } else {
                                setError2(true)
                            }
                        } else {
                            setError(false)
                        }
                    }}
                    style={[{
                        width: '100%', borderWidth: 1, borderColor: 'red', alignItems: 'center', justifyContent: 'center', fontSize: 16, paddingLeft: 20,
                        paddingRight: 20, borderRadius: 20, height: 40
                    }]} ><Text style={{ color: 'red' }}>RESET PASSWORD</Text></TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default ResetPassword

const styles = StyleSheet.create({})