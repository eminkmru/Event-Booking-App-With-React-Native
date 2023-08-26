import React from "react";
import { Image, Text, View } from "react-native";

import { styles } from "../../Home/homecss";

import { FontAwesome } from "@expo/vector-icons";

function Card({ title }) {
  return (
    <View style={styles.homeCard}>
      <View></View>
      <Image
        source={require("../../../assets/events.png")}
        style={{ width: "100%", borderRadius: 10 }}
      />
      <View></View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        Event Title {title}
      </Text>
      <View style={styles.cardDetailText}>
        <FontAwesome name="map-marker" size={15} color="black" />
        <Text>Location</Text>
      </View>
      <View style={styles.cardDetailText}>
        <FontAwesome name="calendar" size={15} color="black" />
        <Text>Date</Text>
      </View>
      <View style={styles.cardDetailText}>
        <FontAwesome name="money" size={15} color="black" />
        <Text>Price</Text>
      </View>
    </View>
  );
}

export default Card;
