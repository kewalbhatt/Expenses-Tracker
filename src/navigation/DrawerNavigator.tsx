import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/home/HomeScreen";
import Profile from "../screens/home/Profile";
import Reports from "../screens/home/Reports";
import Expenses from "../screens/home/Expenses";
import Categories from "../screens/home/Categories";
import Budget from "../screens/home/Budget";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Budget" component={Budget} />
      <Drawer.Screen name="Expenses" component={Expenses} />
      <Drawer.Screen name="Reports" component={Reports} />
      <Drawer.Screen name="Categories" component={Categories} />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
