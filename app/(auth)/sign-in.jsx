import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "./../../constants";
import FormField from "../../components/FormField";
import CustomButton from "./../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";

const SignIn = () => {
  const [form, setform] = useState({ email: "", password: "" });
  const [isSubmitting, setisSubmitting] = useState(false);

  const onSubmit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "One of the field is empty");
      return;
    }
    setisSubmitting(true);
    try {
      await SignIn(form.email, form.password);
      router.replace("/home");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", error);
    } finally {
      setisSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center px-4 my-6 min-h-[70vh]">
          <Image
            source={images.logo}
            resizeMethod="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white font-psemibold mt-10">
            Login into Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeHolder={"Enter Email"}
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setform({ ...form, password: e })}
            otherStyles="mt-7"
            placeHolder={"Enter Password"}
          />
          <CustomButton
            title="Sign in"
            containerStyles={"mt-7"}
            handlePress={onSubmit}
            isLoading={isSubmitting}
          ></CustomButton>
          <View className="flex-row pt-7 items-center justify-center gap-2">
            <Text className="text-white font-semibold font-pregular">
              Don't Have an Account?
            </Text>
            <Link
              href="/sign-up"
              className="text-secondary text-lg font-psemibold"
            >
              SignUp
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
