import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PhotoItemView from '../components/PhotoItemView';

export default function PhotoDetailsScreen({ route }) {
  return (
    <View style={styles.container}>
      <PhotoItemView photoItem={route.params.photoItem}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});