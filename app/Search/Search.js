import React from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "./searchStyle";
import { FontAwesome } from "@expo/vector-icons";
import SearchCard from "../Components/Search/SearchCard";

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
      </View>

      <View style={styles.searchBody}>
        <SearchCard />
      </View>
    </SafeAreaView>
  );
}

export default Search;
