import { Redirect,router} from "expo-router";
import {StatusBar} from "expo-status-bar"
import { Text, View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center h-full items-center px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px]"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="max-w-[380px] w-full h-[300px]"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
            source={images.path}
            resizeMode="contain"
            className="absolute -bottom-2 -right-8 w-[136px] h-[15px] "
            />
          </View>
          <Text className="font-pregular text-center mt-5 text-gray-100">
            Where creativity meets Innovation: Aora
          </Text>
        <CustomButton title="hello there" handlePress={()=>{router.push('./sign-in')}} containerStyles="w-full mt-7"></CustomButton>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"></StatusBar>
    </SafeAreaView>
  );
}
