import { View, Image, Text } from "react-native"
import { ImageShapes, Logo, ButtonEntrar, TextEntrar, ButtonCadastrar, TextCadastrar, Icon,Title, Container } from './style'
import { ArrowRight } from 'phosphor-react-native'
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "routes/types";
import { useAuth } from "hooks/auth";
import { useEffect, useState } from "react";


export default function StartScren () {
  const [ Screen, setScreen ] = useState(true)
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { isUserDataPresent, user } = useAuth()
  console.log(isUserDataPresent, user)
  useEffect(() => {
    if (isUserDataPresent === true) {
      if(user !== null) {
        navigation.navigate('Home')
      } else {
        console.log("nao logou");
        setScreen(false);
      }
    }

  },[isUserDataPresent, user])

  if (!isUserDataPresent || Screen) {
    return <View><Text>Carregando</Text></View>
  }
  console.log('passou');

  return(
    <>
      <View>
        <ImageShapes source={require('../../imagens/Shapes_atualizado.png')} />

      <Logo
        source={require('../../imagens/Logo_CidadaoInforma2.png')}
      />
      </View>
      <Container>
        <ButtonEntrar
        onPress={() => navigation.navigate('Login')}
        >
          <TextEntrar >Entrar </TextEntrar>
          <Icon>
            <ArrowRight size={25} color={'#ffffff'} />
          </Icon>
        </ButtonEntrar>
        <ButtonCadastrar
        onPress={() => navigation.navigate('Registro')}
        >
          <TextCadastrar>Cadastrar </TextCadastrar>
          <Icon>
            <ArrowRight size={25} color={'#7693ff'} />
          </Icon>
        </ButtonCadastrar>
      </Container>
    </>
  )
}
