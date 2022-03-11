
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import MemberShipInfo from '../screens/MemberShipInfo';
import PlansList from "../screens/PlansList";
import Rooms from '../screens/Rooms';
import Search from "../screens/Search";
import TalkToUs from "../screens/TalkToUs";
import WishList from "../screens/WishList";
import { Text, View } from "react-native";
import { EvilIcons, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";

const t = createBottomTabNavigator();
const Z = ({ ch, handle }) => {
    return (
        <TouchableOpacity
            onPress={handle}
            style={{ top: -5, justifyContent: 'center', alignItems: 'center', ...state.state }}
        >
            <View
                style={{
                    height: 55, width: 55, backgroundColor: '#FA454B', borderRadius: 40,
                    justifyContent: 'center', alignItems: 'center'
                }}
            >
                <EvilIcons name="calendar"
                    size={40} color={'white'} />
            </View>
        </TouchableOpacity>
    );
}

const BarFab = ({navigation}) => {
    return (
        <></>
        // <t.Navigator
        //     screenOptions={
        //         {
        //             tabBarShowLabel: true,
        //             headerShadowVisible: false,
        //             header: () => <></>,
        //             tabBarStyle: {
        //                 position: 'absolute',
        //                 borderRadius: 40,
        //                 elevation: 1,
        //                 backgroundColor: 'white',
        //                 left: 15,
        //                 right: 15,
        //                 bottom: 25,
        //                 ...state.state,
        //                 height: 70,
        //             }
        //         }
        //     }
        // >

        //     <t.Screen options={{
        //         tabBarShowLabel: false,
        //         tabBarIcon: ({ focused }) => (
        //             <View style={{ justifyContent: 'center', alignItems: 'center', top: 15, }}>
        //                 <Ionicons name="ios-compass-sharp" size={30} color={focused ? 'black' : 'rgb(200,200,200)'} />
        //                 <Text style={{ fontSize: 10, color: focused ? 'black' : 'rgb(200,200,200)' }}>Explore</Text>
        //             </View>
        //         )
        //     }} name="Explore" component={WishList} />
        //     <t.Screen options={{
        //         tabBarShowLabel: false,
        //         tabBarIcon: ({ focused }) => (
        //             <View style={{ justifyContent: 'center', alignItems: 'center', top: 15 }}>
        //                 <Ionicons name="ios-compass-sharp" size={30} color={focused ? 'black' : 'rgb(200,200,200)'} />
        //                 <Text style={{ fontSize: 10, color: focused ? 'black' : 'rgb(200,200,200)' }}>Category</Text>
        //             </View>
        //         )
        //     }} name="Category" component={PlansList} />
        //     <t.Screen options={{
        //         tabBarShowLabel: false,
        //         tabBarIcon: ({ focused }) => (
        //             <>
        //             </>
        //         ),
        //         tabBarButton: (props) => <Z {...props} />
        //     }} name="home" component={Rooms} />
        //     <t.Screen options={{
        //         tabBarShowLabel: false,
        //         tabBarIcon: ({ focused }) => (
        //             <View style={{ justifyContent: 'center', alignItems: 'center', top: 15 }}>
        //                 <Ionicons name="ios-compass-sharp" size={30} color={focused ? 'black' : 'rgb(200,200,200)'} />
        //                 <Text style={{ fontSize: 10, color: focused ? 'black' : 'rgb(200,200,200)' }}>Membership</Text>
        //             </View>
        //         )
        //     }} name="Membership" component={MemberShipInfo} />
        //     <t.Screen options={{
        //             tabBarShowLabel: false,
        //             tabBarIcon: ({ focused }) => (
        //                 <View style={{ justifyContent: 'center', alignItems: 'center', top: 15 }}>
        //                     <Ionicons name="ios-compass-sharp" size={30} color={focused ? 'black' : 'rgb(200,200,200)'} />
        //                     <Text style={{ fontSize: 10, color: focused ? 'black' : 'rgb(200,200,200)' }}>Call us</Text>
        //                 </View>
        //             )
        //         }} name="Call us" component={TalkToUs} />
        // </t.Navigator>

    );
}

export default BarFab;

const state = StyleSheet.create({
    state: {
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 10,
        shadowOpacity: 0.5,
        paddingStart: 10,
        paddingEnd: 10
    }
})