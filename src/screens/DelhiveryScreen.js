import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { featured } from "../constants";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../theme";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import * as Icon from "react-native-feather";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../../slices/restaurantSlice";

const DelhiveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = featured.restaurant[0];

  // const restaurant = useSelector(selectRestaurant);

  return (
    
      <View className="flex-1">
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          className="flex-1"
          mapType="standard"
        >
          <Marker
            coordinate={{
              latitude: restaurant.lat,
              longitude: restaurant.lng,
            }}
            title={restaurant.name}
            description={restaurant.description}
            pinColor={themeColors.bgColor(1)}
          />
        </MapView>
        <View className="rounded-t-3xl bg-white -mt-12 relative">
          <View className="flex-row justify-between px-5 pt-10">
            <View>
              <Text className="text-lg text-gray-700 font-semibold">Estimated Arrival</Text>
              <Text className="text-3xl font-extrabold text-gray-700">20-30 minutes</Text>
              <Text className="mt-2 text-gray-700 font-semibold">Your Order is on the way!</Text>
            </View>
            <Image className="w-24 h-24" source={require("../../assets/guy.png")} />
          </View>
          <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
            <View className="p-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.4)" }}>
              <Image className="h-16 w-16 rounded-full" source={require("../../assets/profile.jpg")} />
            </View>
            <View className="flex-1 ml-3">
              <Text className="text-lg font-bold text-white">Delhivery Man</Text>
              <Text className="font-semibold text-white">Your Rider</Text>
            </View>
            <View className="flex-row items-center space-x-3 mr-3">
              <TouchableOpacity className="bg-white p-2 rounded-full">
                <Icon.Phone fill={themeColors.bgColor(1)} strokeWidth={1} stroke={themeColors.bgColor(1)} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("home")} className="bg-white p-2 rounded-full">
                <Icon.X strokeWidth={4} stroke={"red"} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    
  );
};

export default DelhiveryScreen;
