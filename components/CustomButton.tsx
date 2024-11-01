import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CustomButton = () => {
  let [count, setCount] = useState<number>(0);
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("first");
        setCount(++count);
      }}
    >
      <Text style={{ color: "#FFF" }}>{count}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
