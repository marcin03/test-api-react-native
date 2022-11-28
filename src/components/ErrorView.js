import React from 'react';
import { StyleSheet, Text,  View, Button} from 'react-native';

export default function ErrorView({errorText, onPressReloadButton}) {
  return (
    <View style={styles.container}>
      {errorText&&<Text>{errorText}</Text>}
      {onPressReloadButton&&<Button title={"reload"} onPress={onPressReloadButton}>Reload data</Button>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});