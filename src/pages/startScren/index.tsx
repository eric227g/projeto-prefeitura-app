import { View, Image, Text } from "react-native"
import { ImageShapes, Logo, ButtonEntrar, TextEntrar, ButtonCadastrar, TextCadastrar, Icon,Title, Container } from './style'
import { ArrowRight } from 'phosphor-react-native'
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "routes/types";


export default function StartScren () {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return(
    <>
      <View>
        <ImageShapes source={require('../../imagens/Shapes_atualizado.png')} />
        <Logo source={require('../../imagens/logoteste.png')} />

      </View>
      <View>
        <Title>Cidadão informa</Title>
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
