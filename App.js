import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./app/Home/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Categories from "./app/Categories/Categories";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Search from "./app/Search/Search";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 5,
            left: 20,
            right: 20,
            backgroundColor: "#ffffff",
            borderRadius: 15,
            height: 90,
            ...styles.shadow,
          },

          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <FontAwesome
                  name="home"
                  size={24}
                  color={focused ? "#76468F" : "#748c94"}
                />
                <Text
                  style={{
                    color: focused ? "#76468F" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <FontAwesome
                  name="search"
                  size={18}
                  color={focused ? "#76468F" : "#748c94"}
                />
                <Text
                  style={{
                    color: focused ? "#76468F" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Search
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <FontAwesome
                  name="bars"
                  size={18}
                  color={focused ? "#76468F" : "#748c94"}
                />
                <Text
                  style={{
                    color: focused ? "#76468F" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Categories
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
