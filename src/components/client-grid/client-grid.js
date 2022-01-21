import * as React from "react"

import AppleLogo from "./logos/apple.svg";
import F45Logo from "./logos/f45.svg";
import PTCLogo from "./logos/ptc.svg";
import AvionLogo from "./logos/tequila-avion.svg";
import OTFLogo from "./logos/otf.svg";
import JourneyLogo from "./logos/journey.svg";
import ChicoryLogo from "./logos/chicory.svg";
import WelcomeLogo from "./logos/welcome.svg";
import SALogo from "./logos/sourced-adventures.svg";

import './client-grid.css';

export default function ClientGrid() {
  return (
    <div className="client-grid">
      <div className="client-logo">
        <img src={AppleLogo} alt="Apple." />
      </div>
      <div className="client-logo">
        <img src={AvionLogo} alt="Tequila Avión." />
      </div>
      <div className="client-logo">
        <img src={PTCLogo} alt="PTC (Vuforia)." />
      </div>
      <div className="client-logo">
        <img src={F45Logo} alt="Functional 45 (F45)." />
      </div>
      <div className="client-logo">
        <img src={OTFLogo} alt="Orangetheory Fitness." />
      </div>
      <div className="client-logo">
        <img src={SALogo} alt="Sourced Adventures." />
      </div>
      <div className="client-logo">
        <img src={JourneyLogo} alt="Journey." />
      </div>
      <div className="client-logo">
        <img src={ChicoryLogo} alt="Chicory." />
      </div>
      <div className="client-logo">
        <img src={WelcomeLogo} alt="Welcome." />
      </div>
    </div>
  )
}