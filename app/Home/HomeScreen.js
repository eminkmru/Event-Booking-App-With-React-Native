import React from "react";
import { SafeAreaView } from "react-native";

import { styles } from "./homecss";
import HomeMainScreen from "../Components/Home/HomeMainScreen";
import { createStackNavigator } from "@react-navigation/stack";
import EventDetail from "../EventDetail/EventDetail";

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeMainScreen" component={HomeMainScreen} />
      <Stack.Screen
        name="EventsDetail"
        component={EventDetail}
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
}

export default HomeScreen;
