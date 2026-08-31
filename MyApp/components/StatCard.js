import { StyleSheet, Text, View } from 'react-native';

export default function StatCard(props) {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: props.bgColor,
          borderColor: props.borderColor || 'rgba(255,255,255,0.25)',
          borderWidth: props.borderWidth ?? 1.5,
          borderRadius: props.borderRadius ?? 16,
        },
      ]}
    >
      <View style={styles.titleRow}>
        {props.emoji && <Text style={styles.emoji}>{props.emoji}</Text>}
        <Text
          style={[
            styles.title,
            { textAlign: props.align || 'center' },
          ]}
        >
          {props.title}
        </Text>
      </View>
      <Text
        style={[
          styles.value,
          { textAlign: props.align || 'center' },
        ]}
      >
        {props.value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  emoji: {
    fontSize: 18,
    marginRight: 6,
  },
  title: {
    fontSize: 15,
    color: '#f1f5f9',
    fontWeight: '600',
    letterSpacing: 0.3,
    flex: 1,
  },
  value: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: '800',
    marginTop: 6,
  },
});