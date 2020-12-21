import Box from "@material-ui/core/Box/Box"
import React from "react"

import CertificatesSection from "../components/HomePage/CertificatesSection"
import GiftsSection from "../components/HomePage/GiftsSection"
import IntroductionSection from "../components/HomePage/IntroductionSection"
import SocialMediaPackageSection from "../components/HomePage/SocialMediaPackageSection"
import Layout from "../components/Layouts/Layout"
import SEO from "../components/SEO"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Box display="flex" flexDirection="column" alignItems="center">
        <IntroductionSection
          title="This is what you get."
          subtitle="Certificate, gift card, social media package and much more -
            this is what you get."
        />
        <CertificatesSection />
        <GiftsSection />
        <SocialMediaPackageSection />
      </Box>
    </Layout>
  )
}

export default IndexPage
