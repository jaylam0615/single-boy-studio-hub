
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Platform } from 'react-native';
import { colors } from '@/styles/commonStyles';

export default function ContactScreen() {
  const externalLinks = [
    {
      id: '1',
      name: 'Instagram',
      handle: 'single boy_studio',
      url: 'https://instagram.com/single_boy_studio',
      icon: '📸',
      description: 'Follow us for updates',
    },
    {
      id: '2',
      name: 'Discord',
      handle: 'Join our community',
      url: 'https://discord.gg/YwrFtyMg7V',
      icon: '💬',
      description: 'Chat with the community',
    },
    {
      id: '3',
      name: 'SpeedingFinger',
      handle: 'speedingfinger.com',
      url: 'https://www.speedingfinger.com',
      icon: '⌨️',
      description: 'Typing practice and language learning',
    },
    {
      id: '4',
      name: 'Idle Empire',
      handle: 'idle-empire.base44.app',
      url: 'https://idle-empire-33e48bc6.base44.app',
      icon: '👑',
      description: 'Web-based MMORPG idle game',
    },
  ];

  const handleLinkPress = async (url: string, name: string) => {
    try {
      console.log('Opening external link:', url);
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
        console.log('Successfully opened:', name);
      } else {
        console.log('Cannot open URL:', url);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>External Links</Text>
        <Text style={styles.subtitle}>Connect with us and explore our products</Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Follow & Connect</Text>
          <Text style={styles.sectionDescription}>
            Stay updated with our latest projects, join our community, and explore our products in your browser!
          </Text>
        </View>

        {externalLinks.map((link) => (
          <TouchableOpacity
            key={link.id}
            style={styles.linkCard}
            onPress={() => handleLinkPress(link.url, link.name)}
            activeOpacity={0.7}
          >
            <View style={styles.linkIconContainer}>
              <Text style={styles.linkIcon}>{link.icon}</Text>
            </View>
            <View style={styles.linkTextContainer}>
              <Text style={styles.linkName}>{link.name}</Text>
              <Text style={styles.linkHandle}>{link.handle}</Text>
              <Text style={styles.linkDescription}>{link.description}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.infoSection}>
          <View style={styles.infoCard}>
            <Text style={styles.infoIcon}>📱</Text>
            <Text style={styles.infoTitle}>Add to Home Screen</Text>
            <Text style={styles.infoText}>
              For the best experience, add this app to your home screen!{'\n\n'}
              <Text style={styles.bold}>How to add:</Text>{'\n'}
              1. Tap the share button at the bottom of the screen (middle button){'\n'}
              2. Scroll down and tap &quot;Add to Home Screen&quot;{'\n'}
              3. Tap &quot;Add&quot; to confirm{'\n\n'}
              Note: By default, this app opens in webpage format. Adding it to your home screen gives you quick access!
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoIcon}>🌐</Text>
            <Text style={styles.infoTitle}>Open in Browser</Text>
            <Text style={styles.infoText}>
              Tap any link above to open it in your device&apos;s default browser for the full experience.
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
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  linkCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  linkIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: colors.highlight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  linkIcon: {
    fontSize: 28,
  },
  linkTextContainer: {
    flex: 1,
  },
  linkName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  linkHandle: {
    fontSize: 14,
    color: colors.primary,
    marginBottom: 2,
  },
  linkDescription: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  infoSection: {
    marginTop: 24,
  },
  infoCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  infoIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    textAlign: 'center',
  },
  bold: {
    fontWeight: '700',
    color: colors.text,
  },
});
