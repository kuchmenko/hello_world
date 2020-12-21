import grey from "@material-ui/core/colors/grey"
import styled from "@material-ui/core/styles/styled"
import React from "react"

const Container = styled("div")({
  display: "flex",
})

const TabsList = styled("ul")({
  padding: "16px 24px",
  listStyle: "none",
  display: "flex",
  boxShadow: "0px 8px 56px rgba(84, 108, 120, 0.1)",
  borderRadius: 66,
})

const TabsListItem = styled("li")(props => ({
  position: "relative",
  fontWeight: props.active ? 600 : "normal",
  fontSize: "16px",
  lineHeight: "22px",
  color: grey[900],
  opacity: props.active ? 1 : 0.4,
  margin: "0 17px",
  "&:last-child": {
    margin: 0,
    marginLeft: 17,
  },
  "&:first-child": {
    margin: 0,
    marginRight: 17,
  },
}))

const TabsListItemIndicator = styled("div")({
  position: "absolute",
  bottom: -16,
  width: "100%",
  height: 0,
  border: "2px solid #2D3436",
})

interface CarouselTabSelectorProps {
  onItemSelect: (item: number) => void
  itemsCount: number
  selectedItemIndex: number
}

const CarouselTabSelector: React.FC<CarouselTabSelectorProps> = ({
  onItemSelect,
  itemsCount,
  selectedItemIndex,
}) => {
  const itemsList = React.useMemo(
    () => Array.from({ length: itemsCount }, (_, i) => "0" + (i + 1)),
    [itemsCount]
  )

  const handleItemClick = React.useCallback(
    (index: number) => () => {
      onItemSelect(index)
    },
    [onItemSelect]
  )

  return (
    <Container>
      <TabsList>
        {itemsList.map((i, index) => (
          <TabsListItem
            key={index}
            onClick={handleItemClick(index)}
            active={index === selectedItemIndex}
          >
            {i}
            {index === selectedItemIndex && <TabsListItemIndicator />}
          </TabsListItem>
        ))}
      </TabsList>
    </Container>
  )
}

export default CarouselTabSelector
