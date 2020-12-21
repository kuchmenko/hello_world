import React from "react"

export default function useCarousel<TItem = any>(items: TItem[]) {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0)
  const selectedItem: TItem = React.useMemo(
    () => items[selectedItemIndex] as TItem,
    [items, selectedItemIndex]
  )

  const handleForwardClick = React.useCallback(() => {
    let newIndex = selectedItemIndex + 1

    if (newIndex > items.length - 1) {
      newIndex = 0
    }

    setSelectedItemIndex(newIndex)
  }, [selectedItemIndex, items])

  const handleBackwardClick = React.useCallback(() => {
    let newIndex = selectedItemIndex - 1

    if (newIndex < 0) {
      newIndex = items.length - 1
    }

    setSelectedItemIndex(newIndex)
  }, [selectedItemIndex, items])

  return {
    selectedItem,
    selectedItemIndex,
    setSelectedItemIndex,
    onForward: handleForwardClick,
    onBackward: handleBackwardClick,
  }
}
