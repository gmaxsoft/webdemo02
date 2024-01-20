"use client"

import { useEffect, useState } from "react"

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

  let navbarClasses = ['navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <>
      <nav className={navbarClasses.join(" ")} id="ftco-navbar">
      <div className="container d-flex align-items-center">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Przełącz menu">
	        <span className="oi oi-menu"></span> Menu
	      </button>
	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav m-auto">
	        	<li className="nav-item active"><a href="/" className="nav-link pl-0" title="Start">Start</a></li>
	        	<li className="nav-item"><a href="/gabinet" className="nav-link" title="Gabinet stomatologiczny">Gabinet</a></li>
	        	<li className="nav-item"><a href="/oferta" className="nav-link" title="Oferta gabinetu">Oferta</a></li>
	        	<li className="nav-item"><a href="/galeria" className="nav-link" title="Galeria narzędzi stomatologicznych">Galeria</a></li>
	          <li className="nav-item"><a href="/kontakt" className="nav-link" title="Kontakt Stomatolog Zielona Góra">Kontakt</a></li>
	        </ul>
	      </div>
	    </div>
      </nav>
    </>
  )
}

export default Navigation