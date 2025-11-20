
import React from 'react';
import { Stack } from 'expo-router';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';

export default function TabLayout() {
  const tabs: TabBarItem[] = [
    {
      name: '(home)',
      route: '/(tabs)/(home)/',
      icon: 'home',
      label: 'Home',
    },
    {
      name: 'news',
      route: '/(tabs)/news',
      icon: 'newspaper',
      label: 'News',
    },
    {
      name: 'contact',
      route: '/(tabs)/contact',
      icon: 'mail',
      label: 'Contact',
    },
  ];

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        <Stack.Screen key="home" name="(home)" />
        <Stack.Screen key="news" name="news" />
        <Stack.Screen key="contact" name="contact" />
        <Stack.Screen 
          key="product" 
          name="product"
          options={{
            animation: 'slide_from_right',
          }}
        />
      </Stack>
      <FloatingTabBar tabs={tabs} />
    </>
  );
}
