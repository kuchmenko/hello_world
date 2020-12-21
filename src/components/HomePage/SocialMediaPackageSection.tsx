import Box from "@material-ui/core/Box/Box"
import styled from "@material-ui/core/styles/styled"
import React from "react"

import IPhoneImage from "../../assets/images/home_iphone.png"
import SOCIAL_MEDIA from "../../constants/social-media"
import SocialMediaButton from "../Buttons/SocialMediaButton"
import DescriptionArticle from "./DescriptionArticle"

const Section = styled("section")({
  marginBottom: 120,
})

const Article = styled("article")({
  display: "flex",
  justifyContent: "center",
})

const ImageContainer = styled(Box)({})
const Image = styled("img")({
  width: "100%",
  height: "100%",
})

interface SocialMediaPackageSectionProps {}

const SocialMediaPackageSection: React.FC<SocialMediaPackageSectionProps> = () => {
  return (
    <Section>
      <Article>
        <Box>
          <ImageContainer>
            <Image src={IPhoneImage} alt="" />
          </ImageContainer>
        </Box>
        <Box width={404} display="flex" marginLeft="141px" alignItems="center">
          <DescriptionArticle
            sectionId="03"
            title="Social Media Package"
            text="You decide if and how you want to share the eternal message with the world on your social media channels - we make it as easy as possible!"
          >
            <SocialMediaButton
              socialButton={SOCIAL_MEDIA.INSTAGRAM}
              style={{ marginLeft: 0 }}
            />
            <SocialMediaButton socialButton={SOCIAL_MEDIA.FACEBOOK} />
            <SocialMediaButton socialButton={SOCIAL_MEDIA.LINKEDIN} />
            <SocialMediaButton socialButton={SOCIAL_MEDIA.TWITTER} />
            <SocialMediaButton socialButton={SOCIAL_MEDIA.REDDIT} />
            <SocialMediaButton
              socialButton={SOCIAL_MEDIA.PINTEREST}
              style={{ marginRight: 0 }}
            />
          </DescriptionArticle>
        </Box>
      </Article>
    </Section>
  )
}

export default SocialMediaPackageSection
