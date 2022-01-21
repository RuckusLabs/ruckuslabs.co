import * as React from "react"

import DesignIcon from './icons/design-icon.svg';
import BrandingIcon from './icons/branding-icon.svg';
import DevelopmentIcon from "./icons/code-icon.svg";
import DesignSystemsIcon from "./icons/design-systems-icon.svg";
import PrintIcon from "./icons/print-icon.svg";

import * as servicesStyles from "./services.module.css";

export default function Services() {
  return (
    <div className={servicesStyles.services}>
      <article>
        <img src={DesignIcon} />
        <h3>User Interface Design</h3>
        <p>Research and designing interfaces that enhance a user's experience with a brand or interaction.</p>
      </article>
      <article>
        <img src={BrandingIcon} />
        <h3>Branding & Logo Design</h3>
        <p>Crafting modern, unique branding identities that align with your users expectations.</p>
      </article>
      <article>
        <img src={DevelopmentIcon} />
        <h3>Development & Coding</h3>
        <p>Designing and coding thoughtful, flexible, and secure interfaces usable across myriad devices.</p>
      </article>
      <article>
        <img src={DesignSystemsIcon} />
        <h3>Design Systems</h3>
        <p>Imagining collections of elements that allow teams to cohesively align during the design process.</p>
      </article>
      <article>
        <img src={PrintIcon} />
        <h3>Print Design</h3>
        <p>Crafting beautiful print products like brochures, business cards, and other marketing materials.</p>
      </article>
    </div>
  )
}