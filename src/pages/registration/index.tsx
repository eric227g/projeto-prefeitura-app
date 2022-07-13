import InfoProfile from 'pages/infoProfile';
import { View, Text } from 'react-native';
import { Container, CBlue, CPurple, CWhite } from './style'


export default function Registration(){
  return(
      <>
        <Container>
          <View>
            <CPurple></CPurple>
            <CBlue></CBlue>
            <CWhite></CWhite>
          </View>
          <View>
            <InfoProfile nameUser='anonimo' firstName='gabriel' secundName='poyer' birthDate='15/05/1999' />
          </View>
        </Container>
      </>
  )
}
