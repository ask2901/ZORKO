import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import HomeScreen from "./../screens/HomeScreen";
// import * as Icon from "react-native-feather";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      screenOptions={{
        drawerLabelStyle: { fontFamily: "Roboto-medium", fontSize: 15 },
        drawerActiveBackgroundColor: themeColors.bgColor(1),
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerType: "slide",
        drawerPosition: "right",
      }}
      style={{ flex: 1 }}
      initialRouteName="Drawer"
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                paddingBottom: 12,
                marginBottom: 17,
                marginTop: 20,
              }}
            >
              <Image
                source={require("../../assets/dishes/images_BURGEr.jpeg")}
                resizeMode="contain"
                style={{
                  height: 100,
                  width:100,
                  borderRadius: 999,
                }}
              />
              <Text
                style={{
                  fontSize: 22,
                  color: "black",
                  fontWeight: "bold",
                  marginVertical: 8,
                }}
              >
                Isabellla Joanna
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "black",
                }}
              >
                Product Designer
              </Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
    >
      <Drawer.Screen
        name="home_screen"
        component={HomeScreen}
        options={{
          drawerLabel: "Home",
          headerShown: false,
          drawerIcon: () => (
            // <Image
            //   // source={require("../assets/icons/home.png")}
            //   style={{ width: 24, height: 24, tintnColor: "#00000"}}
            //   resizeMode="contain"
            // />
            <Icon name="home" type="feather" size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={HomeScreen}
        options={{
          drawerLabel: "Orders",
          headerShown: false,
          drawerIcon: () => <Icon name="food-outline" type="material-community" size={24} />,
        }}
      />
      <Drawer.Screen
        name="My_Account"
        component={HomeScreen}
        options={{
          drawerLabel: "My Account",
          headerShown: false,
          drawerIcon: () => <Icon name="account-outline" type="material-community" size={26} />,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={HomeScreen}
        options={{
          drawerLabel: "Settings",
          headerShown: false,
          drawerIcon: () => <Icon name="account-outline" type="material-community" size={26} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default CustomDrawer;
