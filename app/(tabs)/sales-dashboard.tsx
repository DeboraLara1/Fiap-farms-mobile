import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const products = [
  { id: '1', name: 'Soja', profit: 32000 },
  { id: '2', name: 'Milho', profit: 25000 },
  { id: '3', name: 'Café', profit: 41000 },
  { id: '4', name: 'Feijão', profit: 18000 },
  { id: '5', name: 'Trigo', profit: 22000 },
];

const sortedProducts = [...products].sort((a, b) => b.profit - a.profit);

export default function SalesDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard de Vendas</Text>
      <Text style={styles.subtitle}>Produtos por maior lucro</Text>
      <BarChart
        data={{
          labels: sortedProducts.map(p => p.name),
          datasets: [
            {
              data: sortedProducts.map(p => p.profit),
            },
          ],
        }}
        width={Dimensions.get('window').width - 32}
        height={220}
        yAxisLabel="R$ "
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0,0,0,${opacity})`,
          style: { borderRadius: 16 },
        }}
        style={{ marginVertical: 24, borderRadius: 16 }}
      />
      <FlatList
        data={sortedProducts}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productProfit}>R$ {item.profit}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#2e4d25',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 18,
    color: '#388e3c',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 3,
    elevation: 2,
  },
  productName: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
  productProfit: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
}); 