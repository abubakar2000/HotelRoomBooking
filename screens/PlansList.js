import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { Entypo, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const PlansList = ({ navigation }) => {
    const { height, width } = Dimensions.get('screen');
    const [ShowModal, setShowModal] = useState(false);
    const [MembershipFamilyCode, setMembershipFamilyCode] = useState("")
    const [MemberShipFamilyCodeError, setMemberShipFamilyCodeError] = useState(true);

    return (

        <ScrollView style={styles.container}>
            <Modal
                animationType='slide'
                visible={ShowModal}
                transparent={true}
                onRequestClose={() => {
                    Alert.alert("Modal closed")
                    setShowModal(false)
                }}
            >
                <View style={{
                    position: 'absolute', justifyContent: 'center', alignItems: 'center',
                    height: height, width: width, padding: 16
                }}>
                    <View style={{
                        width: '100%', backgroundColor: 'white',
                        shadowColor: 'rgb(160,160,160)', shadowOpacity: 0.7, shadowRadius: 10, shadowOffset: {
                            height: 10, width: 0
                        }, borderRadius: 10
                    }}>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'flex-end', padding: 15 }}>
                            <MaterialCommunityIcons name='close' size={28} onPress={() => {
                                setShowModal(false)
                            }} />
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 20 }}>Membership Family Code</Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TextInput
                                placeholder='XXXX-XXXX-XXXX-XXXX'
                                placeholderTextColor={'rgb(130,130,130)'}
                                value={MembershipFamilyCode}
                                onChangeText={text => setMembershipFamilyCode(text)}
                                style={{
                                    width: '80%', backgroundColor: 'rgb(245,245,245)', height: 40,
                                    borderRadius: 20, paddingLeft: 20, paddingRight: 20, textAlign: 'center'
                                    , marginBottom: 5,
                                }} />
                        </View>
                        {
                            MemberShipFamilyCodeError === true &&
                            <Text style={{
                                textAlign: 'center', color: 'gray', marginTop: 20,
                                marginBottom: 20
                            }}><Text style={{ color: 'red' }}>Incorrect code </Text> Please try again.</Text>
                        }
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                            <TouchableOpacity onPress={() => {
                                setMemberShipFamilyCodeError(MembershipFamilyCode === "" ? true : false)
                            }} style={{
                                justifyContent: 'center', alignItems: 'center', backgroundColor: '#FB444B',
                                width: '80%', height: 40, borderRadius: 20, marginBottom: 30
                            }}>
                                <Text style={{ color: 'white', fontSize: 15, }}
                                >ADD FAMILY</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={{ position: "absolute", left: 15 }}>
                    <MaterialIcons name='arrow-back-ios'  size={22} />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, textAlign: 'center' }}>Choose your membership</Text>
            </View>
            <View style={{ alignItems: 'center', }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                    Claim your <Text style={{ color: 'red' }}>Free Month</Text>
                </Text>
            </View>
            <View>
                <View style={{
                    justifyContent: 'center', alignItems: 'center',
                    padding: 20,
                    margin: 20, borderRadius: 10, paddingTop: 30,
                    shadowColor: 'gray',
                    shadowOffset: {
                        width: 2,
                        height: 2
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    elevation: 10,
                    backgroundColor: 'white'
                }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}>Silver Membership</Text>
                    <Text style={{ paddingTop: 5, paddingBottom: 5, }}>Hotel stays up tp 40 nights</Text>
                    <View style={{ borderWidth: 0.5, borderColor: 'rgb(230,230,230)', width: '70%', margin: 5 }}></View>
                    <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Valid on any 5 hotels</Text>
                    <View style={{ borderWidth: 0.5, borderColor: 'rgb(230,230,230)', width: '70%', margin: 5 }}></View>
                    <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Family access upto 3 accounts</Text>
                    <View style={{ borderWidth: 0.5, borderColor: 'rgb(230,230,230)', width: '70%', margin: 5 }}></View>
                    <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Benefits worth of ₹50000</Text>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'rgb(255,72,72)',
                            width: '100%', borderRadius: 10, padding: 10,
                            alignItems: 'center', justifyContent: 'center',
                            marginTop: 10
                        }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', padding: 5 }}>Become a Member</Text>
                        <Text style={{ color: 'white', margin: 5 }}>at ₹2999 for 2 years</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    justifyContent: 'center', alignItems: 'center',
                    padding: 20,
                    margin: 20, borderRadius: 10, paddingTop: 30,
                    shadowColor: 'gray',
                    shadowOffset: {
                        width: 2,
                        height: 2
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    elevation: 10,
                    backgroundColor: 'white'
                }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}><Text style={{ color: 'rgb(216, 160, 7)' }}>Gold</Text> Membership</Text>
                    <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Hotel stays up tp 40 nights</Text>
                    <View style={{ borderWidth: 0.5, borderColor: 'rgb(230,230,230)', width: '70%', margin: 5 }}></View>
                    <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Valid on any 5 hotels</Text>
                    <View style={{ borderWidth: 0.5, borderColor: 'rgb(230,230,230)', width: '70%', margin: 5 }}></View>
                    <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Family access upto 3 accounts</Text>
                    <View style={{ borderWidth: 0.5, borderColor: 'rgb(230,230,230)', width: '70%', margin: 5 }}></View>
                    <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Benefits worth of ₹50000</Text>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'rgb(216, 160, 7)',
                            width: '100%', borderRadius: 10, padding: 10,
                            alignItems: 'center', justifyContent: 'center',
                            marginTop: 10
                        }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', padding: 5 }}>Become a Member</Text>
                        <Text style={{ color: 'white', margin: 5 }}>at ₹2999 for 2 years</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 20 }}>
                <Text style={{ fontSize: 16, }}>Have a family code?</Text>
                <Text onPress={() => {
                    setShowModal(true)
                }} style={{ color: 'red', textDecorationLine: 'underline', fontSize: 16, marginTop: 10, marginBottom: 200 }}>Apply it here</Text>
            </View>
        </ScrollView>

    )
}

export default PlansList

const styles = StyleSheet.create({})