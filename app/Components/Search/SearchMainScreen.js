import React, { useState, useEffect } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView, Text, TextInput, View } from "react-native";

import { styles } from "../../Search/searchStyle";
import { FontAwesome } from "@expo/vector-icons";

import SearchCard from "./SearchCard";

import Modal from "react-native-modal";

import CalendarPicker from "react-native-calendar-picker";
import { getAllEvent } from "../../api/categories";

function SearchMainScreen({ navigation }) {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState("YYYY-MM-DD");
  const [selectedEndDate, setSelectedEndDate] = useState("YYYY-MM-DD");
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [lastResultsEvents, setLastResultsEvents] = useState([]);

  const showFilterModal = () => {
    setIsOpen(true);
  };

  const minDate = new Date();
  const maxDate = new Date(2024, 12, 31);

  const onDateChange = (date, type) => {
    console.log(JSON.stringify(date));
    const newDate = JSON.stringify(date);
    const newDate2 = newDate.substring(1, newDate.length - 1);
    const dates = newDate2.split("T");
    const date1 = dates[0];

    if (type === "END_DATE") {
      if (date1 == undefined) {
        setSelectedEndDate("YYYY-MM-DD");
      } else {
        setSelectedEndDate(date1);
      }
    } else {
      setSelectedStartDate(date1);
    }
  };

  useEffect(() => {
    const data = getAllEvent();
    setEvents(data);
  }, []);

  useEffect(() => {
    if (selectedStartDate === "YYYY-MM-DD") return;
    if (selectedEndDate === "YYYY-MM-DD") {
      const filteredWithStartDateEvents = events.filter((event) => {
        if (event.EtkinlikBaslamaTarihi === undefined) return false;

        const date = event.EtkinlikBaslamaTarihi.split("T")[0];
        return date >= selectedStartDate;
      });
      setFilteredEvents(filteredWithStartDateEvents);
      return;
    }
    const filteredWithDateEvents = events.filter((event) => {
      if (event.EtkinlikBaslamaTarihi === undefined) return false;

      const date = event.EtkinlikBaslamaTarihi.split("T")[0];
      return date >= selectedStartDate && date <= selectedEndDate;
    });
    setFilteredEvents(filteredWithDateEvents);
    setLastResultsEvents(filteredWithDateEvents, ...searchResults);
  }, [selectedStartDate, selectedEndDate]);

  const handleSearch = (text) => {
    setSearchText(text);
    if (selectedStartDate == "YYYY-MM-DD") {
      const filtredWithText = events.filter((event) => {
        return event.Adi.toLowerCase().includes(text.toLowerCase());
      });
      setSearchResults(filtredWithText);
      setLastResultsEvents(filtredWithText, ...filtredWithText);
    } else {
      const filteredEventsWithDateAndText = filteredEvents.filter((event) => {
        return event.Adi.toLowerCase().includes(text.toLowerCase());
      });
      setSearchResults(filteredEventsWithDateAndText);
      setLastResultsEvents(filteredEventsWithDateAndText, ...filteredEvents);
    }
  };
  console.log(searchResults);

  return (
    <SafeAreaView>
      <View style={styles.searchHeader}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Search
        </Text>
      </View>
      <View style={styles.searchbarContainer}>
        <FontAwesome name="search" size={18} color="grey" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Events"
          placeholderTextColor="grey"
          onChangeText={(text) => {
            handleSearch(text);
          }}
          value={searchText}
        />
        <TouchableOpacity onPress={showFilterModal}>
          <FontAwesome name="sliders" size={18} color="grey" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBody}>
        <FlatList
          data={
            searchResults.length > 0 || filteredEvents.length > 0
              ? lastResultsEvents
              : events
          }
          renderItem={({ item }) => (
            <SearchCard
              title={item.Adi}
              date={item.EtkinlikBaslamaTarihi}
              location={item.EtkinlikMerkezi}
              image={item.KucukAfis}
              onPress={() => {
                navigation.navigate("EventDetail", {
                  title: item.Adi,
                  id: item.Id,
                });
              }}
            />
          )}
          keyExtractor={(item) => item.Id}
        />
      </View>

      <View>
        <Modal
          isVisible={isOpen}
          onBackButtonPress={() => setIsOpen(false)}
          onBackdropPress={() => setIsOpen(false)}
          style={{
            justifyContent: "flex-end",
            margin: 0,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              alignItems: "center",
              height: 400,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              Aramanı Filtrele
            </Text>

            <View
              style={{
                width: "100%",
              }}
            >
              <CalendarPicker
                startFromMonday={true}
                allowRangeSelection={true}
                minDate={minDate}
                maxDate={maxDate}
                todayBackgroundColor="#f2e6ff"
                selectedDayColor="#7300e6"
                selectedDayTextColor="#FFFFFF"
                onDateChange={onDateChange}
                weekdays={["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"]}
                months={[
                  "Ocak",
                  "Şubat",
                  "Mart",
                  "Nisan",
                  "Mayıs",
                  "Haziran",
                  "Temmuz",
                  "Ağustos",
                  "Eylül",
                  "Ekim",
                  "Kasım",
                  "Aralık",
                ]}
                previousTitle="Geri"
                nextTitle="İleri"
                width={350}
              />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

export default SearchMainScreen;
