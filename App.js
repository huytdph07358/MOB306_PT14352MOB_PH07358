import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


import Login from './profile';
import List from './profile/list';
export default function App() {
  return (

    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", marginTop: 40 }}>
        <Login />
        <List />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006699',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
