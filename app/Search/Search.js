import React from "react";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./searchStyle";
import { FontAwesome } from "@expo/vector-icons";
import SearchCard from "../Components/Search/SearchCard";
import { TouchableOpacity } from "react-native";

function Search() {
  return (
    <SafeAreaView>
      <View style={styles.searchHeader}>
        <Text>Search</Text>
      </View>
      <View style={styles.searchbarContainer}>
        <FontAwesome name="search" size={18} color="grey" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Events"
          placeholderTextColor="grey"
        />
        <TouchableOpacity>
          <FontAwesome name="sliders" size={18} color="grey" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.searchBody}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Search;
