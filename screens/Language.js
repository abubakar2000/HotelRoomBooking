import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const Language = () => {
  return (
    <ScrollView>
       <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, }}>
                <Text style={{ width: '100%', textAlign: 'center', alignItems: 'center', fontSize: 18, fontWeight: 'bold' }}>Language</Text>
                <MaterialIcons name='arrow-back-ios' style={{ position: 'absolute', marginLeft: 10, }} size={24} />
            </View>
    </ScrollView>
  )
}

export default Language

const styles = StyleSheet.create({})