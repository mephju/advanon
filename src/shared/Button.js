import styled from 'styled-components'

const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  border: 0;
  margin: 0 20px;
  border-radius: 10px;
  padding: 20px;
  font-weight: bold;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`

export default Button