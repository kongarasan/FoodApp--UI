import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from
	"react-navigation-material-bottom-tabs";

    import { FontAwesome5 } from '@expo/vector-icons';

import Home from "./Home";
import UserScreen from "./UserScreen";
import SettingScreen from "./SettingScreen";
import Food from "./Food";
import DineOut from "./DineOut";
import Genie from "./Genie";

const TabNavigator = createMaterialBottomTabNavigator(
{
	Home: {
	screen: Home,
	navigationOptions: {
		tabBarLabel: "swiggy",
		tabBarIcon: (tabInfo) => (
            <FontAwesome5 name="map-marker-alt" 
			size={tabInfo.focused ? 24 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},
	Food: {
	screen: Food,
	navigationOptions: {
		tabBarLabel: "Food" ,
		tabBarIcon: (tabInfo) => (
            <Ionicons name="fast-food-outline" style={{height:150}}
			size={tabInfo.focused ? 26 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},
	DineOut: {
	screen: DineOut,
	navigationOptions: {
		tabBarLabel: "DineOut",
		tabBarIcon: (tabInfo) => (
            <Ionicons name="bicycle-outline" 
			size={tabInfo.focused ? 26 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},
    
},
{
	initialRouteName: "Home",
	barStyle: { backgroundColor: "white" ,height:100},
}
);

const Navigator = createAppContainer(TabNavigator);

export default function NavigationBar() {
return (
	<Navigator>
	<Home />
	</Navigator>
);
}
