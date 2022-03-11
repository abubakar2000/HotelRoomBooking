import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
const Language = ({ navigation }) => {
  return (
    <View style={{height:'100%'}}>
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, }}>
          <Text style={{ width: '100%', textAlign: 'center', alignItems: 'center', fontSize: 18, fontWeight: 'bold' }}>Language</Text>
          <TouchableOpacity style={{ position: 'absolute', marginLeft: 10, }}
            onPress={() => {
              navigation.goBack()
             }}
          >
            <MaterialIcons name='arrow-back-ios' size={24} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{
          flexDirection: 'row', justifyContent: 'space-between',
          paddingTop: 10, paddingBottom: 10, paddingLeft: 30, paddingRight: 30
        }}>
          <Text style={[{ fontSize: 16 }, { color: 'red' }]}>English (Default)</Text>
          <View>
            <MaterialIcons name='check' style={{ color: 'red' }} size={25} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{
          flexDirection: 'row', justifyContent: 'space-between',
          paddingTop: 10, paddingBottom: 10, paddingLeft: 30, paddingRight: 30
        }}>
          <Text style={{ fontSize: 16 }}>Hindi</Text>
          <View>
            <MaterialIcons name='check' size={25} style={{ color: 'transparent' }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{
          flexDirection: 'row', justifyContent: 'space-between',
          paddingTop: 10, paddingBottom: 10, paddingLeft: 30, paddingRight: 30
        }}>
          <Text style={{ fontSize: 16 }}>Marathi</Text>
          <View>
            <MaterialIcons name='check' size={25} style={{ color: 'transparent' }} />
          </View>
        </TouchableOpacity>
      </ScrollView>
     <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
     <TouchableOpacity style={{position:'absolute',bottom:0,justifyContent:'center',
      alignItems:'center',borderWidth:1,borderColor:'red',padding:13,borderRadius:30,
      margin:10,width:'90%'}}>
        <Text style={{color:'red'}}>OKAY</Text>
      </TouchableOpacity>
     </View>
    </View>
  )
}

export default Language

const styles = StyleSheet.create({})