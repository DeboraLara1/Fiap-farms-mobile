import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function Dashboard() {
  const router = useRouter();

  const vendasTotais = 100000;
  const producaoTotal = 50000;
  const metasBatidas = 3;

  return (
    <View style={styles.container}>
      <View style={{ height: 32 }} />
      <Text style={styles.title}>Dashboard Geral</Text>
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <MaterialIcons name="attach-money" size={48} color="#388e3c" style={styles.cardIcon} />
          <Text style={styles.cardLabel}>Vendas Totais</Text>
          <Text style={[styles.cardValue, { color: '#388e3c' }]}>R$ {vendasTotais.toLocaleString()}</Text>
        </View>
        <View style={styles.card}>
          <MaterialIcons name="agriculture" size={48} color="#fbc02d" style={styles.cardIcon} />
          <Text style={styles.cardLabel}>Produção Total</Text>
          <Text style={[styles.cardValue, { color: '#fbc02d' }]}>{producaoTotal.toLocaleString()} kg</Text>
        </View>
        <View style={styles.card}>
          <MaterialIcons name="check-circle" size={48} color="#28A745" style={styles.cardIcon} />
          <Text style={styles.cardLabel}>Metas Batidas</Text>
          <Text style={[styles.cardValue, { color: '#28A745' }]}>{metasBatidas}</Text>
        </View>
      </View>
      <Text style={styles.subtitle}>Acessos rápidos</Text>
      <View style={styles.quickAccessGrid}>
        <TouchableOpacity style={styles.quickButton} onPress={() => router.push('/(tabs)/sales-dashboard')}>
          <MaterialIcons name="bar-chart" size={36} color="#388e3c" />
          <Text style={styles.quickText}>Vendas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickButton} onPress={() => router.push('/(tabs)/production-dashboard')}>
          <MaterialIcons name="agriculture" size={36} color="#fbc02d" />
          <Text style={styles.quickText}>Produção</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickButton} onPress={() => router.push('/(tabs)/inventory-sales')}>
          <MaterialIcons name="inventory" size={36} color="#8bc34a" />
          <Text style={styles.quickText}>Estoque</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickButton} onPress={() => router.push('/(tabs)/goals')}>
          <MaterialIcons name="flag" size={36} color="#0288d1" />
          <Text style={styles.quickText}>Metas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const cardWidth = (Dimensions.get('window').width - 56) / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#2e4d25',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  card: {
    width: cardWidth,
    backgroundColor: '#fff',
    borderRadius: 22,
    paddingVertical: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 4,
  },
  cardIcon: {
    marginBottom: 10,
  },
  cardLabel: {
    fontSize: 16,
    color: '#555',
    marginTop: 6,
    fontWeight: '600',
  },
  cardValue: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 8,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2e4d25',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  quickAccessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 12,
    gap: 12,
  },
  quickButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 22,
    width: (Dimensions.get('window').width - 56) / 2,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 3,
    elevation: 2,
  },
  quickText: {
    marginTop: 8,
    fontSize: 17,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.2,
  },
}); 