import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../Home/homecss";
import Card from "./Card";

const EventsList = ({ data, title, navigation }) => {
  return (
    <View>
      {data.length > 0 ? (
        <>
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
                  key={item.Id}
                  title={
                    item.Adi.length > 20
                      ? item.Adi.slice(0, 20) + "..."
                      : item.Adi
                  }
                  location={
                    item.EtkinlikMerkezi.length > 20
                      ? item?.EtkinlikMerkezi.slice(0, 20) + "..."
                      : item?.EtkinlikMerkezi
                  }
                  date={item.EtkinlikBaslamaTarihi.toString().split("T")[0]}
                  price={item.UcretsizMi}
                  id={item.Id}
                  eventImage={item.KucukAfis}
                  navigation={navigation}
                />
              )}
              keyExtractor={(item) => item.Id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </>
      ) : (
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
          <Text>No Events</Text>
        </View>
      )}
    </View>
  );
};

export default EventsList;
