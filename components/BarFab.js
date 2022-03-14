
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import Home from "../screens/Home";
// import MemberShipInfo from '../screens/MemberShipInfo';
// import PlansList from "../screens/PlansList";
// import Rooms from '../screens/Rooms';
// import Search from "../screens/Search";
// import TalkToUs from "../screens/TalkToUs";
// import WishList from "../screens/WishList";
import { Text, View } from "react-native";
import { EvilIcons, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useState } from 'react';
import { Image } from "react-native";

const BarFab = ({ navigation, active }) => {
    return (
        <View style={{ position: 'absolute', bottom: 0, width: '100%', padding: 10 }}>
            <View style={{
                backgroundColor: '#F9F9F9', borderRadius: 35, height: 55,
                shadowColor: 'black', shadowOffset: { height: 0, width: 0 }, shadowOpacity: 0.5,
                shadowRadius: 5, elevation: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                paddingLeft: 10, paddingRight: 10
            }}>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate("Home")}>
                    <Image source={require('../assets/explore.png')} resizeMode="contain" style={{ height: 20, width: 20,marginBottom:3,borderRadius:30 }} />
                    <Text style={[{ fontSize: 10, color: active === "explore" ? 'black' : 'gray', textAlign: 'center' }]}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../assets/categories2.png')} resizeMode="contain" style={{ height: 20, width: 20,marginBottom:3 }} />
                    <Text style={{ fontSize: 10, color: active === "category" ? 'black' : 'gray', textAlign: 'center' }}>Category</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}
                    style={{ top: -15, justifyContent: 'center', alignItems: 'center', ...state.state }}
                >
                    <View
                        style={{
                            height: 50, width: 50, backgroundColor: '#FA454B', borderRadius: 40,
                            justifyContent: 'center', alignItems: 'center'
                        }}
                    >
                        <Image source={require('../assets/calendar.png')} resizeMode="contain" style={{ height: 25, width: 25, }} />
                    </View>
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../assets/membership2.png')} resizeMode="contain" style={{ height: 20, width: 20,marginBottom:3 }} />
                    <Text style={{ fontSize: 10, color: active === "membership" ? 'black' : 'gray', textAlign: 'center' }}>Membership</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../assets/callus.png')} resizeMode="contain" style={{ height: 20, width: 20,marginBottom:3 }} />
                    <Text style={{ fontSize: 10, color: active === "callus" ? 'black' : 'gray', textAlign: 'center' }}>Call us</Text>
                </View>
            </View>
        </View >
    );
}

export default BarFab;

const state = StyleSheet.create({
    state: {
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        marginLeft: 10, marginRight: 10,
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 8
    }
})