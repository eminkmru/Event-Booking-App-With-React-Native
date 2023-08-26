import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../../Home/homecss";

function FeaturedEvent() {
  return (
    <View style={styles.featuredEvent}>
      <Text style={styles.header}>Featured Event</Text>
      <View>
        <Image source={require("../../../assets/featured.png")} />
        <View style={styles.eventInfoCard}>
          <Text style={styles.textsHeader}>Music of the Spheres</Text>
          <Text style={styles.texts}>Event Date: 2021-10-10</Text>
          <Text style={styles.texts}>Event Time: 10:00</Text>
        </View>
      </View>
    </View>
  );
}

export default FeaturedEvent;
