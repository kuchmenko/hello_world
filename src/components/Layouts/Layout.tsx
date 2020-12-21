import Container from "@material-ui/core/Container/Container"
import React from "react"

interface LayoutProps extends React.PropsWithChildren<any> {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Container>{children}</Container>
}

export default Layout
