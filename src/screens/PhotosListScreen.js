import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PhotosListContainer from '../containers/PhotosListContainer';

export default function PhotosListScreen({navigation}) {
  return (
    <View style={styles.container}>
      <PhotosListContainer navigation={navigation}/>
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