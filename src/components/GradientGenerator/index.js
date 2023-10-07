import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientContainer,
  Heading,
  Description,
  GradientDirectionsList,
  PickColorContainer,
  ColorsCard,
  InputCard,
  LabelHexCode,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    inputColor1: '#8ae323',
    inputColor2: '#014f7b',
    bgGradients: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeColor1 = event => {
    this.setState({inputColor1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({inputColor2: event.target.value})
  }

  getActiveDirection = direction => {
    this.setState({activeDirection: direction})
  }

  onClickGenerateGradient = () => {
    const {activeDirection, inputColor1, inputColor2} = this.state
    this.setState({
      bgGradients: `to ${activeDirection}, ${inputColor1}, ${inputColor2}`,
    })
  }

  renderGradientDirectionList = () => {
    const {activeDirection} = this.state
    return (
      <GradientDirectionsList>
        {gradientDirectionsList.map(eachDirection => (
          <GradientDirectionItem
            key={eachDirection.directionId}
            directionDetails={eachDirection}
            getActiveDirection={this.getActiveDirection}
            isActive={activeDirection === eachDirection.value}
          />
        ))}
      </GradientDirectionsList>
    )
  }

  renderPickColor = () => {
    const {inputColor1, inputColor2} = this.state
    return (
      <PickColorContainer>
        <ColorsCard>
          <LabelHexCode htmlFor="input-color1">{inputColor1}</LabelHexCode>
          <InputCard
            type="color"
            value={inputColor1}
            id="input-color1"
            onChange={this.onChangeColor1}
          />
        </ColorsCard>
        <ColorsCard>
          <LabelHexCode htmlFor="input-color2">{inputColor2}</LabelHexCode>
          <InputCard
            type="color"
            value={inputColor2}
            id="input-color2"
            onChange={this.onChangeColor2}
          />
        </ColorsCard>
      </PickColorContainer>
    )
  }

  render() {
    const {bgGradients} = this.state
    return (
      <GradientContainer bgImage={bgGradients} data-testid="gradientGenerator">
        <Heading>Generate a CSS Color Gradient</Heading>
        <Description>Choose Direction</Description>
        {this.renderGradientDirectionList()}
        <Description>Pick the Colors</Description>
        {this.renderPickColor()}
        <GenerateButton type="button" onClick={this.onClickGenerateGradient}>
          Generate
        </GenerateButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
