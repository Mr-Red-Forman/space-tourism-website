import { NavLink } from "react-router-dom";

export function AppHeader() {

    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline"

    return (
        <header className="main-layout app-header">
            <div className="logo">
                <span></span>
            </div>

            <main>
                <span className="decoration-line">
                    <div className="line"></div>
                </span>

                <nav>
                    <ul >
                        <li >
                            <NavLink to="/" className=''>
                                <span className="pageNumber">00</span> Home
                            </NavLink>
                            <NavLink to="destination" className=''>
                                <span className="pageNumber">01</span> destination
                            </NavLink>
                            <NavLink to="crow" className=''>
                                <span className="pageNumber">02</span> crow
                            </NavLink>
                            <NavLink to="technology" className=''>
                                <span className="pageNumber">03</span> technology
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </main>
            <span className="linkBox">

            </span>
        </header>
    )

}