import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./Profile";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
const Budget = () => {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginHorizontal: 95,
          marginVertical: 25,
          backgroundColor: "red",
          width: "50%",
          height: "30%",
          borderWidth: 1,
          borderColor: "blue",
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }}
          style={{ borderRadius: 37, width: "100%", height: "100%" }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Text style={styles.contentText}>Total:</Text>
        <Text style={styles.contentText}>XXX</Text>
      </View>
      <View
        style={{
          backgroundColor: "#101524",
          flex: 1,
          marginHorizontal: 30,
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#242F50",
            height: "15%",
            borderWidth: 1,
            marginVertical: 10,
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#242F50",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <MaterialCommunityIcons
              name="cash-multiple"
              size={35}
              color="black"
              style={{ color: "#fff", marginLeft: 5 }}
            />
            <Text style={styles.textSize}>Total Expenses</Text>
            <View
              style={{
                width: "25%",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Text style={[styles.textSize, { marginRight: 6 }]}>$XXX</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "#242F50",
            borderWidth: 1,
            height: "15%",
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Entypo
              name="briefcase"
              size={28}
              color="black"
              style={{ color: "#fff", marginLeft: 5 }}
            />
            <Text style={styles.textSize}>Total Budget</Text>
            <View
              style={{
                width: "25%",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Text style={[styles.textSize, { marginRight: 6 }]}>$XXX</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "pink",
            //width: "70%",
            borderWidth: 1,
            //marginHorizontal: 10,
            marginVertical: 10,
            height: "15%",
            borderRadius: 10,
          }}
        ></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101524",
    justifyContent: "center",
  },
  contentText: { color: "red", fontWeight: "bold" },
  textSize: {
    fontWeight: "900",
    fontSize: 16,
    color: "#fff",
  },
});

export default Budget;
