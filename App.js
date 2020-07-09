import React from 'react';
import { AppLoading } from 'expo';

import { 
  Montserrat_400Regular, 
  Montserrat_600SemiBold, 
  Montserrat_700Bold,
  useFonts 
} from '@expo-google-fonts/montserrat'

import Routes from './src/routes';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Montserrat_400Regular, 
    Montserrat_600SemiBold, 
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Routes />
  );
}