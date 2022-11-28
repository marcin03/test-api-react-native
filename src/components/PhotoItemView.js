import React from 'react';
import { StyleSheet, Text,  View } from 'react-native';
import WebView from 'react-native-webview';

export default function PhotoItemView({photoItem}) {
  
  return (
    <View style={styles.container}>
      <Text>albumId: {photoItem.albumId},</Text>
      <Text>id: {photoItem.id},</Text>
      <Text>title: {photoItem.title},</Text>
      <Text>url: {photoItem.url},</Text>
      <Text>thumbnailUrl: {photoItem.thumbnailUrl},</Text>
      {/*WebView is workaround because using Image from react-native images is not visible*/}
      <WebView
        source={{uri: photoItem.url}}
        containerStyle={{flex:0, width:300,height:300}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});