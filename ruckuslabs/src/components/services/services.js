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
        <p>Creating interactive programs that enhance a customer's experience with a brand and facilitate an enjoyable experience on the business's website.</p>
      </article>
      <article>
        <img src={BrandingIcon} />
        <h3>Branding & Logo Design</h3>
        <p>Develops a company's public image and messaging</p>
      </article>
      <article>
        <img src={DevelopmentIcon} />
        <h3>Development (Web, Product)</h3>
        <p>Responsible for designing, coding and modifying websites, from layout to function and according to a client's specifications.</p>
      </article>
      <article>
        <img src={DesignSystemsIcon} />
        <h3>Design Systems</h3>
        <p>The single source of truth which groups all the elements that will allow the teams to design, realize and develop a product.</p>
      </article>
      <article>
        <img src={PrintIcon} />
        <h3>Print Design</h3>
        <p>Creation of visual designs for printing such as brochures, labels, business cards, and a range of other marketing materials. </p>
      </article>
    </div>
  )
}