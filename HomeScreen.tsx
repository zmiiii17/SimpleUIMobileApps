import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hi,</Text>
          <Text style={styles.name}>Hazmi</Text>
        </View>

        {/* Promo Card */}
        <View style={styles.promoCard}>
          <Text style={styles.promoTitle}>Plan Your Summer!</Text>
          <TouchableOpacity style={styles.promoButton}>
            <Text style={styles.promoArrow}>➜</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search destination..."
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Text style={{ fontWeight: "bold" }}>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Popular Destination */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Destination Cards (vertikal) */}
        <View style={styles.destinationListVertical}>
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80",
              }}
              style={styles.cardImage}
            />
            <View style={styles.cardInfo}>
              <Text style={styles.cardLocation}>Indonesia</Text>
              <Text style={styles.cardTitle}>Labuan Bajo</Text>
              <Text style={styles.cardPrice}>Rp. 500,000 / pax</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
              }}
              style={styles.cardImage}
            />
            <View style={styles.cardInfo}>
              <Text style={styles.cardLocation}>Indonesia</Text>
              <Text style={styles.cardTitle}>Ujung Genteng</Text>
              <Text style={styles.cardPrice}>Rp. 200.000 / pax</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navIcon}>🎫</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navIcon}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f6ef",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  greeting: {
    fontSize: 18,
    color: "#000",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  promoCard: {
    backgroundColor: "#FF7B4E",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  promoTitle: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    width: "75%",
  },
  promoButton: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
  },
  promoArrow: {
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#f0f0e9",
    borderRadius: 15,
    margin: 20,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    height: 45,
  },
  filterButton: {
    padding: 6,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAll: {
    fontSize: 14,
    color: "#999",
  },
  destinationListVertical: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
  },
  cardImage: {
    width: "100%",
    height: 160,
  },
  cardInfo: {
    padding: 10,
  },
  cardLocation: {
    color: "#888",
    fontSize: 12,
    marginTop: 5,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  cardPrice: {
    color: "#FF7B4E",
    fontSize: 13,
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#001d2e",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navIcon: {
    fontSize: 20,
    color: "#fff",
  },
});

export default HomeScreen;
