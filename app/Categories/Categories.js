import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "./categoriesStyle";
import CategoriesElement from "../Components/Categories/CategoriesElement";

import { createStackNavigator } from "@react-navigation/stack";
import CategoriesHome from "../Components/Categories/CategoriesHome";
import Events from "./Events";

const Stack = createStackNavigator();
const Categories = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CategoriesHome" component={CategoriesHome} />
      <Stack.Screen
        name="Events"
        component={Events}
        options={({ route }) => ({
          title: route.params.title,
          headerShown: true,
          headerStyle: {
            backgroundColor: "#ffffff",
            shadowColor: "#ffffff",
            elevation: 0,
          },
          headerTintColor: "#76468F",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default Categories;
