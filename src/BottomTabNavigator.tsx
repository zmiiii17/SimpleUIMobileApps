import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface BottomTabNavigatorProps {
  activeTab: string;
  onTabPress: (tab: string) => void;
}

const BottomTabNavigator: React.FC<BottomTabNavigatorProps> = ({
  activeTab,
  onTabPress,
}) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'bookings', label: 'Bookings', icon: '🎫' },
    { id: 'profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.id}
          style={[styles.tab, activeTab === tab.id && styles.activeTab]}
          onPress={() => onTabPress(tab.id)}
        >
          <Text
            style={[styles.icon, activeTab === tab.id && styles.activeIcon]}
          >
            {tab.icon}
          </Text>
          <Text
            style={[styles.label, activeTab === tab.id && styles.activeLabel]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#2D3748',
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#4A5568',
  },
  tab: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#4A5568',
  },
  icon: {
    fontSize: 20,
    marginBottom: 4,
    color: '#A0AEC0',
  },
  activeIcon: {
    color: '#FFFFFF',
  },
  label: {
    fontSize: 12,
    color: '#A0AEC0',
    fontWeight: '500',
  },
  activeLabel: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default BottomTabNavigator;
