import React from 'react';
import { Image } from 'react-native';
import ParallaxScrollView from '../components/ParallaxScrollView';
import { ThemedText } from '../components/ThemedText';

export default function ParallaxExample() {
  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require('../assets/images/react-logo.png')}
          style={{ width: '100%', height: 250, resizeMode: 'cover' }}
        />
      }
      headerBackgroundColor={{ light: '#fff', dark: '#222' }}
    >
      <ThemedText type="title">Parallax Example</ThemedText>
      <ThemedText>This is an example of using the ParallaxScrollView component.</ThemedText>
      <ThemedText>Scroll down to see the parallax effect on the header image.</ThemedText>
      <ThemedText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.</ThemedText>
      <ThemedText>More content here...</ThemedText>
    </ParallaxScrollView>
  );
}