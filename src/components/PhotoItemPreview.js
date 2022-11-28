import React, { useEffect, useState } from 'react';
import { StyleSheet, Text,  View } from 'react-native';
import WebView from 'react-native-webview';

export default function PhotoItemPreview({photoItem}) {
  
  return (
    <View style={styles.container}>
      {/*WebView is workaround because using Image from react-native images is not visible*/}
        <WebView
          source={{uri: photoItem.thumbnailUrl}}
          containerStyle={{flex:0, width:150,height:150}}
        />
        <Text>{photoItem.title},</Text>
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