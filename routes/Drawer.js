// import { createDrawerNavigator } from "react-navigation-drawer";
// import { createAppContainer } from "react-navigation";

import DrawerMenu from "../components/DrawerMenu";
import Account from "../screens/Account";
import Rooms from "../screens/Rooms";
import PlansList from "../screens/PlansList";
import { Dimensions } from "react-native";
import RoomDetail from "../screens/RoomDetail";
import WishList from "../screens/WishList";
import MemberShipInfo from "../screens/MemberShipInfo";
import PopularHotels from "../screens/PopularHotels";
import MemberShipOnboarding from "../screens/MembershipOnboarding";
import Search from "../screens/Search";
import Home from "../screens/Home";
import Coupons from "../screens/Coupons";

// const Drawer =
//     createAppContainer(
//         createDrawerNavigator(
//             {
//                 Search: {
//                     screen: Search,
//                 },
//                 PopularHotels: {
//                     screen: PopularHotels,
//                 },
//                 Coupons: {
//                     screen: Coupons,
//                 },
//                 Account: {
//                     screen: Account,
//                 },
//                 Home: {
//                     screen: Home,
//                 },
//                 MemberShipOnboarding: {
//                     screen: MemberShipOnboarding,
//                 },
//                 MemberShipInfo: {
//                     screen: MemberShipInfo,
//                 },
//                 PlansList: {
//                     screen: PlansList,
//                 },
//                 RoomDetail: {
//                     screen: RoomDetail,
//                 },
//                 WishList: {
//                     screen: WishList,
//                 },
//                 Rooms: {
//                     screen: Rooms,
//                 },

//             }
//             ,
//             {
//                 contentComponent: ({ navigation }) => <DrawerMenu navigation={navigation} />, --
//                 drawerWidth: Dimensions.get('screen').width - 40,
//                 drawerType:'slide',


//             }
//         )
//     )

// export { Drawer }



import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Settings from "../screens/Settings";
import Language from "../screens/Language";
import RedeemHistory from "../screens/RedeemHistory";
import TalkToUs from "../screens/TalkToUs";
import ForgotPassword from "../screens/ForgotPassword";
import BarFab from "../components/BarFab";


const Drawer = createDrawerNavigator();
export default function DrawerApp() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        backBehavior="history"
        screenOptions={{
          drawerStyle: {
            width: '90%',
          },
          drawerType: 'front',
          swipeEdgeWidth:10,
          swipeMinDistance:10,
          gestureEnabled:true,
          swipeEnabled:true,
        }}
        drawerContent={({ navigation }) => <DrawerMenu navigation={navigation} />}
        initialRouteName="PopularHotels">

        <Drawer.Screen options={{ headerShown: false }} name="Root" component={BarFab} />
        <Drawer.Screen options={{ headerShown: false }} name="Search" component={Search} />
        <Drawer.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Drawer.Screen options={{ headerShown: false }} name="MemberShipInfo" component={MemberShipInfo} />
        <Drawer.Screen options={{ headerShown: false }} name="PlansList" component={PlansList} />
        <Drawer.Screen options={{ headerShown: false }} name="PopularHotels" component={PopularHotels} />
        <Drawer.Screen options={{ headerShown: false }} name="Coupons" component={Coupons} />
        <Drawer.Screen options={{ headerShown: false }} name="Account" component={Account} />
        <Drawer.Screen options={{ headerShown: false }} name="MemberShipOnboarding" component={MemberShipOnboarding} />
        <Drawer.Screen options={{ headerShown: false }} name="RoomDetail" component={RoomDetail} />
        <Drawer.Screen options={{ headerShown: false }} name="WishList" component={WishList} />
        <Drawer.Screen options={{ headerShown: false }} name="Rooms" component={Rooms} />
        <Drawer.Screen options={{ headerShown: false }} name="Settings" component={Settings} />
        <Drawer.Screen options={{ headerShown: false }} name="Language" component={Language} />
        <Drawer.Screen options={{ headerShown: false }} name="RedeemHistory" component={RedeemHistory} />
        <Drawer.Screen options={{ headerShown: false }} name="TalkToUs" component={TalkToUs} />
        <Drawer.Screen options={{ headerShown: false }} name="ForgotPassword" component={ForgotPassword} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
