import React from 'react';
import { View, Button } from 'react-native';

export default function Cadastro({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Ir para Tela 2" onPress={() => navigation.navigate('Tela2')} />
      <Button title="Ir para Tela 3" onPress={() => navigation.navigate('Tela3')} />
    </View>
  );
}