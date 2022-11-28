import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, FlatList, View, TouchableOpacity } from 'react-native';
import PhotoItemPreview from '../components/PhotoItemPreview';
import { REST_API_URL } from '../constants';

export default function PhotosListContainer({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [errorOccured, setErrorOccured] = useState(false);
  const [data, setData] = useState([]);

  const getPhotosData = async () => {
     try {
      const response = await fetch(REST_API_URL);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error("error: ",error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPhotosData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('PhotoDetailsScreen', {photoItem:{...item}})}>
      <PhotoItemPreview photoItem={item}/>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      )}
      {errorOccured&&<Text>Error Occured Text</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12
  },
});