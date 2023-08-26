import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import { styles } from "./homecss";
import FeaturedEvent from "../Components/Home/FeaturedEvent";
import EventsList from "../Components/Home/EventsList";

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.firstView}>
          <FeaturedEvent />
        </View>
        <View style={styles.secondView}>
          <EventsList
            title={"Today's Event"}
            // data={}
          />
          <EventsList
            title={"Featured Event"}
            // data={}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
