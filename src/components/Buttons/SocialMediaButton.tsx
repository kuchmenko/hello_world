import React from "react"
import ButtonBase, { ButtonBaseProps } from "@material-ui/core/ButtonBase"
import styled from "@material-ui/core/styles/styled"

import FacebookIcon from "../../assets/svgs/social_media/Facebook.svg"
import InstagramIcon from "../../assets/svgs/social_media/Instagram.svg"
import LinkedInIcon from "../../assets/svgs/social_media/LinkedIn.svg"
import PinterestIcon from "../../assets/svgs/social_media/Pinterest.svg"
import RedditIcon from "../../assets/svgs/social_media/Reddit.svg"
import TwitterIcon from "../../assets/svgs/social_media/Twitter.svg"
import SOCIAL_MEDIA from "../../constants/social-media"

const Button = styled(ButtonBase)({
  width: 32,
  height: 32,
  margin: "20px",
})

interface SocialMediaButtonProps extends ButtonBaseProps {
  socialButton: SOCIAL_MEDIA
}

const SOCIAL_MEDIA_ICON_MAP = {
  [SOCIAL_MEDIA.INSTAGRAM]: InstagramIcon,
  [SOCIAL_MEDIA.FACEBOOK]: FacebookIcon,
  [SOCIAL_MEDIA.LINKEDIN]: LinkedInIcon,
  [SOCIAL_MEDIA.TWITTER]: TwitterIcon,
  [SOCIAL_MEDIA.REDDIT]: RedditIcon,
  [SOCIAL_MEDIA.PINTEREST]: PinterestIcon,
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  socialButton,
  ...other
}) => {
  const Icon = SOCIAL_MEDIA_ICON_MAP[socialButton]

  return (
    <Button {...other}>
      <Icon />
    </Button>
  )
}

export default SocialMediaButton
