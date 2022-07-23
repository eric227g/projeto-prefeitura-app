import {
  User,
  Info,
  Container,
  } from '../../profile/styles'

interface Props {
  nameUser: string,
  firstName: string,
  secundName: string,
  birthDate: string,
}

export default function InfoProfile({nameUser,firstName,secundName,birthDate}: Props) {
  return(
      <Container>
        <Info>Nome de usuario</Info>
        <User>{nameUser}</User>
        <Info>Primeiro nome</Info>
        <User>{firstName}</User>
        <Info>Segundo nome</Info>
        <User>{secundName}</User>
        <Info>Data de nascimento</Info>
        <User>{birthDate}</User>
      </Container>
  )
}
