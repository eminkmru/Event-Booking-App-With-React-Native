import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  searchHeader: {
    alignItems: "center",
    justifyContent: "center",
    top: 40,
    marginBottom: 100,
  },
  searchbarContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 15,
    width: 340,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    gap: 20,
    marginBottom: 20,
  },
  searchBody: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginBottom: 300,
  },
  searchCard: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 80,
  },
  searchButton: {
    backgroundColor: "#7F2CCB",
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    width: 240,
    height: 40,
    paddingHorizontal: 10,
    color: "white",
  },
});
