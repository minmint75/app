import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const StockApp = () => {
  const stockData = {
    symbol: 'SET',
    price: '9,999.99',
    change: '+115.23',
    changePercent: '0.56%'
  };

  const stockIndices = [
    'SET', 'S&P', 'NASDAQ',
    'Dow Jones', 'Shanghai', 'Nikkei',
    'Hang Sang', 'TSEC', 'EURO'
  ];

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.mainDisplay}>
        <Text style={styles.symbolText}>{stockData.symbol}</Text>
        <Text style={styles.priceText}>{stockData.price}</Text>
        <Text style={styles.changeText}>
          {stockData.change} ({stockData.changePercent})
        </Text>
      </View>

      
      <View style={styles.gridContainer}>
        {stockIndices.map((index, i) => (
          <TouchableOpacity key={i} style={styles.gridButton}>
            <Text style={styles.gridButtonText}>{index}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB6C1', 
  },
  mainDisplay: {
    backgroundColor: '#FFFF00', 
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  symbolText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  priceText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  changeText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  gridButton: {
    width: '30%',
    backgroundColor: '#D3D3D3', 
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#999',
  },
  gridButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});

export default StockApp;