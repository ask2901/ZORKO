import { View, Text, Touchable } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from './../../slices/cartSlice';

const CartIcon = () => {
    const navigation = useNavigation();

    const cartItems = useSelector(selectCartItems);
    const cartTotal=useSelector(selectCartTotal)
    if(cartItems.length==0){
        return;
    }

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity onPress={()=>navigation.navigate('cart')} className="flex-row items-center justify-between rounded-full p-4 py-3 mx-5 shadow-lg" style={{ backgroundColor: themeColors.bgColor(1) }}>
        <View className="p-2 px-4 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.3)" }}>
          <Text className="text-white text-lg font-extrabold">{cartItems.length}</Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">View Cart</Text>
        <Text className="text-white text-lg font-extrabold">${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
