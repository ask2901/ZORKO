import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import CartScreen from "./src/screens/CartScreen";
import OrderPrep from "./src/screens/OrderPrep";
import DelhiveryScreen from "./src/screens/DelhiveryScreen";
import { store } from "./store.js";
import { Provider } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CommunityScreen from "./src/screens/CommunityScreen.js";
import * as Icon from "react-native-feather";
import { themeColors } from "./src/theme/index.js";
import { FontAwesome6 } from "@expo/vector-icons";
import WalletScreen from "./src/screens/WalletScreen.js";
import { FontAwesome5 } from "@expo/vector-icons";
import CustomDrawer from './src/navigation/CustomDrawer'

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#ffffff",
  },
};

function TabNav() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={CustomDrawer}
        options={{
          tabBarIcon: ({ focused }) => {
            // console.log("focused", focused);
            {
              return focused ? (
                <View className="rounded-3xl p-2" style={{ alignItems: "center", justifyContent: "center", top: 3, backgroundColor: themeColors.bgColor(1) }}>
                  <Icon.Home stroke={focused ? "#ffff" : "#000000"} width={25} height={25} />
                </View>
              ) : (
                <View className="rounded-3xl p-2" style={{ alignItems: "center", justifyContent: "center", top: 3 }}>
                  <Icon.Home stroke={focused ? "#ffff" : "#000000"} width={27} height={27} />
                </View>
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            // console.log("focused", focused);
            {
              return focused ? (
                <View className="rounded-3xl p-2" style={{ alignItems: "center", justifyContent: "center", top: 3, backgroundColor: themeColors.bgColor(1) }}>
                  <FontAwesome6 name="people-group" size={22} color="white" />
                </View>
              ) : (
                <View className="rounded-3xl p-2" style={{ alignItems: "center", justifyContent: "center", top: 3 }}>
                  <FontAwesome6 name="people-group" size={25} color="black" />
                </View>
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            // console.log("focused", focused);
            {
              return focused ? (
                <View className="rounded-3xl p-2" style={{ alignItems: "center", justifyContent: "center", top: 3, backgroundColor: themeColors.bgColor(1) }}>
                  <FontAwesome5 name="wallet" size={22} color="white" />
                </View>
              ) : (
                <View className="rounded-3xl p-2" style={{ alignItems: "center", justifyContent: "center", top: 3 }}>
                  <FontAwesome5 name="wallet" size={25} color="black" />
                </View>
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="welcomepage">
          <Stack.Screen
            name="welcomepage"
            component={WelcomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="signup"
            component={SignupScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="home"
            component={TabNav}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="restaurant"
            component={RestaurantScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="cart"
            component={CartScreen}
            options={{
              headerShown: false,
              presentation: "modal",
            }}
          />
          <Stack.Screen
            name="orderprep"
            component={OrderPrep}
            options={{
              headerShown: false,
              presentation: "fullScreenModal",
            }}
          />
          <Stack.Screen
            name="delhivery"
            component={DelhiveryScreen}
            options={{
              headerShown: false,
              presentation: "fullScreenModal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
