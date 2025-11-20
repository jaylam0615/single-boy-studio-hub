
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '@/styles/commonStyles';

export default function NewsScreen() {
  const newsItems = [
    {
      id: '1',
      date: 'January 2025',
      title: 'Welcome to Single Boy Studio Hub!',
      content: 'We&apos;re excited to launch our new hub app where you can access all our products in one place. Stay tuned for more updates!',
    },
    {
      id: '2',
      date: 'Coming Soon',
      title: 'New Games in Development',
      content: 'We&apos;re working on several exciting new games and tools. Follow us on social media to stay updated on our latest releases.',
    },
    {
      id: '3',
      date: 'Updates',
      title: 'Performance Improvements',
      content: 'We&apos;re constantly improving the app experience with better loading times and smoother navigation.',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>News & Updates</Text>
        <Text style={styles.subtitle}>Stay informed about our latest releases</Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {newsItems.map((item) => (
          <View key={item.id} style={styles.newsCard}>
            <Text style={styles.newsDate}>{item.date}</Text>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsContent}>{item.content}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  newsCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  newsDate: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  newsContent: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
});
