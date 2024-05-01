import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { categories } from "../constants";
import { useState } from "react";
import { Image } from "react-native";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible" contentContainerStyle={{ paddingHorizontal: 15 }}>
        {categories.map((category, index) => {
          let isActive = category.id == activeCategory;
          let btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          let textClass = isActive ? "font-semibold text-gray-800" : "text-gray-500";

          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity onPress={() => setActiveCategory(category.id)} className={"p-2 rounded-full shadow bg-gray-200 " + btnClass}>
                <Image style={{ width: 45, height: 45 }} source={category.image} />                
              </TouchableOpacity>
              <Text className={"text-sm " + textClass}>{category.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
