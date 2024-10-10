import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { Image } from "react-native";
import DishRow from "../components/dishRow";
import CartIcon from "../components/cartIcon";
import { StatusBar } from "expo-status-bar";
import firestore from "@react-native-firebase/firestore";
import { set } from "firebase/database";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../../slices/restaurantSlice";

const RestaurantScreen = () => {
  const { params } = useRoute();
  let item = params;
  console.log("item", item.name);
  const navigation = useNavigation();
  const [fooddata, setFoodData] = useState([]);

  const money=0;

  const dispatch = useDispatch();
  
  useEffect(() => {
    firestore()
      .collection("food")
      .doc(item.name)
      .collection("items")
      .get()
      .then((querySnapshot) => {
        // console.log("Total users: ", querySnapshot.size);
        if (querySnapshot.size != fooddata.size) {
          querySnapshot.forEach((documentSnapshot) => {
            // console.log("User ID: ", documentSnapshot.id, documentSnapshot.data());
            setFoodData((oldArray) => [...oldArray, documentSnapshot.data()]);
          });
        }
      });
  }, []);

  if (fooddata.length > 0 && fooddata != null) {
    dispatch(setRestaurant({fooddata}));

    return (
      // <View></View>

      <SafeAreaView>
        <View>
          <CartIcon />
          <StatusBar style="light" />
          <ScrollView>
            <View className="relative">
              <Image className="h-80 w-full" source={{ uri: item.image }} />
              <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
                <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
              </TouchableOpacity>
            </View>
            <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }} className="bg-gray-50 -mt-10 pt-6">
              <View className="px-5">
                <Text className="text-3xl font-bold">{item.name}</Text>
                <View className="flex-row space-x-4 my-1">
                  <View className="flex-row items-center space-x-2">
                    <Image className="h-4 w-4" source={require("../../assets/fullstar.png")} />
                    <Text className="text-xs">
                      <Text className="text-green-700">{item.stars}</Text>
                      <Text className="text-gray-700">
                        ({item.review} review) . <Text className="font-semibold">{item.category}</Text>
                      </Text>
                    </Text>
                  </View>
                  <View className="flex-row items-center space-x-1">
                    <Icon.MapPin height="15" width="15" stroke="gray" />
                    <Text className="text-gray-700 text-xs">Nearby. {item.address}</Text>
                  </View>
                </View>
                <Text className="text-gray-500 mt-2">{item.desc}</Text>
              </View>
            </View>
            <View className="pb-40 bg-gray-50">
              <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>

              {/* dishes */}
              
              {fooddata.map((dish, index) => {

                console.log("dish",dish.price);
                if(dish.price>=money)
                {
                  return <DishRow key={index} item={{ ...dish }} />;
                }
              })}
              
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
};

export default RestaurantScreen;
