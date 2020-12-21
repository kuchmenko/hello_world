import Box from "@material-ui/core/Box/Box"
import styled from "@material-ui/core/styles/styled"
import FullscreenRoundedIcon from "@material-ui/icons/FullscreenRounded"
import React from "react"

import { CERTIFICATES_MOCK_DATA } from "../../__mocks__/home_page"
import RoundButton from "../Buttons/RoundButton"
import CarouselSelector from "../Carousel/CarouselSelector"
import CarouselTabSelector from "../Carousel/CarouselTabIndicator"
import useCarousel from "../Carousel/useCarousel"
import DescriptionArticle from "./DescriptionArticle"

const Section = styled("section")({
  marginBottom: 120,
})

const Article = styled("article")({
  display: "flex",
})

const ImageContainer = styled(Box)({
  position: "relative",
  width: 513,
  height: 406,
  background: "#FFFFFF",
  boxShadow: "0px 8px 56px rgba(84, 108, 120, 0.1)",
})

const Image = styled("img")({
  width: "100%",
  height: "100%",
})

const FullscreenButton = styled(RoundButton)({
  position: "absolute",
  top: 24,
  right: 24,
})

interface CertificatesSectionProps {}

const CertificatesSection: React.FC<CertificatesSectionProps> = () => {
  const {
    selectedItem,
    selectedItemIndex,
    setSelectedItemIndex,
    onBackward,
    onForward,
  } = useCarousel(CERTIFICATES_MOCK_DATA)

  return (
    <Section>
      <Article>
        <Box>
          <Box marginBottom="24px" display="flex" justifyContent="center">
            <CarouselTabSelector
              onItemSelect={setSelectedItemIndex}
              itemsCount={CERTIFICATES_MOCK_DATA.length}
              selectedItemIndex={selectedItemIndex}
            />
          </Box>
          <ImageContainer>
            <Image src={selectedItem.imageUrl} alt="" />
            <FullscreenButton>
              <FullscreenRoundedIcon />
            </FullscreenButton>
          </ImageContainer>
        </Box>
        <Box
          width={404}
          display="flex"
          marginLeft="141px"
          alignItems="flex-end"
        >
          <DescriptionArticle
            sectionId="01"
            title={selectedItem.title}
            text={selectedItem.subtitle}
            containerProps={{
              marginBottom: "45px",
            }}
          >
            <CarouselSelector
              onBackward={onBackward}
              onForward={onForward}
              itemsCount={CERTIFICATES_MOCK_DATA.length}
              selectedItemIndex={selectedItemIndex}
            />
          </DescriptionArticle>
        </Box>
      </Article>
    </Section>
  )
}

export default CertificatesSection
