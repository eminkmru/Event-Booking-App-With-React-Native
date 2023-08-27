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
  },
  searchBody: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  searchCard: {
    width: 340,
  },
});
