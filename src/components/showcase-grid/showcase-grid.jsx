import * as React from "react"

import "./showcase-grid.css";
import "../fancybox/fancybox.css";
import Fancybox from '../fancybox/fancybox';

export default function ShowcaseGrid(props) {

  return (
    <div className={`showcase-grid showcase-grid--${props.items.length}`}>
      {props.items.map((item) => (
        <div className={`showcase-grid-item`}>
          <Fancybox>
            <img
              data-fancybox={props.gallery}
              data-src={item.src}
              src={item.src}
            />
          </Fancybox>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}