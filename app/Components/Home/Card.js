import React from "react";
import { Image, Text, View } from "react-native";

import { styles } from "../../Home/homecss";

import { FontAwesome } from "@expo/vector-icons";

function Card({ title, location, date, price }) {
  return (
    <View style={styles.homeCard}>
      <View
        style={{
          height: 100,
        }}
      >
        <Image
          source={require("../../../assets/events.png")}
          style={{
            borderRadius: 10,
            width: "100%",
            maxHeight: "100%",
            resizeMode: "stretch",
          }}
        />
      </View>
      <View></View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      <View style={styles.cardDetailText}>
        <FontAwesome name="map-marker" size={15} color="black" />
        <Text>{location}</Text>
      </View>
      <View style={styles.cardDetailText}>
        <FontAwesome name="calendar" size={15} color="black" />
        <Text>{date}</Text>
      </View>
      <View style={styles.cardDetailText}>
        <FontAwesome name="money" size={15} color="black" />
        <Text>{price}</Text>
      </View>
    </View>
  );
}

export default Card;
