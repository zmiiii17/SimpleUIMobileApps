import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import SearchBar from './SearchBar';
import PlanBanner from './PlanBanner';
import DestinationCard from './DestinationCard';
import BottomTabNavigator from './BottomTabNavigator';

interface Destination {
  id: string;
  image: string;
  country: string;
  city: string;
  rating: number;
  price: string;
  isFavorite: boolean;
}

const HomeScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchText, setSearchText] = useState('');
  const [destinations, setDestinations] = useState<Destination[]>([
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400',
      country: 'Indonesia',
      city: 'Labuan Bajo',
      rating: 5.0,
      price: '$4.000/pax',
      isFavorite: false,
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400',
      country: 'Italia',
      city: 'Venice',
      rating: 4.7,
      price: '$2.500/pax',
      isFavorite: false,
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      country: 'Japan',
      city: 'Tokyo',
      rating: 4.9,
      price: '$3.200/pax',
      isFavorite: true,
    },
  ]);

  const handleFavoritePress = (id: string) => {
    setDestinations(prev =>
      prev.map(dest =>
        dest.id === id ? { ...dest, isFavorite: !dest.isFavorite } : dest,
      ),
    );
  };

  const handleDestinationPress = (id: string) => {
    console.log('Destination pressed:', id);
    // Navigate to destination detail
  };

  const handleFilterPress = () => {
    console.log('Filter pressed');
    // Show filter options
  };

  const handlePlanPress = () => {
    console.log('Plan your summer pressed');
    // Navigate to planning screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, Bakt</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.heartIcon}>♥</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>8</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Plan Banner */}
        <PlanBanner title="Plan Your Summer!" onPress={handlePlanPress} />

        {/* Search Bar */}
        <SearchBar
          value={searchText}
          onChangeText={setSearchText}
          onFilterPress={handleFilterPress}
        />

        {/* Popular Destinations Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Destination Cards */}
        <View style={styles.destinationsContainer}>
          {destinations.map(destination => (
            <DestinationCard
              key={destination.id}
              image={destination.image}
              country={destination.country}
              city={destination.city}
              rating={destination.rating}
              price={destination.price}
              isFavorite={destination.isFavorite}
              onPress={() => handleDestinationPress(destination.id)}
              onFavoritePress={() => handleFavoritePress(destination.id)}
            />
          ))}
        </View>
      </ScrollView>

      {/* Bottom Tab Navigator */}
      <BottomTabNavigator activeTab={activeTab} onTabPress={setActiveTab} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  notificationButton: {
    position: 'relative',
    padding: 8,
  },
  heartIcon: {
    fontSize: 24,
    color: '#E53E3E',
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#E53E3E',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  viewAll: {
    fontSize: 14,
    color: '#A0AEC0',
    fontWeight: '500',
  },
  destinationsContainer: {
    paddingBottom: 100, // Space for bottom tab
  },
});

export default HomeScreen;
