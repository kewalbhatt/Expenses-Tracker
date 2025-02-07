import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";

const GetStarted = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"light-content"} />
      <View style={{ flex: 1 }}>
        {/* //this is for the scrollable and the image */}
        <Swiper
          autoplay
          autoplayTimeout={3}
          dotStyle={{ backgroundColor: "#242F50", top: 27 }}
          activeDotColor="#fff"
          activeDotStyle={{ width: 10, height: 10, top: 27 }}
          loop
          style={{ height: "100%", backgroundColor: "#101524" }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#101524",
              justifyContent: "flex-start",
              alignContent: "center",
            }}
          >
            <Image
              source={require("../../assets/image/new.png")}
              style={{ width: 400, height: 400 }}
            />
            <View style={{ backgroundColor: "#101524", height: "30%" }}>
              <Text
                style={{
                  fontSize: 30,
                  color: "#F2DDCC",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Expenses Tracker
              </Text>
              <View
                style={{
                  margin: 10,
                  maxWidth: 180,
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: "#F2DDCC",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Track expenses, Analyze spending, Easy Customization
                </Text>
              </View>
            </View>
          </View>
          {/* //slide2 */}
          <View
            style={{
              flex: 1,
              backgroundColor: "#101524",
              justifyContent: "space-around",
              alignContent: "center",
            }}
          >
            <Image
              source={require("../../assets/image/secondimage.jpg")}
              style={{
                width: 300,
                height: 360,
                justifyContent: "center",
                alignSelf: "center",
                borderRadius: 5,
              }}
            />
            <View
              style={{
                backgroundColor: "#101524",
                height: "30%",
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  color: "#F2DDCC",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Expenses Tracker
              </Text>
              <View
                style={{
                  margin: 10,
                  maxWidth: 180,
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: "#F2DDCC",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Set budgets, Stay on track, Achieve goals{" "}
                </Text>
              </View>
            </View>
          </View>
          {/* //slide33 */}
          <View
            style={{
              flex: 1,
              backgroundColor: "#101524",
              justifyContent: "space-around",
              alignContent: "center",
            }}
          >
            <Image
              source={require("../../assets/image/thirdimage.jpg")}
              style={{
                width: 300,
                height: 360,
                alignSelf: "center",
                borderRadius: 5,
              }}
            />
            <View style={{ backgroundColor: "#101524", height: "30%" }}>
              <Text
                style={{
                  fontSize: 30,
                  color: "#F2DDCC",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Expenses Tracker
              </Text>
              <View
                style={{
                  margin: 10,
                  maxWidth: 180,
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: "#F2DDCC",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Data encryption, Secure access, Privacy ensured
                </Text>
              </View>
            </View>
          </View>
        </Swiper>
        {/* //this view is for the button login& reg */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#171E32",
            height: "25%",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            style={{
              marginTop: 25,
              backgroundColor: "#F2DDCC",
              width: 160,
              borderWidth: 1,
              height: 40,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
                color: "#101524",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#101524",
              width: 160,
              marginTop: 25,

              //borderWidth: 1,
              maxHeight: 40,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "white",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",

                color: "#F2DDCC",
              }}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default GetStarted;
