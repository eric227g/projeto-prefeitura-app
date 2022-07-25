import styled, { css } from 'styled-components/native';
import { boolean } from 'yup';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
  border: 1px solid black;
  margin-left: 400px;
  margin-top: 250px;
`;

interface IsValid {
  show: boolean;
}

export const Caixa = styled.TextInput<IsValid>`
  width: 200px;
  height: 50px;
  border: 1px solid black;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  ${props =>
    !props.show &&
    css`
      border-color: red;
    `}
`;
