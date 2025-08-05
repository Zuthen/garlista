import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { WelcomePage } from './pages/WelcomePage';
import { useFonts } from 'expo-font';
import { coolors } from './colorsPalette';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Quicksand': require('./assets/fonts/Quicksand-VariableFont_wght.ttf'),
    'AmaticSC-Bold': require('./assets/fonts/AmaticSC-Bold.ttf'),
  });


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {
          fontsLoaded
            ? < WelcomePage />
            : <ActivityIndicator size="large" color="#7B3F00" />
        }
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: coolors.nyanza,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
