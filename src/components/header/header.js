import * as React from "react"
import { Link } from "gatsby"
import {
  Menu,
  MenuItem,
  MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import * as headerStyles from './header.module.css';

import RuckusLogo from "../../images/common/ruckus-logo.svg";
import Burger from "./burger.svg";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <Link to="/"><img src={RuckusLogo} alt="Ruckus Labs." /></Link>
      <Menu menuButton={<img className={headerStyles.burger} src={Burger} alt="Menu" />} transition>
        <MenuItem><Link to="/">Home</Link></MenuItem>
        <MenuItem><Link to="/work">Work</Link></MenuItem>
        <MenuItem><Link to="/contact">Contact</Link></MenuItem>
      </Menu>
    </header>
  )
}