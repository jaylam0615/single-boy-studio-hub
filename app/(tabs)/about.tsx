
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import { colors } from '@/styles/commonStyles';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.subtitle}>Single Boy Studio</Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>🎮</Text>
          </View>
          <Text style={styles.studioName}>Single Boy Studio</Text>
          <Text style={styles.tagline}>Building Games, Tools & Learning Products</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Our Mission</Text>
            <Text style={styles.cardText}>
              At Single Boy Studio, we&apos;re passionate about creating engaging digital experiences. 
              From educational tools to immersive games, we build software that brings value and joy to users worldwide.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>What We Do</Text>
            <Text style={styles.cardText}>
              • Educational platforms for skill development{'\n'}
              • Web-based games and interactive experiences{'\n'}
              • Tools that enhance productivity and learning{'\n'}
              • Creative projects that push boundaries
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Our Products</Text>
            <Text style={styles.cardText}>
              <Text style={styles.bold}>SpeedingFinger</Text> - A comprehensive typing practice and language learning platform designed to help users improve their typing speed and accuracy while learning new languages.{'\n\n'}
              <Text style={styles.bold}>Idle Empire</Text> - An immersive web-based MMORPG idle game where players build their empire, collect resources, and compete with others in a persistent online world.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Get In Touch</Text>
            <Text style={styles.cardText}>
              Want to learn more or connect with us? Check out the Social tab to find us on Instagram, Discord, and our website!
            </Text>
          </View>
        </View>
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
    paddingTop: Platform.OS === 'android' ? 48 : 60,
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
    paddingBottom: 120,
  },
  section: {
    marginBottom: 24,
    alignItems: 'center',
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.highlight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  logo: {
    fontSize: 50,
  },
  studioName: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 32,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    width: '100%',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  cardText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  bold: {
    fontWeight: '700',
    color: colors.text,
  },
});
