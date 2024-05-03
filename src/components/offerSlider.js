import { View, Text } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { colors } from "../globals/styles";
import { StyleSheet } from "react-native";
import { Image } from "react-native";

const OfferSlider = () => {
  const carousalItems = [
    {
      id: 1,
      image: require("../../assets/OfferSliderImages/img1.png"),
    },
    {
      id: 2,
      image: require("../../assets/OfferSliderImages/img2.png"),
    },
    {
      id: 3,
      image: require("../../assets/OfferSliderImages/img3.png"),
    },
  ];

  return (
    <View>
      <View style={styles.offerSlider}>
        <Swiper
          autoplay={true}
          autoplayTimeout={3}
          showsButtons={true}
          dotColor={colors.text2}
          activeDotColor={colors.text1}
          nextButton={<Text style={styles.buttonText}>›</Text>}
          prevButton={<Text style={styles.buttonText}>‹</Text>}
        >
          <View style={styles.slide}>
            <Image source={carousalItems[0].image} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={carousalItems[1].image} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={carousalItems[2].image} style={styles.image} />
          </View>
        </Swiper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  offerSlider: {
    width: "100%",
    height: 200,
    backgroundColor: colors.col1,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  slide: {
    width: "100%",
    height: 200,
    backgroundColor: colors.col1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  buttonText: {
    color: colors.text1,
    fontSize: 40,
    fontWeight: "500",
    backgroundColor: "white",
    borderRadius: 20,
    width: 40,
    height: 40,
    textAlign: "center",
    lineHeight: 40,
  },
});

export default OfferSlider;
