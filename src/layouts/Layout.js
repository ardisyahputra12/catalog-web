import React from "react";
import { Outlet, Link } from "react-router-dom";

class Layout extends React.Component {
    handleClick = (e) => {
        const navItem = document.querySelectorAll(".nav-link");
        navItem.forEach(el => {
            el.classList.remove("active");
            el.classList.remove("text-white");
        })
        e.target.classList.add("active");
        e.target.classList.add("text-white");
    }

    handleLoad = () => {
        let route = window.location.pathname
        const navItem = document.querySelectorAll(".nav-link");
        navItem.forEach(el => {
            el.classList.remove("active");
            el.classList.remove("text-white");
            if (route === el.pathname) {
                el.classList.add("active");
                el.classList.add("text-white");
            }
        })
    }

    render() {
        let liElement = (to, title, active = '') => {
            return (
                <li className="nav-item me-3" onClick={this.handleClick}>
                    <Link to={to} className={`nav-link ${active}`}>{title}</Link>
                </li>
            )
        }

        return (
            <main className="container" onLoad={this.handleLoad}>
                <div className="row mt-3 mb-3">
                    <header className="d-flex justify-content-between">
                        <a className="navbar-brand" href="/">
                            <img
                                src="https://www.catalog.style/static/media/catalog_logo.2f0babb5.svg"
                                alt=""
                                width="140"
                                height="60"
                                className="d-inline-block align-top"
                            />
                        </a>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav nav-pills mr-auto">
                                    {liElement("/", "Home")}
                                    {liElement("/guest-book", "Guest Book")}
                                    {liElement("/faq", "FAQ")}
                                    {liElement("/about", "About")}
                                    {liElement("/ask-me", "Ask Me")}
                                </ul>
                            </div>
                        </nav>
                    </header>
                </div>
                <Outlet />
                <footer className="row mt-5 border-top">
                    <p className="text-center m-3">Copyright &copy; 2022 - CatalogApp</p>
                </footer>
            </main >
        )
    }
}

export default Layout;
