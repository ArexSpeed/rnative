// import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={CategoriesScreen}
              options={{
                title: "All Categories",
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              //   };
              // }}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              // options={{ add this style of option if we just need button without special function
              //   headerRight: () => {
              //     return <Button title="Tap me!" />;
              //   },
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// for Drawer there is a problem with react-native-reanimated
// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: "#351401" },
//         headerTintColor: "white",
//         sceneContainerStyle: { backgroundColor: "#3f2f25" },
//         drawerContentStyle: { backgroundColor: "#351401" },
//         drawerInactiveTintColor: "white",
//         drawerActiveTintColor: "#351401",
//         drawerActiveBackgroundColor: "#e4baa1",
//       }}
//     >
//       <Drawer.Screen
//         name="Categories"
//         component={CategoriesScreen}
//         options={{
//           title: "All Categories",
//           drawerIcon: ({ drawer, size }) => (
//             <Ionicons color={color} size={size} name="list" />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Favorites"
//         component={FavoritesScreen}
//         options={{
//           title: "All Categories",
//           drawerIcon: ({ drawer, size }) => (
//             <Ionicons color={color} size={size} name="star" />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// }
