// Formik x React Native example
import React from 'react';
import { Container, Caixa } from './style';
import { Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
import { i18n, Idioma } from '../../translate';

Idioma();

const SignupSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  senha: Yup.string().required(),
});

export default () => (
  <Formik
    initialValues={{ email: '', senha: '' }}
    validationSchema={SignupSchema}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
      <Container>
        <Caixa
          placeholder="email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          show={!(errors.email && touched.email)}
        />
        {errors.email && touched.email ? <Text>{errors.email}</Text> : null}
        <Text>{i18n.t('senha')}</Text>
        <Caixa
          placeholder="senha"
          onChangeText={handleChange('senha')}
          onBlur={handleBlur('senha')}
          value={values.senha}
          show={!(errors.senha && touched.senha)}
        />
        {errors.senha && touched.senha ? <Text>{errors.senha}</Text> : null}

        <Button onPress={() => handleSubmit()} title="Entrar" />
      </Container>
    )}
  </Formik>
);
