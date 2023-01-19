import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Hello World!</Text>
      </View>
      <Text
        style={{ margin: 16, borderWidth: 2, borderColor: "red", padding: 8 }}
      >
        This is React Native!
      </Text>
      <Button title="Tap me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    margin: 16,
    borderWidth: 2,
    borderColor: "blue",
    padding: 8,
    fontSize: 20,
  },
});
