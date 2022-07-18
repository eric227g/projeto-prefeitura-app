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
import { Header } from 'pages/header';

export default function ScreenRelato() {
  return (
    <>
      <Header report='Escreva seu relato' />
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
    </>
  );
}
