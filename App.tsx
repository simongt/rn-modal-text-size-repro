import React from 'react';
import { Modal, StyleSheet, Text, TextInput, View } from 'react-native';

function Form() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>New order</Text>
      <Text style={styles.label}>Date</Text>
      <Text style={styles.body}>Oct 30, 2026</Text>
      <Text style={styles.label}>Amount</Text>
      <View style={styles.amountRow}>
        <Text style={styles.body}>$</Text>
        <TextInput style={styles.amount} defaultValue="0.00" />
      </View>
      <TextInput style={styles.input} placeholder="Add a note" />
    </View>
  );
}

export default function App() {
  return (
    <Modal visible animationType="none">
      <Form />
    </Modal>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: { fontSize: 28, fontWeight: '700' },
  label: { fontSize: 14, fontWeight: '600', marginTop: 16 },
  body: { fontSize: 16 },
  amountRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  amount: { flex: 1, fontSize: 16, marginLeft: 4 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
    fontSize: 16,
  },
});
