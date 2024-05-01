import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OrderPrep = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("delhivery");
    }, 3000);
  }, []);

  return (
    <View style={{ backgroundColor: "#FCFCFF" }} className="flex-1 justify-center items-center">
      <Image className="h-80 w-80" source={require("../../assets/delhivery.gif")} />
    </View>
  );
};

export default OrderPrep;
