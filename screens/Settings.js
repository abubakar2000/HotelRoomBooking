import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import profilePicture from '../assets/10.jpg'

const Settings = ({navigation}) => {
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, }}>
                <Text style={{ width: '100%', textAlign: 'center', alignItems: 'center', fontSize: 18, fontWeight: 'bold' }}>Settings</Text>
                <MaterialIcons name='arrow-back-ios' style={{ position: 'absolute', marginLeft: 10, }} size={24} />
            </View>
            <View>
                <Text>Account</Text>
            </View>
            <View style={[styles.metaContainer]} onPress={() => onNavigate('Account')}>
                <Image source={profilePicture} style={[styles.profilePicture]} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={[styles.horiContainer]}>
                        <Text style={{ fontWeight: '600', fontSize: 20 }}>Nirmiti Gaitonde</Text>
                        <Text style={[styles.membership]}><Text style={{ color: '#FFB92E' }}>Gold</Text> Member</Text>
                    </View>
                    <MaterialIcons style={[styles.tabIco3]} name='navigate-next' size={35} />
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>

                <MaterialIcons style={[styles.tabIco3]} name='graphic-eq' size={35} />
                <Text>Redeem History</Text>
                <MaterialIcons style={[styles.tabIco3]} name='navigate-next' size={35} />
            </View>
            <View style={{ flexDirection: 'row' }}>

                <MaterialIcons style={[styles.tabIco3]} name='graphic-eq' size={35} />
                <Text>Forgot Password</Text>
                <MaterialIcons style={[styles.tabIco3]} name='navigate-next' size={35} />
            </View>
            <View style={{ width: '100%', borderWidth: 0.5, borderColor: 'rgb(220,220,220)' }}></View>
            <Text>Settings</Text>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={()=> navigation.navigate("Language")}>

                <MaterialIcons style={[styles.tabIco3]} name='graphic-eq' size={35} />
                <Text>Language</Text>
                <MaterialIcons style={[styles.tabIco3]} name='navigate-next' size={35} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>

                <MaterialIcons style={[styles.tabIco3]} name='graphic-eq' size={35} />
                <Text>Notification</Text>
                <MaterialIcons style={[styles.tabIco3]} name='navigate-next' size={35} />
            </View>
            <View style={{ flexDirection: 'row' }}>

                <MaterialIcons style={[styles.tabIco3]} name='graphic-eq' size={35} />
                <Text>Dark Mode</Text>
                <MaterialIcons style={[styles.tabIco3]} name='navigate-next' size={35} />
            </View>
            <View style={{ flexDirection: 'row' }}>

                <MaterialIcons style={[styles.tabIco3]} name='graphic-eq' size={35} />
                <Text>Talk to us</Text>
                <MaterialIcons style={[styles.tabIco3]} name='navigate-next' size={35} />

            </View>
            <View style={{ flexDirection: 'row' }}>

                <MaterialIcons style={[styles.tabIco3]} name='graphic-eq' size={35} />
                <Text>Log out</Text>
                <MaterialIcons style={[styles.tabIco3]} name='navigate-next' size={35} />
            </View>
            <Text>SmiraClub v2.0.1</Text>
        </ScrollView>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 50
    },
    profilePicture: {
        height: 65,
        width: 65,
        borderRadius: 32.5,
        marginRight: 13
    },
    metaContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    horiContainer: {
        flexDirection: 'column',
    },
    membership: {
        fontSize: 15,
        color: 'rgb(90,90,90)',
        marginTop: 5,
        fontWeight: '500'
    },
    navTab: {
        flexDirection: 'row',
        alignItems: "center",
    },
    tabIco: {
        margin: 15,
        color: 'rgb(170,170,170)'
    },
    tabIcoGold: {
        margin: 15,
        color: 'gold'
    },
    tabIco2: {
        color: 'rgb(255,255,255)'
    },
    tabIco3: {
        color: 'rgb(215,215,215)'
    },
    navTabText: {
        color: 'rgb(50,50,50)',
        fontSize: 16
    }
});
