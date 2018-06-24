import styled from 'styled-components'

const Li = styled.li`
  padding: 0 20px;
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  align-items: center;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:last-child {
    border-bottom: 0;
  }
`

export default Li