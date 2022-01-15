import * as React from "react"
import { Link } from "gatsby"

import * as footerStyles from './footer.module.css';

import RuckusLogo from "../../images/common/ruckus-logo.svg";

export default function Footer() {
  return (
    <footer>
      <p className={footerStyles.copyright}>© 2017 – {new Date().getFullYear()} with love by <Link to="/"><img src={RuckusLogo} alt="Ruckus Labs." /></Link><br /><br /> Any and all rights reserved. <a className={footerStyles.copyright} href="#">Privacy Policy</a>.</p>
    </footer>
  )
}