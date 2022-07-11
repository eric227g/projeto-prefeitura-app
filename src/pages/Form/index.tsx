import { View, Text } from 'react-native';
import { LogButton } from 'pages/home/style';
import { useState } from 'react';
import { NameInput, FormLabel } from './style';

export var Form = function () {
  const [name, setName] = useState('');

  return (
    <View>
      <FormLabel>FORMULÁRIO</FormLabel>
      <Text>Seu nome</Text>
      <NameInput onChangeText={setName} value={name} />
      <Text>Sobrenome</Text>
      <NameInput />
      <LogButton />
      <Text>name: {name}</Text>
    </View>
  );
};
