import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { TextInput } from "react-native";
import Categories from "../components/categories.js";
import { featured } from "../constants/index.js";
import FeaturedRow from "../components/featuredRow.js";
import firestore from "@react-native-firebase/firestore";
import OfferSlider from "../components/offerSlider.js";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* <Header /> */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-3 border-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-500">Banglore, India</Text>
          </View>
        </View>
        <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 rounded-full">
          <Icon.Sliders height="20" width="20" stroke="white" />
        </View>
      </View>

      {/*main*/}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        {/* categories */}
        <Categories />

        {/* OfferSlider */}

        <OfferSlider />

        {/* featured */}

        <View className="mt-5">{<FeaturedRow />}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
