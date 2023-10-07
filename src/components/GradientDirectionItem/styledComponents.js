// Style your elements here
import styled from 'styled-components'

export const DirectionListCard = styled.li`
  display: flex;
`

export const DirectionButton = styled.button`
  background-color: ${props => (props.isActive ? '#ffffff' : '#ffffff79')};
  opacity: ${props => (props.isActive ? '1' : '0.5')};
  color: : #014f7b;
  border: none;
  margin-right: 15px;
  border-radius:5px;
  padding:10px 20px 10px 20px;
  font-weight:600;
  font-family:'Roboto'
`
