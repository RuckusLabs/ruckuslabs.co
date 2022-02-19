import React, { useEffect } from "react"
import { Link } from "gatsby"

import Header from "./header/header";
import Footer from "./footer/footer";

var observer = new IntersectionObserver(changes => {
  changes.forEach(change => {
    change.isIntersecting && change.target.classList.add('fadeInDown');
  });
}, {});


function addAnimation(element) {
  let animatedItems = document.querySelectorAll(element);
  animatedItems.forEach(item => {
    observer.observe(item);
  })
}

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  useEffect(() => {
    addAnimation('section');
  }, []);

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
