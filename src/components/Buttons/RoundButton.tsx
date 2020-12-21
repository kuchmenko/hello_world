import ButtonBase from "@material-ui/core/ButtonBase/ButtonBase"
import styled from "@material-ui/core/styles/styled"

const RoundButton = styled(ButtonBase)(props => ({
  width: 40,
  height: 40,
  background: props.theme.palette.background.default,
  border: "2px solid #B69443",
  borderRadius: "50%",
}))

export default RoundButton
