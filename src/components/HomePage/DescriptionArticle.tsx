import Box from "@material-ui/core/Box"
import { BoxProps } from "@material-ui/core/Box/Box"
import grey from "@material-ui/core/colors/grey"
import styled from "@material-ui/core/styles/styled"
import Typography from "@material-ui/core/Typography/Typography"
import React from "react"

const Container = styled(Box)({})
const SectionId = styled(Typography)({
  marginBottom: 16,
  fontWeight: "bold",
  fontSize: "22px",
  lineHeight: "32px",
  color: "#B69443",
})
const Title = styled(Typography)({
  fontWeight: "bold",
  fontSize: "36px",
  lineHeight: "56px",
  color: grey[900],
  marginBottom: 8,
})
const Text = styled(Typography)({
  fontSize: "18px",
  lineHeight: "32px",
  color: grey[900],
  marginBottom: 24,
})

interface DescriptionArticleProps extends BoxProps {
  sectionId: string
  title: string
  text: string
  containerProps?: BoxProps
}

const DescriptionArticle: React.FC<DescriptionArticleProps> = ({
  sectionId,
  title,
  text,
  children,
  containerProps,
}) => {
  return (
    <Container {...containerProps}>
      <SectionId>{sectionId}</SectionId>
      <Title>{title}</Title>
      <Text>{text}</Text>
      {children}
    </Container>
  )
}

export default DescriptionArticle
