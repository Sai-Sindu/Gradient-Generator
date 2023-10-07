// Write your code here
import {DirectionButton, DirectionListCard} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, getActiveDirection, isActive} = props
  const {displayText, value} = directionDetails

  const onClickDirection = () => {
    getActiveDirection(value)
  }

  return (
    <DirectionListCard>
      <DirectionButton
        type="button"
        onClick={onClickDirection}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </DirectionListCard>
  )
}

export default GradientDirectionItem
