import { View, Text } from "react-native";
import React from "react";
import { Image, View, Text, TouchableOpacity, TextInput } from "react-native";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

const ModalScreen = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);

  const incompleteForm = !image || !job || !age;

  const updateUserProfile = () => {};

  return (
    <View className="items-center flex-1 pt-1">
      <Image
        className="w-full h-20"
        resizeMode="contain"
        source={{ uri: "https://" }}
      />
      <Text className="p-2 text-xl font-bold text-gray-500">
        Welcome {user.displayName}
      </Text>
      <Text className="p-4 font-bold text-center text-red-400">
        Step 1: The Profile Pic
      </Text>
      <TextInput
        value={image}
        onChangeText={(text) => setImage(text)}
        className="pb-2 text-xl text-center"
        placeholder="Enter a Profile Pic URL"
      />

      <Text className="p-4 font-bold text-center text-red-400">
        Step 2: The Job
      </Text>
      <TextInput
        value={job}
        onChangeText={(text) => setImage(text)}
        className="pb-2 text-xl text-center"
        placeholder="Enter your occupation"
      />

      <Text className="p-4 font-bold text-center text-red-400">
        Step 3: The Age
      </Text>
      <TextInput
        value={age}
        onChangeText={(text) => setImage(text)}
        className="pb-2 text-xl text-center"
        placeholder="Enter your Age"
        keyboardType="numeric"
        maxLength={2}
      />

      <TouchableOpacity
        disabled={incompleteForm}
        className="absolute w-64 p-3 bg-red-400 rounded-xl bottom-10"
      >
        <Text className="text-xl text-center text-white">Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalScreen;
