import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ActivityIndicator, FlatList, View, Image } from 'react-native';
import WebView from 'react-native-webview';
import { REST_API_URL } from '../constants';

export default function PhotosListContainer() {
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
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      {/*WebView is workaround because using Image from react-native images is not visible*/}
        <WebView
          source={{uri: item.thumbnailUrl}}
          containerStyle={{flex:0, width:150,height:150}}
        />
        <Text>{item.title},</Text>
      </View>
    
  );

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      )}
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