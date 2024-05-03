import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { featured } from "../constants";
import { themeColors } from "../theme";
import { Image } from "react-native";
import * as Icon from "react-native-feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../../slices/restaurantSlice";
import { removefromCart, selectCartItems, selectCartTotal } from "../../slices/cartSlice";

const CartScreen = () => {
  // const restaurant = featured.restaurant[0];
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const restaurant = useSelector(selectRestaurant);
  const cartItems=useSelector(selectCartItems);
  const cartTotal=useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState([]);

  useEffect(() => {
    const grouped = cartItems.reduce((group, item) => {
      if(group[item.restroname+item.foodname])
      {
        group[item.restroname+item.foodname].push(item);
      }
      else{
        group[item.restroname+item.foodname]=[item];
      }
      return group;
    },{});
    setGroupedItems(grouped);
  },[cartItems]);

  console.log("foodData", restaurant);
  let delhiveryfee=2;

  return (
    // <View></View>
    <View className="bg-white flex-1">
      {/* backbutton */}
      <View className="relative py-4 mt-6 mx-3 shadow-sm">
        <TouchableOpacity style={{ backgroundColor: themeColors.bgColor(1) }} className="p-1 rounded-full absolute top-5 left-2 z-10" onPress={() => navigation.goBack()}>
          <Icon.ArrowLeft stroke="white" strokeWidth={3} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.fooddata[0].restroname}</Text>
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
        {Object.entries(groupedItems).map((key,item) => {
          let dish=key[1][0];
          
          {/* console.log("dish",groupedItems); */}
          return (
            <View key={key} className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
              <Text className="font-bold" style={{ color: themeColors.text }}>
                {key[1].length} x
              </Text>
              <Image source={{ uri: dish.image }} className="h-14 w-14 rounded-full" />
              <Text className="flex-1 font-bold text-gray-700">{dish.foodname}</Text>
              <Text className="font-semibold text-base">${dish.price}</Text>
              <TouchableOpacity onPress={()=>dispatch(removefromCart({id:dish.id}))} className="p-1 rounded-full" style={{ backgroundColor: themeColors.bgColor(1) }}>
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
          <Text className="text-gray-700">${cartTotal}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delhivery Fee</Text>
          <Text className="text-gray-700">${delhiveryfee}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">${cartTotal+delhiveryfee}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("orderprep")} style={{ backgroundColor: themeColors.bgColor(1) }} className="rounded-full p-3">
            <Text className="text-white text-center font-bold text-lg">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
