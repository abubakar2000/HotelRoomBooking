import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import profilePicture from '../assets/10.jpg'

const Settings = ({ navigation }) => {
    return (
        <ScrollView style={{ paddingLeft: 10, paddingRight: 0, height: '100%', backgroundColor: '#FFFFFF' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, }}>
                <Text style={{ width: '100%', textAlign: 'center', alignItems: 'center', fontSize: 18, fontWeight: 'bold' }}>Settings</Text>
                <TouchableOpacity style={{ position: 'absolute', marginLeft: 0, }} onPress={() => {
                    navigation.goBack();
                }}>
                    <MaterialIcons name='arrow-back-ios' size={24} />
                </TouchableOpacity>
            </View>
            <View style={{ paddingLeft: 20 }}>
                <View>
                    <Text style={{ paddingTop: 20, paddingBottom: 20, fontSize: 18, fontWeight: 'bold' }}>Account</Text>
                </View>
                <View style={[styles.metaContainer]} onPress={() => onNavigate('Account')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={profilePicture} style={[styles.profilePicture]} />
                        <View style={[styles.horiContainer]}>
                            <Text style={{ fontWeight: '600', fontSize: 20 }}>Nirmiti Gaitonde</Text>
                            <Text style={[styles.membership]}><Text style={{ color: '#FFB92E' }}>Gold</Text> Member</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <MaterialIcons style={[styles.tabIco3]} name='navigate-next' size={35} />
                    </View>
                </View>
                <View style={{ marginTop: 20, marginBottom: 20 }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                        paddingTop: 5,
                        paddingBottom: 5
                    }} onPress={() => navigation.navigate("RedeemHistory")}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <ImageBackground style={{ height: 20, width: 20, margin: 12 }} resizeMode="contain" source={require('../assets/redeem.png')} ></ImageBackground>
                            <Text style={{ fontSize: 17 }}>Redeem History</Text>
                        </View>
                        <MaterialIcons style={[styles.tabIco3]} name='navigate-next' size={35} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                        paddingTop: 5,
                        paddingBottom: 5
                    }} onPress={() => navigation.navigate('ForgotPassword')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <ImageBackground style={{ height: 20, width: 20, margin: 12 }} resizeMode="contain" source={require('../assets/password.png')} ></ImageBackground>
                            <Text style={{ fontSize: 17 }}>Forgot Password</Text>
                        </View>
                        <MaterialIcons style={[styles.tabIco3]} name='navigate-next' size={35} />
                    </TouchableOpacity>
                </View>

                <View style={{ width: '100%', borderWidth: 0.5, borderColor: 'rgb(220,220,220)' }}></View>
                <View>
                    <Text style={{ paddingTop: 20, paddingBottom: 20, fontSize: 18, fontWeight: 'bold' }}>Settings</Text>
                </View>
                <TouchableOpacity style={{
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                    paddingTop: 5,
                    paddingBottom: 5
                }} onPress={() => navigation.navigate('Language')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <ImageBackground style={{ height: 20, width: 20, margin: 12 }} resizeMode="contain" source={require('../assets/language.png')} ></ImageBackground>
                        <Text style={{ fontSize: 17 }}>Language</Text>
                    </View>
                    <MaterialIcons style={[styles.tabIco3]} name='navigate-next' size={35} />
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                    paddingTop: 5,
                    paddingBottom: 5
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <ImageBackground style={{ height: 20, width: 20, margin: 12 }} resizeMode="contain" source={require('../assets/notifunction2.png')} ></ImageBackground>
                        <Text style={{ fontSize: 17 }}>Notification</Text>
                    </View>
                    <MaterialIcons style={[styles.tabIco3]} name='navigate-next' size={35} />
                </View>
                <View style={{
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                    paddingTop: 5,
                    paddingBottom: 5
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <ImageBackground style={{ height: 20, width: 20, margin: 12 }} resizeMode="contain" source={require('../assets/dark.png')} ></ImageBackground>
                        <Text style={{ fontSize: 17 }}>Dark Mode</Text>
                    </View>
                    <MaterialIcons style={[styles.tabIco3]} name='navigate-next' size={35} />
                </View>
                <TouchableOpacity style={{
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                    paddingTop: 5,
                    paddingBottom: 5
                }} onPress={() => navigation.navigate('TalkToUs')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <ImageBackground style={{ height: 20, width: 20, margin: 12 }} resizeMode="contain" source={require('../assets/phone2.png')} ></ImageBackground>
                        <Text style={{ fontSize: 17 }}>Talk To Us</Text>
                    </View>
                    <MaterialIcons style={[styles.tabIco3]} name='navigate-next' size={35} />
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                    paddingTop: 5,
                    paddingBottom: 5
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <ImageBackground style={{ height: 20, width: 20, margin: 12 }} resizeMode="contain" source={require('../assets/logout.png')} ></ImageBackground>
                        <Text style={{ fontSize: 17 }}>Log out</Text>
                    </View>
                    <MaterialIcons style={[styles.tabIco3]} name='navigate-next' size={35} />
                </View>
            </View>
            <Text style={{ textAlign: 'center', color: 'rgb(130,130,130)', marginTop: 100 }}>SmiraClub v2.0.1</Text>
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
        justifyContent: 'space-between'
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
        color: 'rgb(215,215,215)',
        marginRight: 20
    },
    navTabText: {
        color: 'rgb(50,50,50)',
        fontSize: 16
    }
});
