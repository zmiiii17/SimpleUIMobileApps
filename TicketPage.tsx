import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const TicketScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.title}>Tickets</Text>
          <Text style={styles.menu}>⋮</Text>
        </View>

        {/* Location Dropdown */}
        <View style={styles.locationRow}>
          <Text style={styles.subText}>Current locations</Text>
          <Text style={styles.location}>Jakarta ▾</Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabRow}>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Hotel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Aircraft</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Villa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Attraction</Text>
          </TouchableOpacity>
        </View>

        {/* Date Section */}
        <View style={styles.dateContainer}>
          <Text style={styles.dateTitle}>June, 2025</Text>
          <View style={styles.dateRow}>
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <View
                key={i}
                style={[
                  styles.dateBox,
                  i === 1 && styles.activeDateBox, // M selected
                ]}
              >
                <Text
                  style={[
                    styles.dateText,
                    i === 1 && styles.activeDateText,
                  ]}
                >
                  {d}
                </Text>
                <Text
                  style={[
                    styles.dateNumber,
                    i === 1 && styles.activeDateText,
                  ]}
                >
                  {22 + i}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Tickets Found */}
        <View style={styles.ticketHeader}>
          <Text style={styles.ticketHeaderText}>4 Tickets Found</Text>
        </View>

        {/* Ticket Cards */}
        <View style={styles.ticketCard}>
          <View style={styles.airlineStrip}>
            <Text style={styles.airlineText}>AIRLINES</Text>
            <Text style={styles.airplane}>✈️</Text>
          </View>

          <View style={styles.ticketInfo}>
            <View>
              <Text style={styles.code}>NL</Text>
              <Text style={styles.city}>Rotterdam</Text>
              <Text style={styles.time}>5:30pm</Text>
              <Text style={styles.date}>Mon, 23 Jun</Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.code}>IDN</Text>
              <Text style={styles.city}>Labuan Bajo</Text>
              <Text style={styles.time}>3:30am</Text>
              <Text style={styles.date}>Tue, 24 Jun</Text>
            </View>
          </View>

          <Text style={styles.price}>Rp. 1.700.000</Text>
        </View>

        {/* Duplicate card for demo */}
        <View style={styles.ticketCard}>
          <View style={styles.airlineStrip}>
            <Text style={styles.airlineText}>AIRLINES</Text>
            <Text style={styles.airplane}>✈️</Text>
          </View>

          <View style={styles.ticketInfo}>
            <View>
              <Text style={styles.code}>NL</Text>
              <Text style={styles.city}>Rotterdam</Text>
              <Text style={styles.time}>5:30pm</Text>
              <Text style={styles.date}>Mon, 23 Jun</Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.code}>IDN</Text>
              <Text style={styles.city}>Labuan Bajo</Text>
              <Text style={styles.time}>3:30am</Text>
              <Text style={styles.date}>Tue, 24 Jun</Text>
            </View>
          </View>

          <Text style={styles.price}>Rp. 1.500.000</Text>
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
  container: { flex: 1, backgroundColor: "#f9f6ef" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backArrow: { fontSize: 22 },
  menu: { fontSize: 20 },
  title: { fontSize: 20, fontWeight: "bold" },

  locationRow: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  subText: { color: "#999", fontSize: 12 },
  location: { fontSize: 18, fontWeight: "bold", marginTop: 4 },

  tabRow: {
    flexDirection: "row",
    marginTop: 15,
    paddingHorizontal: 20,
  },
  tab: {
    backgroundColor: "#f0f0e9",
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  tabText: { color: "#555" },
  activeTab: { backgroundColor: "#FF7B4E" },
  activeTabText: { color: "#fff", fontWeight: "bold" },

  dateContainer: { marginTop: 20, paddingHorizontal: 20 },
  dateTitle: { fontWeight: "bold", fontSize: 16 },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  dateBox: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#fff",
  },
  activeDateBox: { backgroundColor: "#FF7B4E" },
  dateText: { color: "#888", fontWeight: "500" },
  dateNumber: { color: "#000", fontWeight: "bold", fontSize: 16 },
  activeDateText: { color: "#fff" },

  ticketHeader: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  ticketHeaderText: { fontWeight: "bold", fontSize: 16 },

  ticketCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 20,
    padding: 15,
    flexDirection: "column",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  airlineStrip: {
    backgroundColor: "#FF7B4E",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 12,
  },
  airlineText: { color: "#fff", fontWeight: "bold", fontSize: 12 },
  airplane: { color: "#fff", fontSize: 16 },

  ticketInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  code: { fontSize: 22, fontWeight: "bold" },
  city: { color: "#999", fontSize: 12 },
  time: { fontSize: 14, fontWeight: "600", marginTop: 2 },
  date: { color: "#999", fontSize: 12 },

  price: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
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

export default TicketScreen;
