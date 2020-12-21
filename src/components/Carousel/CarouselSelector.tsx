import Box from "@material-ui/core/Box"
import grey from "@material-ui/core/colors/grey"
import styled from "@material-ui/core/styles/styled"
import React from "react"

import RoundDirectionButton from "../Buttons/RoundDirectionButton"

interface CarouselSelectorProps {
  onForward?: () => void
  onBackward?: () => void
  itemsCount: number
  selectedItemIndex: number
}

const Container = styled(Box)({
  display: "flex",
})
const IndicatorsList = styled("ul")({
  margin: "0 4px",
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  padding: 0,
})
const IndicatorsListItem = styled("li")(props => ({
  width: 8,
  height: 8,
  borderRadius: "50%",
  background: props.active ? "#B69443" : grey[900],
  opacity: props.active ? 1 : 0.2,
  margin: "0 12px",
}))

const CarouselSelector: React.FC<CarouselSelectorProps> = ({
  onForward,
  onBackward,
  itemsCount,
  selectedItemIndex,
}) => {
  const itemsList = React.useMemo(
    () => Array.from({ length: itemsCount }, (_, i) => i),
    [itemsCount]
  )
  console.log(itemsList)
  return (
    <Container>
      <RoundDirectionButton onClick={onBackward} />
      <IndicatorsList>
        {itemsList.map(item => (
          <IndicatorsListItem key={item} active={item === selectedItemIndex} />
        ))}
      </IndicatorsList>
      <RoundDirectionButton onClick={onForward} forward />
    </Container>
  )
}

export default CarouselSelector
