import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { styles } from "../../Categories/categoriesStyle";
import { getCategories } from "../../api/categories";
import CategoriesElement from "./CategoriesElement";

function CategoriesHome({ navigation }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categoriesData = getCategories();
    setCategories(categoriesData);
  }, []);

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
          data={categories}
          renderItem={({ item }) => (
            <CategoriesElement title={item} navigation={navigation} />
          )}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

export default CategoriesHome;
