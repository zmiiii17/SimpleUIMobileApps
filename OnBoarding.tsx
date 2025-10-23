import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity
} from "react-native";

const OnboardingScreen = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=80"
        // bisa diganti ke foto lain yang kamu punya atau telah disiapkan
      }}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Nama App di atas */}
      <View style={styles.header}>
        <Text style={styles.appName}>MeeApps</Text>
      </View>

      {/* Konten utama */}
      <View style={styles.content}>
        <Text style={styles.title}>Your Next Adventure Starts Here</Text>
        <Text style={styles.subtitle}>
          Life is too short to stay in one place. Find your next favorite city,
          beach, mountain and let’s get moving!
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Exploring</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between"
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20
  },
  appName: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold"
  },
  content: {
    padding: 20
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 14,
    color: "#ddd",
    marginBottom: 20
  },
  button: {
    backgroundColor: "#00B37E",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "flex-start"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});

export default OnboardingScreen;
