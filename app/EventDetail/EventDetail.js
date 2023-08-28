import React, { useEffect, useState } from "react";
import { Dimensions, Image, SafeAreaView, Text, View } from "react-native";
import { getEventById } from "../api/categories";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./EventDetailCss";
import MapView, { Marker } from "react-native-maps";
import { ScrollView } from "react-native-gesture-handler";

function EventDetail({ route }) {
  const [event, setEvent] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    const data = async () => {
      const { id } = route.params;
      const event = await getEventById(id);
      setEvent(event);
      if (event?.EtkinlikMerkeziKonum) {
        setLocation(
          event.EtkinlikMerkeziKonum
            ? event.EtkinlikMerkeziKonum
            : ["41.015137", "28.979530"]
        );
      } else {
        setLocation(["41.015137", "28.979530"]);
      }
    };
    data();
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ width: "100%" }}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: `${event.KucukAfis}` }} style={styles.img} />
            <View style={styles.cardInImage}>
              <View style={styles.cardInCardInImage}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "bold",
                  }}
                >
                  {event.Adi}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    marginTop: 5,
                  }}
                >
                  <FontAwesome name="map-marker" size={15} color="black" />
                  <Text>{event.EtkinlikMerkezi}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    marginTop: 5,
                  }}
                >
                  <FontAwesome name="calendar" size={15} color="black" />
                  <Text>
                    {event.EtkinlikBaslamaTarihi &&
                      event.EtkinlikBaslamaTarihi.toString().split("T")[0] +
                        " " +
                        event.EtkinlikBaslamaTarihi.toString()
                          .split("T")[1]
                          .slice(0, 5)}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    marginTop: 5,
                  }}
                >
                  {event.UcretsizMi && (
                    <>
                      <FontAwesome name="money" size={15} color="black" />
                      <Text style={{ fontWeight: "bold" }}>
                        {event.UcretsizMi && "Ücretsiz"}
                      </Text>
                    </>
                  )}
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text
              style={{
                fontSize: 19,
                fontWeight: "bold",
                marginTop: 20,
                marginLeft: 20,
              }}
            >
              Etkinlik Detayı
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginTop: 10,
                marginLeft: 20,
                marginRight: 20,
                fontStyle: "italic",
              }}
            >
              {event.KisaAciklama}
            </Text>
            {event.Sanatci && (
              <>
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: "bold",
                    marginTop: 20,
                    marginHorizontal: 20,
                  }}
                >
                  Etkinlik Sanatçısı
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    marginTop: 10,
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                >
                  {event?.Sanatci}
                </Text>
              </>
            )}
          </View>

          <View
            style={{
              marginVertical: 60,
              marginBottom: 100,
              alignItems: "center",
              borderRadius: 50,
              overflow: "hidden",
              shadowColor: "black",
              shadowOffset: {
                width: 10,
                height: 2,
              },
              shadowOpacity: 0.7,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            {event.EtkinlikMerkeziKonum ? (
              <MapView
                style={{
                  width: Dimensions.get("window").width,
                  height: 200,
                  borderRadius: 20,
                }}
                region={
                  location && {
                    latitude: parseFloat(location["Enlem"]),
                    longitude: parseFloat(location["Boylam"]),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }
                }
                zoomEnabled={true}
                zoomControlEnabled={true}
                minZoomLevel={10}
                maxZoomLevel={20}
              >
                <Marker
                  coordinate={
                    location && {
                      latitude: parseFloat(location["Enlem"]),
                      longitude: parseFloat(location["Boylam"]),
                    }
                  }
                  title="Marker"
                />
              </MapView>
            ) : (
              <MapView
                style={{
                  width: Dimensions.get("window").width,
                  height: 200,
                  borderRadius: 20,
                }}
                region={
                  location && {
                    latitude: 19.058776,
                    longitude: 72.8856,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }
                }
                zoomEnabled={true}
                zoomControlEnabled={true}
                minZoomLevel={10}
                maxZoomLevel={20}
              >
                <Marker
                  coordinate={
                    location && {
                      latitude: 19.058776,
                      longitude: 72.8856,
                    }
                  }
                  title="Marker"
                />
              </MapView>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default EventDetail;
