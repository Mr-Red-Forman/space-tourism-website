import { useState } from "react";
import { NavLink } from "react-router-dom";

export function AppHeader() {
    const [menuBar, setMenubar]= useState(false)

    console.log('menuBar:',menuBar )
    return (
        <header className="app-header">
            <section className="main-layout ">
                <main>
                    <div className="logo">
                        <img src='/assets/shared/logo.svg' alt="logo" />
                    </div>
                    <span className="decoration-line">
                        <div className="line"></div>
                    </span>
                    <nav className={menuBar? 'active': null}>
                        <button className="exit-menu" onClick={()=>setMenubar(!menuBar)}>X </button>
                        <NavLink to="/" className=''>
                            <span className="pageNumber">00</span> Home
                        </NavLink>
                        <NavLink to="destination/Moon" className=''>
                            <span className="pageNumber">01</span> destination
                        </NavLink>
                        <NavLink to="crow" className=''>
                            <span className="pageNumber">02</span> crow
                        </NavLink>
                        <NavLink to="technology" className=''>
                            <span className="pageNumber">03</span> technology
                        </NavLink>
                    </nav>
                    <button className="menu-toggle-btn" onClick={()=>setMenubar(!menuBar)}>
                        <img src="/assets/shared/icon-hamburger.svg" alt="open-menu" />
                    </button>
                </main>
                <span className="linkBox">
                </span>
            </section>
        </header>
    )

}