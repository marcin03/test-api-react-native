import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, FlatList, View, TouchableOpacity } from 'react-native';
import ErrorView from '../components/ErrorView';
import  ItemDivider  from '../components/ItemDivider';
import PhotoItemPreview from '../components/PhotoItemPreview';
import { REST_API_URL } from '../constants';

export default function PhotosListContainer({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const getPhotosData = async () => {
     try {
      const response = await fetch(REST_API_URL);
      const json = await response.json();
      setData(json);
      if(error) setError(null);
    } catch (exception) {
      setError(exception.message)
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
      {error!=null && <ErrorView 
        errorText={error} 
        onPressReloadButton={()=>{
          getPhotosData();
          setError(null);
        }}
      />}
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemDivider}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 12,
  },
});