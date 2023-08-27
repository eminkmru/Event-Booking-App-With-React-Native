import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../Home/homecss";
import Card from "./Card";

const EventsList = ({ title }) => {
  // title, data
  const data = [
    {
      id: "1",
      title: "Event 1",
      location: "Location 1",
      date: "Date 1",
      price: "Price 1",
    },
    {
      id: "2",
      title: "Event 2",
      location: "Location 2",
      date: "Date 2",
      price: "Price 2",
    },
    {
      id: "3",
      title: "Event 3",
      location: "Location 3",
      date: "Date 3",
      price: "Price 3",
    },
    {
      id: "4",

      title: "Event 4",
      location: "Location 4",
      date: "Date 4",
      price: "Price 4",
    },
    {
      id: "5",
      title: "Event 5",
      location: "Location 5",
      date: "Date 5",
      price: "Price 5",
    },
    {
      id: "6",
      title: "Event 6",
      location: "Location 6",
      date: "Date 6",
      price: "Price 6",
    },
    {
      id: "7",
      title: "Event 7",
      location: "Location 7",
      date: "Date 7",
      price: "Price 7",
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
          renderItem={({ item }) => (
            <Card
              key={item.id}
              title={item.title}
              location={item.location}
              date={item.date}
              price={item.price}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default EventsList;
