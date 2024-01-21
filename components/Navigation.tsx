"use client"

import { useEffect, useState } from "react"
import Link from 'next/link';
import Content from "@/public/json/Nav.json";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let navbarClasses = ['navbar navbar-expand-lg navbar-dark ftco-navbar-light'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <>
      <nav className={navbarClasses.join(" ")} id="ftco-navbar">
        <div className="container d-flex align-items-center">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Przełącz menu">
            <span className="oi oi-menu"></span> {Content.menu}
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav m-auto">
              {Content.items.map((item, key) => (
                <li className={`nav-item ${ key === 0 ? 'active' : '' }`}>
                  <Link href={item.link} className={`nav-link ${ key === 0 ? '' : 'pl-0' }`} title={item.text}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation