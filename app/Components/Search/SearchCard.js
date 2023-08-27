import React from "react";
import { Image, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { styles } from "../../Search/searchStyle";

function SearchCard() {
  return (
    <View style={styles.searchCard}>
      <Image source={require("../../../assets/events.png")} />
      <View
        style={{
          flexDirection: "row",
          gap: 10,
        }}
      >
        <FontAwesome name="calendar" size={24} color="black" />
        <Text>12-12-2021</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <FontAwesome name="map-marker" size={24} color="black" />
          <Text>Location</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default SearchCard;
