import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface DestinationCardProps {
  image: string;
  country: string;
  city: string;
  rating: number;
  price: string;
  isFavorite?: boolean;
  onPress?: () => void;
  onFavoritePress?: () => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  image,
  country,
  city,
  rating,
  price,
  isFavorite = false,
  onPress,
  onFavoritePress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />

        {/* Favorite Button */}
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={onFavoritePress}
        >
          <Text
            style={[styles.favoriteIcon, isFavorite && styles.favoriteActive]}
          >
            ♥
          </Text>
        </TouchableOpacity>

        {/* Location Info */}
        <View style={styles.locationContainer}>
          <Text style={styles.locationIcon}>📍</Text>
          <View>
            <Text style={styles.country}>{country}</Text>
            <Text style={styles.city}>{city}</Text>
          </View>
        </View>

        {/* Rating and Price */}
        <View style={styles.infoContainer}>
          <View style={styles.ratingContainer}>
            <Text style={styles.starIcon}>⭐</Text>
            <Text style={styles.rating}>{rating}</Text>
          </View>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EFE9',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteIcon: {
    fontSize: 18,
    color: '#A0AEC0',
  },
  favoriteActive: {
    color: '#E53E3E',
  },
  locationContainer: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  locationIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  country: {
    fontSize: 12,
    color: '#4A5568',
    fontWeight: '500',
  },
  city: {
    fontSize: 14,
    color: '#2D3748',
    fontWeight: 'bold',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    alignItems: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  starIcon: {
    fontSize: 12,
    marginRight: 2,
  },
  rating: {
    fontSize: 12,
    color: '#2D3748',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 12,
    color: '#2D3748',
    fontWeight: 'bold',
  },
});

export default DestinationCard;
