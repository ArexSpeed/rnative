import React from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Button } from "react-native";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Chat Screen"
        onPress={() => navigation.navigate("Chat")}
      />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
