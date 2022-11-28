import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PhotosListContainer from '../containers/PhotosListContainer';

export default function PhotosListScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate('PhotoDetailsScreen')}       >
        <Text>Go to photo details</Text>
      </TouchableOpacity>
        <PhotosListContainer/>
      <Text>PhotosListScreenaaaa:-)</Text>
      
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