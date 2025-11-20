
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Platform } from 'react-native';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';

export default function ContactScreen() {
  const socialLinks = [
    {
      id: '1',
      name: 'Instagram',
      handle: '@singleboystudio',
      url: 'https://instagram.com/singleboystudio',
      icon: '📸',
      description: 'Follow us for updates',
    },
    {
      id: '2',
      name: 'Discord',
      handle: 'Join our community',
      url: 'https://discord.gg/singleboystudio',
      icon: '💬',
      description: 'Chat with the community',
    },
    {
      id: '3',
      name: 'Website',
      handle: 'speedingfinger.com',
      url: 'https://www.speedingfinger.com',
      icon: '🌐',
      description: 'Visit our main website',
    },
  ];

  const handleLinkPress = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
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
        <Text style={styles.title}>Social Links</Text>
        <Text style={styles.subtitle}>Connect with us</Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Follow & Connect</Text>
          <Text style={styles.sectionDescription}>
            Stay updated with our latest projects, join our community, and get in touch!
          </Text>
        </View>

        {socialLinks.map((link) => (
          <TouchableOpacity
            key={link.id}
            style={styles.socialCard}
            onPress={() => handleLinkPress(link.url)}
            activeOpacity={0.7}
          >
            <View style={styles.socialIconContainer}>
              <Text style={styles.socialIcon}>{link.icon}</Text>
            </View>
            <View style={styles.socialTextContainer}>
              <Text style={styles.socialName}>{link.name}</Text>
              <Text style={styles.socialHandle}>{link.handle}</Text>
              <Text style={styles.socialDescription}>{link.description}</Text>
            </View>
            <IconSymbol
              ios_icon_name="chevron.right"
              android_material_icon_name="chevron_right"
              size={24}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        ))}

        <View style={styles.infoSection}>
          <View style={styles.infoCard}>
            <Text style={styles.infoIcon}>💡</Text>
            <Text style={styles.infoTitle}>Stay Connected</Text>
            <Text style={styles.infoText}>
              Join our community to get the latest updates, share feedback, and connect with other users of our products.
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
  socialCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  socialIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: colors.highlight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  socialIcon: {
    fontSize: 28,
  },
  socialTextContainer: {
    flex: 1,
  },
  socialName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  socialHandle: {
    fontSize: 14,
    color: colors.primary,
    marginBottom: 2,
  },
  socialDescription: {
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
});
