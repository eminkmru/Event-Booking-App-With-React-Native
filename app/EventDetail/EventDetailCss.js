import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 20,
    width: "100%",
    marginBottom: 130,
  },
  img: {
    width: "100%",
    resizeMode: "stretch",
    height: 200,
    position: "relative",
  },
  cardInImage: {
    position: "absolute",
    backgroundColor: "#7F2CCB",
    width: "90%",
    top: 175,
    left: 20,
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 15,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.7,
    elevation: 5,
  },
  cardInCardInImage: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 25,
  },
});
