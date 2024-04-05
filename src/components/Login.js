import React from 'react';
import { View, Button } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Ir para Tela 1" onPress={() => navigation.navigate('Tela1')} />
      <Button title="Ir para Tela 3" onPress={() => navigation.navigate('Tela3')} />
    </View>
  );
}
