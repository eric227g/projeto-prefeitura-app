import {
  TextEnviar,
  TextFoto,
  LogButtonFoto,
  LogButtonEnvio,
  Container,
  TextInputAdress,
  TextInputArea,
} from './style';
import { TextInput, Text, View } from 'react-native';

export default function ScreenRelato() {
  return (
    <Container>
      <Text>Endereço</Text>
      <TextInputAdress placeholder="Rua/Avenida" />
      <TextInputAdress placeholder="Bairro" />
      <Text>Descrição da situação atual</Text>
      <TextInputArea placeholder="teste" />
      <LogButtonFoto>
        <TextFoto>Carregar foto</TextFoto>
      </LogButtonFoto>
      <LogButtonEnvio>
        <TextEnviar>Enviar</TextEnviar>
      </LogButtonEnvio>
    </Container>
  );
}
