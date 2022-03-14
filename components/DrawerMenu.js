import { Button, Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

import React from 'react';

import { AntDesign, EvilIcons, Feather, FontAwesome, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import profilePicture from '../assets/10.jpg'
import { ImageBackground } from 'react-native';


const DrawerMenu = ({ navigation }) => {
    const onNavigate = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <ScrollView>
            <View style={[styles.container]}>
                <TouchableOpacity style={[styles.metaContainer]} onPress={() => onNavigate('Account')}>
                    <Image source={profilePicture} style={[styles.profilePicture]} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '70%' }}>
                        <View style={[styles.horiContainer]}>
                            <Text style={{ fontWeight: '600', fontSize: 20 }}>Nirmiti Gaitonde</Text>
                            <Text style={[styles.membership]}><Text style={{ color: '#FFB92E' }}>Gold</Text> Member</Text>
                        </View>
                        <MaterialIcons style={[styles.tabIco3]} name='navigate-next' size={35} />
                    </View>
                </TouchableOpacity>
                <View style={{ borderBottomColor: 'rgb(230,230,230)', borderBottomWidth: 1, marginTop: 10, marginBottom: 10 }}></View>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('MemberShipOnboarding')}>
                    <ImageBackground source={require('../assets/membership.png')} style={[styles.tabIco]} ></ImageBackground>
                    <Text style={[styles.navTabText]}>Your Membership</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('WishList')}>
                    <ImageBackground source={require('../assets/wishlist.png')} style={[styles.tabIco]} ></ImageBackground>
                    <Text style={[styles.navTabText]}>Your Wishlist</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Home')}>
                    <ImageBackground source={require('../assets/redeem.png')} style={[styles.tabIco]} ></ImageBackground>
                    <Text style={[styles.navTabText]}>Redeem History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Home')}>
                    <ImageBackground source={require('../assets/categories.png')} style={[styles.tabIco]} ></ImageBackground>
                    <Text style={[styles.navTabText]}>Category</Text>
                </TouchableOpacity>
                <View style={{ borderBottomColor: 'rgb(230,230,230)', borderBottomWidth: 1, marginTop: 10, marginBottom: 10 }}></View>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Home')}>
                    <ImageBackground source={require('../assets/businesswithus.png')} style={[styles.tabIco]} ></ImageBackground>
                    <Text style={[styles.navTabText]}>Business with us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Settings')}>
                    <ImageBackground source={require('../assets/settings.png')} style={[styles.tabIco]} ></ImageBackground>
                    <Text style={[styles.navTabText]}>Setting</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Home')}>
                    <ImageBackground source={require('../assets/rateus.png')} style={[styles.tabIco]} ></ImageBackground>
                    <Text style={[styles.navTabText]}>Rate us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Home')}>
                    <ImageBackground source={require('../assets/privacypol.png')} style={[styles.tabIco]} ></ImageBackground>
                    <Text style={[styles.navTabText]}>Privacy Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Home')}>
                    <ImageBackground source={require('../assets/talktous.png')} style={[styles.tabIco]} ></ImageBackground>
                    <Text style={[styles.navTabText]}>Talk to us</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onNavigate('MemberShipInfo')} style={{
                    minHeight: 40,
                    marginTop: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center'
                }}>
                    <ImageBackground source={require('../assets/wavyred.png')}
                        style={{ width: '100%', padding: 20, minHeight: 40 }}
                        resizeMode="cover"
                        imageStyle={{ borderRadius: 10, }}
                    >
                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 17 }}>Become a member and</Text>
                        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Save More</Text>
                        <View style={{ height: 20 }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <View>
                                <Text style={{ color: 'white', fontWeight: '600', fontSize: 15 }}>Deals worth of</Text>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 23 }}>₹1 lakh</Text>
                            </View>
                            <MaterialIcons style={[styles.tabIco2]} name='navigate-next' size={30} />
                        </View>
                    </ImageBackground>

                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default DrawerMenu;

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
        paddingBottom: 15,
        marginTop: 30
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
        color: 'rgb(170,170,170)',
        height: 20,
        width: 20
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
