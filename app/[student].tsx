import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

const SingleStudent = () => {
  const { student } = useLocalSearchParams<{ student: string }>();
  return (
    <SafeAreaView style={style.root}>
      <Button
        title="back"
        onPress={() => {
          router.back();
        }}
      />
      <Text style={{ color: "#FFF" }}>{student}</Text>
    </SafeAreaView>
  );
};

export default SingleStudent;

const style = StyleSheet.create({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
});
