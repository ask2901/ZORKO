import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { featured } from "../constants";
import { themeColors } from "../theme";
import { Image } from "react-native";
import * as Icon from "react-native-feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const CartScreen = () => {
  const restaurant = featured.restaurant[0];

  const navigation = useNavigation();

  return (
    <View className="bg-white flex-1">
      {/* backbutton */}
      <View className="relative py-4 mt-6 mx-3 shadow-sm">
        <TouchableOpacity style={{ backgroundColor: themeColors.bgColor(1) }} className="p-1 rounded-full absolute top-5 left-2 z-10" onPress={() => navigation.goBack()}>
          <Icon.ArrowLeft stroke="white" strokeWidth={3} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>

      {/* delhiverytime */}

      <View style={{ backgroundColor: themeColors.bgColor(0.2) }} className="flex flex-row items-center justify-around py-5">
        <Image source={require("../../assets/bikeguy.png")} className="w-10 h-10 rounded-full" />
        <Text className="">Deliver in 20-30 mins</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* dishes */}

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }} className="bg-gray-50 pt-5">
        {restaurant.dishes.map((dish, index) => {
          return (
            <View key={index} className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
              <Text className="font-bold" style={{ color: themeColors.text }}>
                2 x
              </Text>
              <Image source={dish.image} className="h-14 w-14 rounded-full" />
              <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
              <Text className="font-semibold text-base">${dish.price}</Text>
              <TouchableOpacity className="p-1 rounded-full" style={{ backgroundColor: themeColors.bgColor(1) }}>
                <Icon.Minus strokeWidth={2} stroke="white" height={20} width={20} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      {/* totals */}

      <View style={{ backgroundColor: themeColors.bgColor(0.2) }} className="p-6 px-8 rounded-t-3xl space-y-4">
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">$20</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delhivery Fee</Text>
          <Text className="text-gray-700">$20</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">$20</Text>
        </View>
        <View>
          <TouchableOpacity onPress={()=>navigation.navigate('orderprep')} style={{ backgroundColor: themeColors.bgColor(1) }} className="rounded-full p-3">
            <Text className="text-white text-center font-bold text-lg">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
