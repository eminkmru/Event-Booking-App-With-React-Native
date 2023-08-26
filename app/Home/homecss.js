import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 40,
  },
  firstView: {
    alignItems: "center",
  },
  secondView: {
    marginHorizontal: 20,
    marginBottom: 200,
  },
  featuredEvent: {
    position: "relative",
  },
  eventInfoCard: {
    position: "absolute",
    backgroundColor: "#410777",
    opacity: 0.8,
    width: 300,
    top: "50%",
    left: "7%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textsHeader: {
    color: "white",
  },
  texts: {
    color: "lightgrey",
  },
  eventListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  cards: {
    height: 280,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  homeCard: {
    backgroundColor: "#e2e2e2",
    height: 250,
    width: 150,
    borderRadius: 10,
    marginRight: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.64,
    shadowRadius: 3.27,
    elevation: 10,
    padding: 10,
    justifyContent: "space-between",
  },
  cardDetailText: {
    color: "grey",
    fontSize: 14,
    flexDirection: "row",
    gap: 10,
  },
});
