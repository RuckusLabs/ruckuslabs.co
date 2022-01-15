import * as React from "react"

import * as showcaseGridStyles from "./showcase-grid.module.css";

export default function ShowcaseGrid(props) {

  const gridStyle = [`showcaseGridStyles.grid--${props.items.length}`];

  return (
    <div className={gridStyle}>
      {props.items.map((item) => (
        <div className={showcaseGridStyles.gridItem}>
          <img src={item.src} />
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}