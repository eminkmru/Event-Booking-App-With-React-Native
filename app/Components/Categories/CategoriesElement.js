import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../Categories/categoriesStyle";

function CategoriesElement({ title }) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 30,
        margin: 10,
      }}
    >
      <View style={{ position: "relative", overflow: "hidden" }}>
        <Image
          source={require("../../../assets/categoriesbg.png")}
          style={{
            width: 170,
            height: 170,
          }}
        />
      </View>
      <View style={styles.categoriesCardContent}>
        <Text style={styles.categoriesCardContentTitle}>{title} </Text>
        <Image
          source={require("../../../assets/sing.png")}
          style={styles.categoriesCardContentImg}
        />
      </View>
    </TouchableOpacity>
  );
}

export default CategoriesElement;
