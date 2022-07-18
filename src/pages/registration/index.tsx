import { useNavigation } from '@react-navigation/core';
import { View } from 'react-native';
import { Container, CBlue, CPurple, CWhite, ContainerBox, Info, User, RegisterButton,TextRegisterButton } from './style'


export default function Registration(){

  return(
      <>
        <Container>
          <View>
            <CPurple></CPurple>
            <CBlue></CBlue>
            <CWhite></CWhite>
            <ContainerBox>
              <Info>Nome de usuario</Info>
              <User></User>
              <Info>Primeiro nome</Info>
              <User></User>
              <Info>Segundo nome</Info>
              <User></User>
              <Info>Data de nascimento</Info>
              <User></User>
            </ContainerBox>
            <View>
              <RegisterButton>
                <TextRegisterButton>Cadastrar</TextRegisterButton>
              </RegisterButton>
            </View>
          </View>
        </Container>

      </>
  )
}
