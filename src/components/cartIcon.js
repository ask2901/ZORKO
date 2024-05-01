import { View, Text, Touchable } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const CartIcon = () => {
    const navigation = useNavigation();
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity onPress={()=>navigation.navigate('cart')} className="flex-row items-center justify-between rounded-full p-4 py-3 mx-5 shadow-lg" style={{ backgroundColor: themeColors.bgColor(1) }}>
        <View className="p-2 px-4 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.3)" }}>
          <Text className="text-white text-lg font-extrabold">3</Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">View Cart</Text>
        <Text className="text-white text-lg font-extrabold">${20}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
