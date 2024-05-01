import { View, Text, Touchable } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import RestaurantCard from "./restaurantCard";
import { TouchableOpacity } from "react-native";
import { colors } from "../globals/styles";
import { themeColors } from './../theme/index';

const FeaturedRow = ({ title, description, restaurants}) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="text-lg font-bold">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity >
          <Text style={{color:themeColors.text}} className="font-semibold">See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible py-5" contentContainerStyle={{ paddingHorizontal: 15 , paddingBottom:10}}>
        {restaurants.map((restaurant, index) => {
          return <RestaurantCard key={index} item={restaurant} />;
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
