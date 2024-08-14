import { Link } from "expo-router";
import { Text, View } from "react-native";
import React from "react";

export default function App() {
  return (
    <View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/profile"}>Go to Profile</Link>
    </View>
  );
}
