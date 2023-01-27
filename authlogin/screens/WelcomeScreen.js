import { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthContent from "../components/Auth/AuthContent";

function WelcomeScreen() {
  const authCtx = useContext(AuthContent);
  const token = authCtx.token;

  // for get message protected by authentication (it's not saved on firebase yet)
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://nativeexpenser-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=" +
  //         token
  //     )
  //     .then((response) => {
  //       setFetchedMessage(response.data);
  //     });
  // }, [token]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
