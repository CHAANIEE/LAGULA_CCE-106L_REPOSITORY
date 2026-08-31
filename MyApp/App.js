import { StyleSheet, Text, View } from 'react-native';
import StatCard from './components/StatCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chan Company Dashboard 🏢</Text>

      <StatCard
        title="👥 Total Users"
        value="1,240"
        bgColor="#4338ca"
        borderColor="#a5b4fc"
        align="center"
      />

      <StatCard
        title="💰 Revenue"
        value="$12,450"
        bgColor="#047857"
        borderColor="#6ee7b7"
        align="center"
      />

      <StatCard
        title="⚠️ Pending Issues"
        value="3"
        bgColor="#b45309"
        borderColor="#fcd34d"
        align="center"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#f8fafc',
    letterSpacing: 0.5,
  },
});