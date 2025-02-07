// src/screens/Register.js (or .tsx)
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";

const Login = () => {
  const navagation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      <View style={{ flex: 1, backgroundColor: "#101524" }}>
        <View style={styles.upperContainer}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: 700,
              color: "#F2DDCC",
            }}
          >
            Welcome Back
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.textField}>
            <TextInput
              style={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: 16,
              }}
              placeholder="Enter Email Address"
              placeholderTextColor={"white"}
            />
          </View>

          <View
            style={[
              styles.textField,
              { flexDirection: "row", justifyContent: "space-between" },
            ]}
          >
            <TextInput
              style={{
                fontSize: 16,
                color: "#fff",
                fontWeight: "bold",
              }}
              placeholder="Password"
              secureTextEntry={passwordVisible}
              placeholderTextColor={"white"}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              {}
              <Feather
                name={passwordVisible ? "eye" : "eye-off"}
                size={22}
                color="#fff"
                style={{ marginTop: 6 }}
              />
            </TouchableOpacity>
          </View>

          {/* view for the checkbox */}
          <View
            style={{
              // backgroundColor: "white",
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setIsChecked(!isChecked)}
              style={{
                width: 24,
                height: 24,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Fontisto
                name={isChecked ? "checkbox-active" : "checkbox-passive"}
                size={24}
                color="#fff"
              />
            </TouchableOpacity>
            <Text style={{ color: "#fff", marginLeft: 20 }}>
              I agree with privacy policy
            </Text>
          </View>
          {/* view for the registe button */}
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              marginTop: 40,
              height: 70,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 500, color: "#101524" }}>
              Sign in
            </Text>
          </TouchableOpacity>

          {/* for the straight line */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              //marginTop: 70,
              marginVertical: 30,
            }}
          >
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "#fff",
              }}
            />
            <View>
              <Text
                style={{
                  textAlign: "center",
                  width: 100,
                  color: "#fff",
                }}
              >
                or sign up with
              </Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "#fff" }} />
          </View>

          {/* section for the fb google and x */}

          <View
            style={{
              backgroundColor: "#101524",
              flexDirection: "row",
              flex: 1,
              //position: "relative",
              alignItems: "center",
              // marginTop: 50,
              // marginVertical: 30,
              //width: "100%",

              //height: "20%",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 5,
                backgroundColor: "#171E32",
                width: "25%",
                height: "30%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Entypo name="google--with-circle" size={25} color="#4285F4" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderRadius: 5,
                backgroundColor: "#171E32",
                width: "25%",
                height: "30%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Entypo name="facebook-with-circle" size={24} color="#1877F2" />
              <Text
                style={{
                  position: "absolute",
                  color: "#fff", // White "f"
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                f
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderRadius: 5,
                backgroundColor: "#171E32",
                width: "25%",
                height: "30%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Entypo name="twitter-with-circle" size={25} color="#1DA1F2" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{ flex: 1, backgroundColor: "#101524" }}
            onPress={() => {
              navagation.navigate("Register");
              console.log(navagation);
            }}
          >
            <Text style={{ color: "#fff" }}>
              Already have an account? Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
  upperContainer: {
    backgroundColor: "#101524",
    justifyContent: "center",
    alignContent: "center",
    margin: 30,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "#101524",
    marginHorizontal: 40,
    justifyContent: "center",
    alignContent: "center",
  },
  textField: {
    backgroundColor: "#171E32",
    borderRadius: 10,
    // marginBottom: 19,
    marginVertical: 12,
    padding: 12,
  },
});

export default Login;
