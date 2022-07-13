import { View, Text } from 'react-native';
import { NameInput, FormLabel } from './style';
import { useState } from 'react';

export function Form() {
  const [name, setName] = useState('');

  return (
    <View>
      <FormLabel>FORMULÁRIO</FormLabel>
      <Text>Seu nome</Text>
      <NameInput onChangeText={setName} value={name} />
      <Text>Sobrenome</Text>
      <NameInput />
      <Text>name: {name}</Text>
    </View>
  );
}
