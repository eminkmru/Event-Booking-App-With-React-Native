import React from "react";
import SearchMainScreen from "../Components/Search/SearchMainScreen";
import { createStackNavigator } from "@react-navigation/stack";
import EventDetail from "../EventDetail/EventDetail";

const Stack = createStackNavigator();
function Search() {
  return (
    <Stack.Navigator
      initialRouteName="SearchMainScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SearchMainScreen" component={SearchMainScreen} />
      <Stack.Screen
        name="EventDetail"
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

export default Search;
