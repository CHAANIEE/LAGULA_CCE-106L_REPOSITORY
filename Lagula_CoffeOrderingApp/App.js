import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [coffeeCount, setCoffeeCount] = useState(0);

  const addCoffee = () => {
    setCoffeeCount(coffeeCount + 1);
  };

  const removeCoffee = () => {
    if (coffeeCount > 0) {
      setCoffeeCount(coffeeCount - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coffee Counter ☕</Text>

      <Text style={styles.count}>{coffeeCount}</Text>

      <Text style={styles.title1}>Press add to count Coffee</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.removeButton} onPress={removeCoffee}>
          <Text style={styles.buttonText}>− Remove</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} onPress={addCoffee}>
          <Text style={styles.buttonText}>+ Add</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#5C4033',
  },
  title1: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#5C4033',
  },

  count: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#3E2723',
    marginBottom: 30,
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
  },

  addButton: {
    backgroundColor: '#6F4E37',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  removeButton: {
    backgroundColor: '#A0522D',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});