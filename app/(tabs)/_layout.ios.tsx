
import React from 'react';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { colors } from '@/styles/commonStyles';

export default function TabLayout() {
  return (
    <NativeTabs
      backBehavior="history"
      minimizeBehavior="preserve"
      tabBarStyle={{
        backgroundColor: colors.card,
        borderTopColor: colors.highlight,
      }}
    >
      <NativeTabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarIcon: () => (
            <NativeTabs.Icon
              ios={{
                name: 'house.fill',
                color: colors.primary,
              }}
            />
          ),
        }}
      />
      <NativeTabs.Screen
        name="news"
        options={{
          title: 'News',
          tabBarIcon: () => (
            <NativeTabs.Icon
              ios={{
                name: 'newspaper.fill',
                color: colors.primary,
              }}
            />
          ),
        }}
      />
      <NativeTabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: () => (
            <NativeTabs.Icon
              ios={{
                name: 'envelope.fill',
                color: colors.primary,
              }}
            />
          ),
        }}
      />
      <NativeTabs.Screen
        name="product"
        options={{
          href: null,
        }}
      />
    </NativeTabs>
  );
}
