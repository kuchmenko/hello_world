import { ButtonProps } from "@material-ui/core/Button/Button"
import ArrowForward from "@material-ui/icons/ArrowForward"
import ArrowBack from "@material-ui/icons/ArrowBack"
import React from "react"

import RoundButton from "./RoundButton"

interface RoundDirectionButtonProps extends ButtonProps {
  forward?: boolean
}

const RoundDirectionButton: React.FC<RoundDirectionButtonProps> = ({
  forward,
  ...other
}) => {
  const Content = React.useMemo(() => (forward ? ArrowForward : ArrowBack), [
    forward,
  ])

  return (
    <RoundButton {...other}>
      <Content style={{ fontSize: "24px" }} />
    </RoundButton>
  )
}

export default RoundDirectionButton
