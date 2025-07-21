import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const productions = [
  { id: '1', name: 'Soja', status: 'Em produção' },
  { id: '2', name: 'Milho', status: 'Aguardando' },
  { id: '3', name: 'Café', status: 'Já colhido' },
  { id: '4', name: 'Feijão', status: 'Em produção' },
  { id: '5', name: 'Trigo', status: 'Aguardando' },
];

const statusColors: Record<string, string> = {
  'Aguardando': '#FFA500', 
  'Em produção': '#007AFF',
  'Já colhido': '#28A745', 
};

const statusIcons: Record<string, string> = {
  'Aguardando': 'hourglass-empty',
  'Em produção': 'agriculture',
  'Já colhido': 'check-circle',
};

export default function ProductionDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard de Produção</Text>
      <Text style={styles.subtitle}>Status das culturas</Text>
      <FlatList
        data={productions}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.productName}>{item.name}</Text>
            <View style={styles.statusContainer}>
              <MaterialIcons
                name={statusIcons[item.status] as any}
                size={22}
                color={statusColors[item.status]}
                style={{ marginRight: 6 }}
              />
              <View style={[styles.badge, { backgroundColor: statusColors[item.status] }]}> 
                <Text style={styles.badgeText}>{item.status}</Text>
              </View>
            </View>
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
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 7,
    marginLeft: 8,
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 