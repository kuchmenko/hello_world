import Box from "@material-ui/core/Box/Box"
import React from "react"
import styled from "@material-ui/core/styles/styled"

import CarouselSelector from "../Carousel/CarouselSelector"
import CarouselTabSelector from "../Carousel/CarouselTabIndicator"
import useCarousel from "../Carousel/useCarousel"
import DescriptionArticle from "./DescriptionArticle"
import { GIFTS_SECTION_DATA } from "../../__mocks__/home_page"

const Section = styled("section")({
  marginBottom: 120,
})

const Article = styled("article")({
  display: "flex",
})

const ImageContainer = styled(Box)({
  width: 404,
  height: 501,
  background: "#FFFFFF",
  boxShadow: "0px 8px 56px rgba(84, 108, 120, 0.1)",
})

const Image = styled("img")({
  width: "100%",
  height: "100%",
})

interface GiftsSectionProps {}

const GiftsSection: React.FC<GiftsSectionProps> = () => {
  const {
    selectedItem,
    selectedItemIndex,
    setSelectedItemIndex,
    onBackward,
    onForward,
  } = useCarousel(GIFTS_SECTION_DATA)

  return (
    <Section>
      <Article>
        <Box
          width={424}
          display="flex"
          marginRight="230px"
          alignItems="flex-end"
        >
          <DescriptionArticle
            sectionId="02"
            title={selectedItem.title}
            text={selectedItem.subtitle}
            containerProps={{
              marginBottom: "45px",
            }}
          >
            <CarouselSelector
              onBackward={onBackward}
              onForward={onForward}
              itemsCount={GIFTS_SECTION_DATA.length}
              selectedItemIndex={selectedItemIndex}
            />
          </DescriptionArticle>
        </Box>
        <Box>
          <Box marginBottom="24px" display="flex" justifyContent="center">
            <CarouselTabSelector
              onItemSelect={setSelectedItemIndex}
              itemsCount={GIFTS_SECTION_DATA.length}
              selectedItemIndex={selectedItemIndex}
            />
          </Box>
          <ImageContainer>
            <Image src={selectedItem.imageUrl} alt="" />
          </ImageContainer>
        </Box>
      </Article>
    </Section>
  )
}

export default GiftsSection
