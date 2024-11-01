import StudentList from "@/components/student/StudentList";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  FlatListProps,
  ScrollView,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Group = () => {
  return (
    <SafeAreaView style={style.view}>
      <StudentList />
    </SafeAreaView>
  );
};

export default Group;

const style = StyleSheet.create({
  view: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    width: "100%",
    color: "#FFF",
    fontSize: 22,
  },
});
