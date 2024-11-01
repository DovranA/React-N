import { Link, router } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const StudentList = () => {
  return (
    <FlatList
      style={{ width: "100%" }}
      data={[
        { name: "Dovran", surname: "Atayev", code: 214725 },
        { name: "Dovran", surname: "Atayev", code: 214724 },
        { name: "Dovran", surname: "Atayev", code: 214723 },
        { name: "Dovran", surname: "Atayev", code: 214722 },

        { name: "Dovran", surname: "Atayev", code: 214721 },

        { name: "Dovran", surname: "Atayev", code: 214720 },

        { name: "Dovran", surname: "Atayev", code: 214719 },
        { name: "Dovran", surname: "Atayev", code: 214718 },
        { name: "Dovran", surname: "Atayev", code: 214717 },
        { name: "Dovran", surname: "Atayev", code: 214716 },
        { name: "Dovran", surname: "Atayev", code: 214715 },
        { name: "Dovran", surname: "Atayev", code: 214714 },
        { name: "Dovran", surname: "Atayev", code: 214713 },
        { name: "Dovran", surname: "Atayev", code: 214712 },
        { name: "Dovran", surname: "Atayev", code: 214711 },
        { name: "Dovran", surname: "Atayev", code: 214710 },
        { name: "Dovran", surname: "Atayev", code: 214709 },
        { name: "Dovran", surname: "Atayev", code: 214708 },
        { name: "Dovran", surname: "Atayev", code: 214707 },
        { name: "Dovran", surname: "Atayev", code: 214706 },
        { name: "Dovran", surname: "Atayev", code: 214705 },
        { name: "Dovran", surname: "Atayev", code: 214704 },
        { name: "Dovran", surname: "Atayev", code: 214703 },
        { name: "Dovran", surname: "Atayev", code: 214702 },
        { name: "Dovran", surname: "Atayev", code: 214701 },
      ]}
      ItemSeparatorComponent={() => <View style={{ height: 15 }}></View>}
      renderItem={({ item, index }) => {
        return (
          <View key={index} style={{ height: 60, backgroundColor: "#00FF00" }}>
            <Link
              style={{
                width: 60,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#FF0000",
              }}
              href={`/${item.code}`}
            >
              <Image
                source={require("@/assets/images/react-logo.png")}
                style={{
                  height: 60,
                  width: 60,
                  backgroundColor: "#000",
                  borderRadius: 30,
                }}
              />
            </Link>
          </View>
        );
      }}
    />
  );
};

export default StudentList;
