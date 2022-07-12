import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
  html,body {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    overflow-y: visible;
  }

  h1,h2,h3,h4,h5,h6,ul,li,p {
    padding: 0px;
    margin: 0px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`

const Layout = ({ children }: { children: unknown }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout
