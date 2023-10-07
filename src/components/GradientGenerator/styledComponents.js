// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.div`
  background-image: linear-gradient(${props => props.bgImage});
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  font-family: 'Roboto';
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 30px;
`
export const Description = styled.p`
  color: #ededed;
  font-size: 20px;
`
export const GradientDirectionsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
export const PickColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`
export const ColorsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
`
export const InputCard = styled.input`
  width: 100px;
  height: 50px;
  border: 0;
  background-color: transparent;
`
export const LabelHexCode = styled.p`
  color: #ffffff;
  font-size: 15px;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  border-radius: 5px;
  padding: 10px 20px 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
`
