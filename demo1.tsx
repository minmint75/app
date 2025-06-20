import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const BatmanMoviesList = () => {
  const movies = [
    {
      id: 1,
      title: 'Batman v Superman: Dawn of Justice (2016)',
      poster: require('../assets/images/bvs.jpg'), 
    },
    {
      id: 2,
      title: 'Batman (1989)',
      poster: require('../assets/images/batman1989.jpg'),
    },
    {
      id: 3,
      title: 'Batman Returns (1992)',
      poster: require('../assets/images/batmanreturns.jpg'),
    },
    {
      id: 4,
      title: 'Batman Forever (1995)',
      poster: require('../assets/images/batmanforever.jpg'),
    },
    {
      id: 5,
      title: 'Batman & Robin (1997)',
      poster: require('../assets/images/batmanrobin.jpg'),
    },
    {
      id: 6,
      title: 'Batman: The Animated Series (1992-1995)',
      poster: require('../assets/images/batmananimated.jpg'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {movies.map((movie) => (
          <TouchableOpacity key={movie.id} style={styles.movieItem}>
            <Image source={movie.poster} style={styles.poster} />
            <View style={styles.movieInfo}>
              <Text style={styles.movieTitle}>{movie.title}</Text>
            </View>
            <Ionicons 
              name="chevron-forward" 
              size={24} 
              color="#666" 
              style={styles.chevron}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  movieItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  poster: {
    width: 60,
    height: 90,
    borderRadius: 4,
    marginRight: 16,
  },
  movieInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    lineHeight: 22,
  },
  chevron: {
    marginLeft: 8,
  },
});

export default BatmanMoviesList;