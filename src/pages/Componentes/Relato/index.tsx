import {
  TextEnviar,
  TextFoto,
  LogButtonFoto,
  LogButtonEnvio,
  Container,
  TextInputAdress,
  TextInputArea,
  ViewContainer,
  ViewHead,
} from './style';
import { TextInput, Text, View, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import { Header } from 'pages/header';
import { getDatabase, ref, onValue, set } from 'firebase/database';

// function StoreDataScreenRelato(endereço, descricao, foto) {
//   const db = getDatabase();
//   const reference = ref(db, 'users/' + endereco);
// }

export default function ScreenRelato() {
  // const SendRelatoToFirebase = () => StoreDataScreenRelato;

  return (
    <>
      <ScrollView>
        <ViewHead>
          <Header report="Escreva seu Relato" />
        </ViewHead>
        <ViewContainer>
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
        </ViewContainer>
      </ScrollView>
    </>
  );
}
