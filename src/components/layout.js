import React, { useEffect } from "react"
import { Link } from "gatsby"

import Header from "./header/header";
import Footer from "./footer/footer";



const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  useEffect(() => {

    var observer = new IntersectionObserver(changes => {

      let n = 0;
      changes.forEach(change => {

        if (change.isIntersecting) {
          change.target.classList.add('fadeInDown');
          change.target.style.animationDelay = `${n}s`
        }
        n = n + 0.25;
      });
    }, {});

    function addAnimation(elements) {
      let animatedItems = document.querySelectorAll(elements);
      animatedItems.forEach(item => {
        observer.observe(item);
      })
    }

    addAnimation('section, footer');
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
