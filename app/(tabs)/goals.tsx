import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const produtos = ['Soja', 'Milho', 'Café', 'Feijão', 'Trigo'];

const mockMetas = [
  { id: '1', tipo: 'Venda', produto: 'Soja', meta: 100, atual: 120 },
  { id: '2', tipo: 'Produção', produto: 'Milho', meta: 200, atual: 150 },
  { id: '3', tipo: 'Venda', produto: 'Café', meta: 50, atual: 50 },
];

export default function Goals() {
  const [tipo, setTipo] = useState<'Venda' | 'Produção'>('Venda');
  const [produto, setProduto] = useState(produtos[0]);
  const [meta, setMeta] = useState('');
  const [metas, setMetas] = useState(mockMetas);

  const handleAdd = () => {
    if (!meta) {
      Alert.alert('Preencha o valor da meta!');
      return;
    }
    const nova = {
      id: (metas.length + 1).toString(),
      tipo,
      produto,
      meta: Number(meta),
      atual: 0,
    };
    setMetas([nova, ...metas]);
    setMeta('');
  };

  const checkMeta = (item: typeof mockMetas[0]) => {
    if (item.atual >= item.meta) {
      Alert.alert('Meta atingida!', `A meta de ${item.tipo.toLowerCase()} para ${item.produto} foi atingida!`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metas e Notificações</Text>
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
        <Text style={styles.label}>Valor da meta</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={meta}
          onChangeText={setMeta}
          placeholder="Digite a meta"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>Adicionar meta</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>Metas atuais</Text>
      <FlatList
        data={metas}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 16 }}
        renderItem={({ item }) => {
          const batida = item.atual >= item.meta;
          return (
            <View style={styles.card}>
              <Text style={styles.itemText}>
                [{item.tipo}] {item.produto} - Meta: {item.meta} | Atual: {item.atual}
              </Text>
              <View style={[styles.badge, { backgroundColor: batida ? '#28A745' : '#FFA500' }]}
                >
                <Text style={styles.badgeText} onPress={() => checkMeta(item)}>
                  {batida ? 'Meta batida!' : 'Aguardando...'}
                </Text>
              </View>
            </View>
          );
        }}
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
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 3,
    elevation: 2,
  },
  itemText: {
    fontSize: 17,
    color: '#333',
    fontWeight: '500',
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