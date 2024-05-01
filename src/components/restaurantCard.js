import { View, Text } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("restaurant", { ...item })}>
      <View style={{ shadowColor: themeColors.bgColor(1), shadowRadius: 7 }} className="mr-6 bg-white rounded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
        <View className="pb-4 px-3 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image className="h-4 w-4" source={require("../../assets/fullstar.png")} />
            <Text className="text-xs">
              <Text className="text-green-700">{item.stars}</Text>
              <Text className="text-gray-700">
                ({item.reviews} review) .<Text className="font-semibold">{item.category}</Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin height="15" width="15" stroke="gray" />
            <Text className="text-gray-700 text-xs">Nearby. {item.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;
