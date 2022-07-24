import {
  TextEnviar,
  TextFoto,
  LogButtonFoto,
  LogButtonEnvio,
  Container,
  TextInputAdress,
  TextInputArea,
  ImageBackgroundShape,
  ViewContainer,
} from './style';
import { TextInput, Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Header } from 'pages/header';

export default function ScreenRelato() {
  return (
    <>
      <ViewContainer>
        <Header report="Escreva seu relato" />
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
            <ImageBackgroundShape source={require('../../../imagens/ButtonColors.png')}>
              <TextEnviar>Enviar</TextEnviar>
            </ImageBackgroundShape>
          </LogButtonEnvio>
        </Container>
      </ViewContainer>
    </>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     justifyContent: 'center',
//     // alignItems: 'center',
//   },
//   subContainer: {
//     flex: 0.5,
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: '#ff066',
//   },
// });
