import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import FeaturedEvent from "./FeaturedEvent";
import EventsList from "./EventsList";
import { getAllEvent } from "../../api/categories";
import { styles } from "../../Home/homecss";

function HomeMainScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [todayEvent, setTodayEvent] = useState([]);
  const [featuredEvent, setFeaturedEvent] = useState([]);
  const [loading, setLoading] = useState(true);

  const weekendEventGet = () => {
    setTodayEvent([]);
    if (data.length === 0) return;
    const today = new Date();
    const thisWeekEvents = data.filter((item) => {
      const eventDate = new Date(item.EtkinlikBaslamaTarihi);
      const diffTime = eventDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 7;
    });
    setTodayEvent(thisWeekEvents);
  };

  const getFeaturedEvent = async () => {
    setFeaturedEvent([]);
    if (data.length === 0) return;
    const today = new Date();
    const featuredEventData = await data.filter((item) => {
      const eventDate = new Date(item.EtkinlikBaslamaTarihi);
      const diffTime = eventDate.getTime() > today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays >= 0 && diffDays <= 30;
    });
    let randomFeaturedEvents = [];

    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * featuredEventData.length);
      for (let j = 0; j <= randomFeaturedEvents.length; j++) {
        if (featuredEventData[randomNumber] === randomFeaturedEvents[j]) {
          randomNumber = Math.floor(Math.random() * featuredEventData.length);
        }
      }
      randomFeaturedEvents.push(featuredEventData[randomNumber]);
    }

    setFeaturedEvent(randomFeaturedEvents);
  };
  const fetchData = async () => {
    const allData = await getAllEvent();
    await setData(allData);
  };

  useEffect(() => {
    fetchData();
    weekendEventGet();
    getFeaturedEvent();
  }, []);

  useEffect(() => {
    weekendEventGet();
    getFeaturedEvent();
  }, [data]);

  useEffect(() => {
    if (todayEvent.length > 0 && featuredEvent.length > 0) {
      setLoading(false);
    }
  }, [todayEvent, featuredEvent]);
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <ActivityIndicator size="large" color="#76468F" />
          </View>
        </View>
      ) : (
        <View>
          <ScrollView>
            <View style={styles.firstView}>
              <FeaturedEvent />
            </View>
            <View style={styles.secondView}>
              <EventsList
                title={"Bu Hafta Etkinlikleri"}
                data={todayEvent}
                navigation={navigation}
              />
              <EventsList
                title={"Öne Çıkan Etkinlikler"}
                data={featuredEvent}
                navigation={navigation}
              />
            </View>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
}

export default HomeMainScreen;
