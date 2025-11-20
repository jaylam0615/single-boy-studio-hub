
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
    },
    {
      id: '2',
      name: 'Discord',
      handle: 'Join our community',
      url: 'https://discord.gg/singleboystudio',
      icon: '💬',
    },
    {
      id: '3',
      name: 'Website',
      handle: 'singleboystudio.com',
      url: 'https://singleboystudio.com',
      icon: '🌐',
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
        <Text style={styles.title}>Contact & Socials</Text>
        <Text style={styles.subtitle}>Connect with Single Boy Studio</Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Follow Us</Text>
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
              </View>
              <IconSymbol
                ios_icon_name="chevron.right"
                android_material_icon_name="chevron_right"
                size={24}
                color={colors.textSecondary}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutText}>
              Single Boy Studio is dedicated to creating engaging games, tools, and web experiences. 
              We&apos;re passionate about building quality software that brings joy to users around the world.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutText}>
              For support inquiries, please reach out to us through our social media channels or visit our website.
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
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
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
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: colors.highlight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  socialIcon: {
    fontSize: 24,
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
    color: colors.textSecondary,
  },
  aboutCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    elevation: 4,
  },
  aboutText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
});
