import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../Home/homecss";
import Card from "./Card";

const EventsList = ({ title }) => {
  // title, data
  const data = [
    {
      id: 1,
      title: "Emin",
    },
    {
      id: 2,
      title: "Faruk",
    },
    {
      id: 3,
      title: "Mustafa",
    },
    {
      id: 4,
      title: "Yağmur",
    },
    {
      id: 5,
      title: "Esra",
    },
  ];
  return (
    <View>
      <View style={styles.eventListHeader}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
        <TouchableOpacity>
          <Text>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cards}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Card key={item.id} title={item.title} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
        />
      </View>
    </View>
  );
};

export default EventsList;
