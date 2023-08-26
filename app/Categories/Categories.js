import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./categoriesStyle";
import CategoriesElement from "../Components/Categories/CategoriesElement";

const Categories = () => {
  return (
    <SafeAreaView>
      <View style={styles.title}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
          }}
        >
          Categories
        </Text>
      </View>
      <View style={styles.categoriesCards}>
        <CategoriesElement />
        <CategoriesElement />
        <CategoriesElement />
        <CategoriesElement />
        <CategoriesElement />
        <CategoriesElement />
      </View>
    </SafeAreaView>
  );
};

export default Categories;
