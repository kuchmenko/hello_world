import grey from "@material-ui/core/colors/grey"
import styled from "@material-ui/core/styles/styled"
import Typography from "@material-ui/core/Typography/Typography"
import React from "react"

const Section = styled("section")({
  width: 620,
  marginBottom: 120,
})

const Article = styled("article")({
  textAlign: "center",
})

const Title = styled(Typography)({
  fontSize: 45,
  fontWeight: "bold",
  lineHeight: "64px",
  marginBottom: 16,
  color: grey[900],
})

const SubTitle = styled(Typography)({
  fontSize: 18,
  lineHeight: "32px",
  color: grey[900],
  opacity: 0.8,
})

interface IntroductionSectionProps {
  title: string
  subtitle: string
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  title,
  subtitle,
}) => {
  return (
    <Section>
      <Article>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Article>
    </Section>
  )
}

export default IntroductionSection
