// Formik x React Native example
import { Button, TextInput, View, Text } from 'react-native';
import {  Formik } from 'formik';
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
import { Container, Input, Botao } from './styles'


Yup.setLocale(pt);

const contactSchema = Yup.object().shape({
  email: Yup
      .string()
      .email()
      .required(),
  password: Yup
      .string()
      .required()
});


export default () => (

  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={contactSchema}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
      <Container>
        <Input
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          isValid={!(errors.email && touched.email)}
        />
        {errors.email && touched.email ? (
          <Text>{errors.email}</Text>
        ) : null}
        <Input
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          isValid={!(errors.password && touched.password)}
        />
        {errors.email && touched.email ? (
          <Text>{errors.password}</Text>
        ) : null}

        <Botao onPress={() => handleSubmit()} title="Submit" />
      </Container>
    )}
  </Formik>
);
