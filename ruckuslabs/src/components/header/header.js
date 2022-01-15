import * as React from "react"
import { Link } from "gatsby"

import * as headerStyles from './header.module.css';

import RuckusLogo from "../../images/common/ruckus-logo.svg";
import Burger from "./burger.svg";

export default function Header() {
  return (
    <nav className={headerStyles.header}>
      <Link to="/"><img src={RuckusLogo} alt="Ruckus Labs." /></Link>
      <img className={headerStyles.burger} src={Burger} alt="Menu" />
    </nav>
  )
}