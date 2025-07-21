import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const produtos = ['Soja', 'Milho', 'Café', 'Feijão', 'Trigo'];

const mockLancamentos = [
  { id: '1', tipo: 'Venda', produto: 'Soja', quantidade: 100, valor: 3200 },
  { id: '2', tipo: 'Produção', produto: 'Milho', quantidade: 200 },
  { id: '3', tipo: 'Venda', produto: 'Café', quantidade: 50, valor: 4100 },
];

export default function InventorySales() {
  const [tipo, setTipo] = useState<'Venda' | 'Produção'>('Venda');
  const [produto, setProduto] = useState(produtos[0]);
  const [quantidade, setQuantidade] = useState('');
  const [valor, setValor] = useState('');
  const [lancamentos, setLancamentos] = useState(mockLancamentos);

  const handleAdd = () => {
    if (!quantidade || (tipo === 'Venda' && !valor)) {
      Alert.alert('Preencha todos os campos!');
      return;
    }
    const novo = {
      id: (lancamentos.length + 1).toString(),
      tipo,
      produto,
      quantidade: Number(quantidade),
      ...(tipo === 'Venda' ? { valor: Number(valor) } : {}),
    };
    setLancamentos([novo, ...lancamentos]);
    setQuantidade('');
    setValor('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Estoque/Vendas</Text>
      <View style={styles.formCard}>
        <View style={styles.switchContainer}>
          <TouchableOpacity
            style={[styles.switchButton, tipo === 'Venda' && styles.switchButtonActive]}
            onPress={() => setTipo('Venda')}
          >
            <Text style={[styles.switchButtonText, tipo === 'Venda' && styles.switchButtonTextActive]}>Venda</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.switchButton, tipo === 'Produção' && styles.switchButtonActive]}
            onPress={() => setTipo('Produção')}
          >
            <Text style={[styles.switchButtonText, tipo === 'Produção' && styles.switchButtonTextActive]}>Produção</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Produto</Text>
        <View style={styles.pickerContainer}>
          {produtos.map((p) => (
            <TouchableOpacity
              key={p}
              style={[styles.pickerButton, produto === p && styles.pickerButtonActive]}
              onPress={() => setProduto(p)}
            >
              <Text style={[styles.pickerButtonText, produto === p && styles.pickerButtonTextActive]}>{p}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.label}>Quantidade</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={quantidade}
          onChangeText={setQuantidade}
          placeholder="Digite a quantidade"
          placeholderTextColor="#aaa"
        />
        {tipo === 'Venda' && (
          <>
            <Text style={styles.label}>Valor total (R$)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={valor}
              onChangeText={setValor}
              placeholder="Digite o valor da venda"
              placeholderTextColor="#aaa"
            />
          </>
        )}
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>Lançamentos recentes</Text>
      <FlatList
        data={lancamentos}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 16 }}
        renderItem={({ item }) => (
          <View style={styles.launchCard}>
            <View style={styles.launchRow}>
              <MaterialIcons
                name={item.tipo === 'Venda' ? 'attach-money' : 'agriculture'}
                size={28}
                color={item.tipo === 'Venda' ? '#388e3c' : '#fbc02d'}
                style={{ marginRight: 10 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.launchProduct}>{item.produto}</Text>
                <View style={styles.launchInfoRow}>
                  <Text style={styles.launchInfo}>Qtd: {item.quantidade}</Text>
                  {item.tipo === 'Venda' && (
                    <Text style={styles.launchInfo}>Valor: <Text style={styles.launchValue}>R$ {item.valor}</Text></Text>
                  )}
                </View>
              </View>
              <View style={[styles.badge, { backgroundColor: item.tipo === 'Venda' ? '#388e3c' : '#fbc02d' }] }>
                <Text style={styles.badgeText}>{item.tipo}</Text>
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
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 3,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
  },
  switchButton: {
    flex: 1,
    paddingVertical: 14,
    marginHorizontal: 6,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  switchButtonActive: {
    backgroundColor: '#8bc34a',
  },
  switchButtonText: {
    textAlign: 'center',
    color: '#555',
    fontWeight: 'bold',
    fontSize: 17,
  },
  switchButtonTextActive: {
    color: '#fff',
  },
  pickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 14,
    justifyContent: 'center',
  },
  pickerButton: {
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    margin: 6,
  },
  pickerButtonActive: {
    backgroundColor: '#fbc02d',
  },
  pickerButtonText: {
    color: '#555',
    fontWeight: 'bold',
    fontSize: 16,
  },
  pickerButtonTextActive: {
    color: '#fff',
  },
  label: {
    fontSize: 17,
    marginTop: 10,
    marginBottom: 6,
    color: '#2e4d25',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 16,
    height: 48,
    marginBottom: 10,
    fontSize: 17,
    backgroundColor: '#f9fbe7',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#388e3c',
    borderRadius: 10,
    paddingVertical: 16,
    marginTop: 10,
    marginBottom: 6,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 12,
    color: '#2e4d25',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  list: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 3,
    elevation: 2,
  },
  item: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 17,
    color: '#333',
    fontWeight: '500',
  },
  launchCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 3,
    elevation: 2,
  },
  launchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  launchProduct: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e4d25',
    marginBottom: 2,
  },
  launchInfoRow: {
    flexDirection: 'row',
    gap: 16,
  },
  launchInfo: {
    fontSize: 15,
    color: '#555',
    marginRight: 10,
  },
  launchValue: {
    fontWeight: 'bold',
    color: '#388e3c',
    fontSize: 16,
  },
  badge: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
}); 