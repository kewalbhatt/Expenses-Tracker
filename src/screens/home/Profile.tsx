import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }} // Replace with actual user image
        style={styles.profileImage}
      />

      <Text style={styles.name}>John Doe</Text>

      <Text style={styles.email}>johndoe@example.com</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#101524",
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Profile;
