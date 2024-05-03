import { View, Text, Touchable } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import RestaurantCard from "./restaurantCard";
import { TouchableOpacity } from "react-native";
import { colors } from "../globals/styles";
import { themeColors } from "./../theme/index";
import firestore from "@react-native-firebase/firestore";

const FeaturedRow = ({ title, description, restaurants }) => {
  const [restrodata, setRestrodata] = useState([]);
  var arr = [];

  useEffect(() => {
    firestore()
      .collection("RestroData")
      .get()
      .then((querySnapshot) => {
        // console.log("Total users: ", querySnapshot.size);
        if (querySnapshot.size != restrodata.size) {
          querySnapshot.forEach((documentSnapshot) => {
            // console.log("User ID: ", documentSnapshot.id, documentSnapshot.data());
            var data = documentSnapshot.data();
            setRestrodata((oldArray) => [...oldArray, data]);
          });
        }
      });
  }, []);
  // console.log(restrodata);
  if (restrodata.length > 0 && restrodata != null) {
    return (
      <View>
        <View className="flex-row justify-between items-center px-4">
          <View>
            <Text className="text-lg font-bold">Hot and Spicy</Text>
            <Text className="text-gray-500 text-xs">Top Trending Restaurants</Text>
          </View>
          <TouchableOpacity>
            <Text style={{ color: themeColors.text }} className="font-semibold">
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible py-5" contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 10 }}>
          {restrodata.map((restaurant, index) => {
            {
              /* console.log("Row",restaurant,index); */
            }
            return <RestaurantCard key={index} item={restaurant} />;
          })}
        </ScrollView>
      </View>
    );
  }
};

export default FeaturedRow;
