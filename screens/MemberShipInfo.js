import { Image, StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import userImage from '../assets/10.jpg';


const { height, width } = Dimensions.get('screen');
const MemberShipInfo = ({ navigation }) => {
  const [ShowModal, setShowModal] = useState(false);
  const [MembershipFamilyCode, setMembershipFamilyCode] = useState("")
  const [MemberShipFamilyCodeError, setMemberShipFamilyCodeError] = useState(true)
  return (
    <View style={{ flexDirection: 'column', flex: 1 }}>

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


      <View style={{ flex: 2, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={userImage} style={{ height: 100, width: 100, borderRadius: 50, marginBottom: 10 }} />
        <Text style={{ margin: 7 }}>Hi, Nirmiti Gaitonde</Text>
        <Text style={{ fontWeight: '600', fontSize: 25 }}><Text style={{ color: '#F3B038' }}>Gold</Text> Membership</Text>
        <Text style={{ color: 'gray', fontSize: 13, marginTop: 6 }}>Valid up to 23 December 2026</Text>
        <Text style={{ marginTop: 15, fontSize: 15 }}><Text style={{ fontWeight: '600' }}>{"27"} days left</Text> in membership</Text>
        <View style={{ borderWidth: 1, width: '80%', marginTop: 15, borderColor: '#FEF893', backgroundColor: '#FEF893' }}>
          <View style={{ borderWidth: 1, width: '35%', borderColor: '#F3B038' }}>

          </View>

        </View>
      </View>
      <View style={{ flex: 3, width: '100%', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
        <Text style={{ fontSize: 17, color: 'gray' }}>Renew your membership</Text>
        <View style={{
          minHeight: 100, width: '95%', backgroundColor: '#FEF8EC', borderRadius: 10,
          marginTop: 20, flexDirection: 'row', alignItems: 'center'
        }}>
          <View style={{ flex: 1, height: '100%' }}>
            <Ionicons name="checkmark-circle" size={24} color="#F3B038" style={{ marginTop: 20, marginLeft: 10 }} />
          </View>
          <View style={{ flex: 4, }}>
            <Text style={{ fontWeight: '500', marginBottom: 6 }}>Continue as <Text style={{ fontWeight: '700', }}>Gold Member</Text></Text>
            <Text style={{ color: 'gray', fontSize: 12 }}>Special prices are available only till 23 December 2026.</Text>
          </View>
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 17, color: '#F3CD74', textDecorationLine: 'line-through', fontWeight: 'bold' }}>₹ 2999</Text>
            <Text style={{ fontSize: 17, color: '#F3B038', fontWeight: 'bold' }}>₹ 2499</Text>
          </View>
        </View>

        <View style={{
          minHeight: 100, width: '95%', backgroundColor: '#ECF8FF', borderRadius: 10,
          marginTop: 20, flexDirection: 'row', alignItems: 'center'
        }}>
          <View style={{ flex: 1, height: '100%' }}>
            <Entypo name="circle" size={24} color="#1371A4" style={{ marginTop: 20, marginLeft: 10 }} />
          </View>
          <View style={{ flex: 4, }}>
            <Text style={{ fontWeight: '500', marginBottom: 6, color: "#3983B1" }}>Continue as <Text style={{ fontWeight: '700', }}>Gold Member</Text></Text>
            <Text style={{ color: 'gray', fontSize: 12 }}>Special prices are available only till 23 December 2026.</Text>
          </View>
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 17, color: '#A5C9DF', textDecorationLine: 'line-through', fontWeight: 'bold' }}>₹ 2999</Text>
            <Text style={{ fontSize: 17, color: '#1371A4', fontWeight: 'bold' }}>₹ 2499</Text>
          </View>
        </View>
        <View style={{
          backgroundColor: '#64B657', flexDirection: 'row', minHeight: 70, width: '95%', borderRadius: 10,
          marginTop: 20, alignItems: 'center', justifyContent: 'space-between'
        }}>
          <View style={{ flexDirection: 'column', padding: 15 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Renew Now</Text>
            <Text style={{ color: 'white' }}>Gold membership @ ₹2499</Text>
          </View>
          <View style={{ padding: 15 }}>
            <Entypo name="chevron-with-circle-right" size={28} color="white" />
          </View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 16, }}>Have a family code?</Text>
          <Text onPress={() => {
            setShowModal(true)
          }} style={{ color: 'red', textDecorationLine: 'underline', fontSize: 16, marginTop: 10 }}>Apply it here</Text>
        </View>
      </View>
    </View>
  )
}

export default MemberShipInfo

const styles = StyleSheet.create({})