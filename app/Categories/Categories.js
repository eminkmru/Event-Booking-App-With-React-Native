import React from "react";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "./categoriesStyle";
import CategoriesElement from "../Components/Categories/CategoriesElement";

const Categories = () => {
  const eventCategories = [
    {
      id: 1,
      title: "Music",
    },
    {
      id: 2,
      title: "Sport",
    },
    {
      id: 3,
      title: "Art",
    },
    {
      id: 4,
      title: "Education",
    },
    {
      id: 5,
      title: "Technology",
    },
    {
      id: 6,
      title: "Science",
    },
  ];
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
        <FlatList
          data={eventCategories}
          renderItem={({ item }) => (
            <CategoriesElement key={item.id} title={item.title} />
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default Categories;
