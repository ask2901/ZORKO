import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, removefromCart, selectCartItems, selectItemsById } from "../../slices/cartSlice.js";
import { Dimensions } from "react-native";

const ItemRecom = ({ item }) => {
  // console.log("item_Dish_Row",item);

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addtoCart({ ...item }));
    // console.log(item.id);
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    
    <View>
      <View
        style={{
          width: screenWidth / 2.6,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          padding: 10,
          paddingLeft: 0,
          gap: 0,
          borderRadius: 99,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          marginBottom: 3,
          marginHorizontal: 12,
          marginTop: 8,
        }}
      >
        <Image style={{ borderRadius: 30, height: 45, width: 45 }} source={{ uri: item.image }} />
        <View style={{ flex: 1, flexDirection: "column", paddingLeft: 8 }}>
          <Text style={{ fontSize: 16 }}>{item.foodname}</Text>
          <View style={{ flexDirection: "row", paddingLeft: 3 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray" }}>₹ {item.price}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleIncrease} className="p-1 rounded-full" style={{ backgroundColor: themeColors.bgColor(1) }}>
          <Icon.Plus strokeWidth={2} stroke="white" height={20} width={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemRecom;
