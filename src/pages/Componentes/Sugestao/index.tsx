import {
  Container,
  TextFonte,
  LogButtonEnvio,
  TextEnvio,
  RatingStar,
  ViewContainerSugestao,
  ViewHead,
  TextFieldCampo
} from './style';
import { Rating } from 'react-native-ratings';
import { Header } from 'pages/header';
import { ScrollView, View, Text } from 'react-native';
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
import { Formik } from 'formik';
import { Input } from 'pages/Login/style';

Yup.setLocale(pt);

const SignupSchema = Yup.object().shape({
  sugestaoUser: Yup.string()
});
export default function Sugestao() {
  return (
    <>
      <ScrollView>
        <ViewHead>
          <Header report="Escreva sua Sugestão" />
        </ViewHead>
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
            <Formik
              initialValues={{ sugestaoUser: '' }}
              onSubmit={values => alert(JSON.stringify(values, null, 2))}
              validationSchema={SignupSchema}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <Container>
                  <TextFonte>Escreva sua sugestão para prefeitura</TextFonte>
                  <TextFieldCampo
                    onChangeText={handleChange('sugestaoUser')}
                    onBlur={handleBlur('sugestaoUser')}
                    value={values.sugestaoUser}
                  />
                  <LogButtonEnvio>
                    <TextEnvio>Enviar</TextEnvio>
                  </LogButtonEnvio>
                </Container>
              )}
            </Formik>
          </Container>
        </ViewContainerSugestao>
      </ScrollView>
    </>
  )
}
