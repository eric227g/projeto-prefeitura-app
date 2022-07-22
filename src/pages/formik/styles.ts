import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 500px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
  border-radius: 50px;
  margin-left: 450px;
  margin-top: 100px;
`

interface InputProps {
  isValid: boolean;
}
export const Input = styled.TextInput<InputProps>`
  width: 250px ;
  border: 1px solid #333;
  margin-top: 15px;
  border-radius: 8px;
  padding-left: 8px;
  padding: 8px;
  ${props=>!props.isValid && css`border-color: red;`}

`

export const Botao = styled.Button`
  margin-top: 25px;
`
