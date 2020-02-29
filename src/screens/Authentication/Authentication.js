import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import { Theme } from "../../constants/Constants";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.AppColor,
    paddingTop: Constants.statusBarHeight
  },
  welcome: {
    color: "white",
    fontSize: 54,
    marginTop: 25,
    marginBottom: 25,
    paddingBottom: 33
  },
  keyboardWrapper: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    backgroundColor: Theme.AppColor
  },
  input: {
    color: "white",
    fontSize: 24,
    height: 54,
    width: "75%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    paddingLeft: 15
  },
  button: {
    height: 70,
    backgroundColor: "white",
    width: "50%",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  buttonTitle: {
    color: Theme.AppColor,
    fontSize: 34
  }
});
