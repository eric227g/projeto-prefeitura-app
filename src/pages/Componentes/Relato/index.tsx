import {
  TextEnviar,
  TextFoto,
  LogButtonFoto,
  LogButtonEnvio,
  ViewContainer,
  ViewTop,
  Input
} from './style';
import { Text, ScrollView, View, Button, Image } from 'react-native';
import { Header } from 'pages/header';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';


export default function ScreenRelato() {
  const SignupSchema = Yup.object().shape({
    rua: Yup.string().required("este é um campo obrigatorio"),
    bairro: Yup.string().required("este é um campo obrigatorio"),
    descrição: Yup.string().required("este é um campo obrigatorio"),
  });
  const [ image, setImage ] = useState< string | null >(null)

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <>
      <ScrollView>
        <Header report="Escreva seu Relato" />
        <Formik
          initialValues={{ rua: '', bairro: '', descrição: '' }}
          onSubmit={values => alert(JSON.stringify(values, null, 2))}
          validationSchema={SignupSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <ViewTop>
              <ViewContainer>
                <Text style={{ color: '#535252' }}>Endereço</Text>
                <Input
                  placeholder='Rua/Avenida'
                  onChangeText={handleChange('rua')}
                  onBlur={handleBlur('rua')}
                  value={values.rua}
                  isValid={!(errors.rua && touched.rua)}
                />
                {errors.rua && touched.rua ? <Text>{errors.rua}</Text> : null}
                <Input
                  placeholder='Bairro'
                  onChangeText={handleChange('bairro')}
                  onBlur={handleBlur('bairro')}
                  value={values.bairro}
                  isValid={!(errors.bairro && touched.bairro)}
                />
                {errors.bairro && touched.bairro ? <Text>{errors.bairro}</Text> : null}
                <Text style={{ color: '#535252' }}>Descrição da situação atual</Text>
                <Input
                  onChangeText={handleChange('descrição')}
                  onBlur={handleBlur('descrição')}
                  secureTextEntry={true}
                  value={values.descrição}
                  isValid={!(errors.descrição && touched.descrição)}
                />
                {errors.descrição && touched.descrição ? <Text>{errors.descrição}</Text> : null}

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Button title="envie uma foto" onPress={pickImage} />
                  {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>
                <LogButtonEnvio onPress={() => handleSubmit()}>
                  <TextEnviar>Enviar</TextEnviar>
                </LogButtonEnvio>
              </ViewContainer>
            </ViewTop>
          )}
        </Formik>
      </ScrollView>
    </>
  );
}
