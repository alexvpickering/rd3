import { lighten, darken } from 'polished'

// styled-components theme
const navbar = darken(0.3, "#386CB0"),
      gray_d = "gray",
      gray_l = "#dfdfdf"


const theme = {
  color: {
    navbar: navbar,
    hero: lighten(0.03, navbar),
    action: lighten(0.07, navbar),
    white: "#ffffff",
    altwhite: "#f4f4f4",
    hover: gray_d,
    border: gray_l,
  },
  breaks: {
    navbar: "320px",
    sm: "576px",
    md: "768px",
    lg: "1080px",
    xl: "1200px"
  },
  font: {
    sm: "12px",
    base: "16px",
    lg: '30px',
    xl: '40px',
    xxl: '50px'
  }
}

export default theme;
