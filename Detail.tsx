import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const App = () => {
  const [price, setPrice] = useState(250000);
  const [days, setDays] = useState(1);

  const totalAmount = price * days;

  const handleAddDay = () => setDays(days + 1);
  const handleRemoveDay = () => days > 1 && setDays(days - 1);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: "https://raunraun.com/wp-content/uploads/2024/12/pantai-ujung-genteng-_-3.png",
        }}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay} /> 

        <View style={styles.customHeader}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>{"<"}</Text>
          </TouchableOpacity>

          <View style={styles.weatherInfo}>
            <Text style={styles.weatherText}>☀️ 28° C</Text>
          </View>
        </View>

        <View style={styles.headerTitleContainer}>
          <Text style={styles.appName}>MeeApps</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Pantai Ujung Genteng</Text>
          <Text style={styles.subtitle}>
            Nikmati keindahan pantai eksotis di Sukabumi, Jawa Barat. Dengan pasir putih dan air laut yang jernih, Ujung Genteng adalah tempat sempurna untuk healing dan menikmati matahari terbenam yang memukau.
          </Text>

          <View style={styles.priceBox}>
            <Text style={styles.priceLabel}>Durasi Menginap</Text>
            <View style={styles.counter}>
              <TouchableOpacity onPress={handleRemoveDay} style={styles.iconContainer}>
                <Text style={styles.iconText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.counterText}>{days} Hari</Text>

              <TouchableOpacity onPress={handleAddDay} style={styles.iconContainer}>
                <Text style={styles.iconText}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.priceText}>
              Total: Rp {totalAmount.toLocaleString("id-ID")}
            </Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)', 
  },
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10, 
    position: 'absolute', 
    top: 50, 
    left: 0,
    right: 0,
    zIndex: 1, 
  },
  backButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  weatherInfo: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  weatherText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTitleContainer: {
    paddingHorizontal: 20,
    paddingTop: 100, 
  },
  appName: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  content: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#e5e5e5",
    marginBottom: 20,
  },
  priceBox: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  priceLabel: {
    color: "#fff",
    fontWeight: "600",
    marginBottom: 10,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    backgroundColor: '#00B37E',
    borderRadius: 16,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  iconText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: '300',
    lineHeight: 28,
  },
  counterButton: {},
  counterText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  priceText: {
    marginTop: 15,
    color: "#00FFAA",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
  },
  button: {
    backgroundColor: "#00B37E",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
