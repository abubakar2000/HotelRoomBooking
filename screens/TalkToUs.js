import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const TalkToUs = () => {
    const [Name, setName] = useState("");
    const [MobileNo, setMobileNo] = useState("");
    const [YourConcern, setYourConcern] = useState("")
    return (
        <ScrollView style={{ paddingLeft: 20, paddingRight: 20, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, }}>
                <Text style={{ width: '100%', textAlign: 'center', alignItems: 'center', fontSize: 18, fontWeight: 'bold' }}>Redeem History</Text>
                <TouchableOpacity style={{ position: 'absolute', marginLeft: 10, }}
                    onPress={() => { }}
                >
                    <MaterialIcons name='arrow-back-ios' size={24} />
                </TouchableOpacity>
            </View>
            <Text style={{padding:15,fontSize:16,marginTop:20,marginBottom:20}}>We're here to help and answer any question
                you might have</Text>
            <View style={{marginTop:13,marginBottom:13}}>
                <Text style={{ paddingLeft: 20, paddingBottom: 5 }}>Full Name</Text>
                <TextInput
                    value={Name}
                    onChangeText={(e) => setName(e)}
                    style={[{
                        width: '100%', borderWidth: 1, borderColor: 'rgb(200,200,200)', fontSize: 16, paddingLeft: 20,
                        paddingRight: 20, borderRadius: 20, height: 40
                    },Name===""?{backgroundColor:'rgb(220,220,220)',borderColor:'rgb(220,220,220)'}:{}]} />
            </View>
            <View style={{marginTop:13,marginBottom:13}}>
                <Text style={{ paddingLeft: 20, paddingBottom: 5 }}>Mobile No.</Text>
                <TextInput
                    value={MobileNo}
                    onChangeText={(e) => setMobileNo(e)}
                    style={[{
                        width: '100%', borderWidth: 1, borderColor: 'rgb(200,200,200)', fontSize: 16, paddingLeft: 20,
                        paddingRight: 20, borderRadius: 20, height: 40
                    },Name===""?{backgroundColor:'rgb(220,220,220)',borderColor:'rgb(220,220,220)'}:{}]} />
            </View>
            <View style={{marginTop:13,marginBottom:13}}>
                <Text style={{ paddingLeft: 20, paddingBottom: 5 }}>Your Concern</Text>
                <TextInput
                    value={YourConcern}
                    onChangeText={(e) => setYourConcern(e)}
                    style={[{
                        width: '100%', borderWidth: 1, borderColor: 'rgb(200,200,200)', fontSize: 16, paddingLeft: 20,
                        paddingRight: 20, borderRadius: 20, height: 40
                    },Name===""?{backgroundColor:'rgb(220,220,220)',borderColor:'rgb(220,220,220)'}:{}]} />
            </View>
            <View style={{marginTop:20,marginBottom:13}}>
                <TouchableOpacity
                    style={[{
                        width: '100%', borderWidth: 1, borderColor: 'red',alignItems:'center',justifyContent:'center', fontSize: 16, paddingLeft: 20,
                        paddingRight: 20, borderRadius: 20, height: 40
                    }]} ><Text style={{color:'red'}}>SUBMIT</Text></TouchableOpacity>
            </View>
            <View style={{alignItems:'center',marginTop:200}}>
                <Text>Didn't get a reply?</Text>
                <Text style={{color:'red'}}>Call us directly</Text>
            </View>
        </ScrollView>
    )
}

export default TalkToUs

const styles = StyleSheet.create({})