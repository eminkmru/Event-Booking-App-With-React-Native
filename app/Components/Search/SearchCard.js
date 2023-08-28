import React from "react";
import { Image, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { styles } from "../../Search/searchStyle";

function SearchCard() {
  return (
    <View style={styles.searchCard}>
      <Image
        source={require("../../../assets/events.png")}
        style={{ borderRadius: 10, marginBottom: 20 }}
      />
      <View
        style={{
          gap: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <FontAwesome
            name="calendar"
            size={20}
            color="black"
            style={{ color: "grey" }}
          />
          <Text style={{ color: "grey" }}>12-12-2021</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 20,
            }}
          >
            <FontAwesome
              name="map-marker"
              size={20}
              color="black"
              style={{ color: "grey" }}
            />
            <Text style={{ color: "grey" }}>Location</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.searchButton}>
              <Text style={{ color: "white" }}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default SearchCard;
