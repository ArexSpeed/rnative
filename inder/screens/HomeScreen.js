import React, { useLayoutEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import useAuth from "../hooks/useAuth";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

const DUMMY_DATA = [
  {
    id: 1,
    firstName: "Son",
    lastName: "Goku",
    occupation: "Karate Master",
    photoURL: "http://",
    age: 30,
  },
  {
    id: 2,
    firstName: "Son",
    lastName: "Gohan",
    occupation: "Kid",
    photoURL: "http://",
    age: 10,
  },
  {
    id: 3,
    firstName: "Chichi",
    lastName: "Goku",
    occupation: "Chef",
    photoURL: "http://",
    age: 30,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  const swipeRef = useRef(null);

  return (
    <SafeAreaView className="flex-1">
      {/* Header */}
      <View className="relative flex-row items-center justify-between">
        <TouchableOpacity onPress={logout}>
          <Image
            className="w-10 h-10 rounded-full"
            source={{ uri: user.photoURL }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
          <Image
            className="h-14 w-14"
            source={require("../logo.png")}
            color="#FF5864"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864" />
        </TouchableOpacity>
      </View>
      {/* Cards */}
      <View className="flex-1 -mt-6">
        <Swiper
          ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DUMMY_DATA}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          onSwipedLeft={() => console.log("swipe PASS")}
          onSwipedRight={() => console.log("swipe match")}
          backgroundColor="#4FD0E9"
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  color: "green",
                },
              },
            },
          }}
          renderCard={(card) => (
            <View key={card.id} className="relative bg-white h-3/4 rounded-xl">
              <Image
                source={{ uri: card.photoURL }}
                className="absolute top-0 w-full h-full rounded-xl"
              />
              <View
                className="absolute bottom-0 flex flex-row items-center w-full h-20 px-6 py-2 bg-white justify-betweeen rounded-b-xl"
                style={styles.cardShadow}
              >
                <View>
                  <Text className="text-xl font-bold">
                    {card.firstName} {card.lastName}
                  </Text>
                  <Text>{card.occupation}</Text>
                </View>
                <Text className="text-2xl font-bold">{card.age}</Text>
              </View>
            </View>
          )}
        />
      </View>

      <View className="flex flex-row justify-evenly">
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeLeft()}
          className="items-center justify-center w-16 h-16 bg-red-200 rounded-full"
        >
          <Entypo name="cross" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeRight()}
          className="items-center justify-center w-16 h-16 bg-green-200 rounded-full"
        >
          <Entypo name="heart" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
