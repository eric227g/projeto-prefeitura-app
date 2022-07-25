import {
  Container,
  TextFonte,
  LogButtonEnvio,
  TextEnvio,
  TextFieldCampo,
  RatingStar,
  ViewContainerSugestao,
} from './style';
import { Rating } from 'react-native-ratings';
import { Header } from 'pages/header';
import { ScrollView, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';

Yup.setLocale(pt);

const SignupSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  senha: Yup.string().required(),
});

export default function ScreenSugestao() {
  return (
    <>
      <ScrollView>
        <View>
          <Header report="Escreva seu relato" />
        </View>
        <ViewContainerSugestao>
          <Container>
            <TextFonte>Avaliação do aplicativo</TextFonte>
            <RatingStar>
              <Rating
                type="star"
                ratingBackgroundColor="red"
                tintColor="#f6f6f6"
                ratingCount={5}
                imageSize={20}
                showRating
              />
            </RatingStar>
            <TextFonte>Avaliação da prefeitura em geral</TextFonte>
            <RatingStar>
              <Rating
                type="star"
                ratingBackgroundColor="red"
                tintColor="#f6f6f6"
                ratingCount={5}
                imageSize={20}
                showRating
              />
            </RatingStar>
            <TextFonte>Escreva sua sugestão para prefeitura</TextFonte>
            <TextFieldCampo placeholder="Campo de texto" />
            <LogButtonEnvio>
              <TextEnvio>Enviar</TextEnvio>
            </LogButtonEnvio>
          </Container>
        </ViewContainerSugestao>
      </ScrollView>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
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
