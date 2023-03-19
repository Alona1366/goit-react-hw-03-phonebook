import { Form,ErrorMessage } from 'formik';
import styled from '@emotion/styled'

export const FormLabel = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  margin-bottom: 16px;
  padding: 24px;
  background-color: #F9F9F9;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: #278C41;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

const ErrorText = styled.p`
color: red;
font-size: 14px`

export const FormErr = ({ name })=> {
  return (
    <ErrorMessage name={name}
      render={message => <ErrorText>{message}</ErrorText>}/>
  )
}