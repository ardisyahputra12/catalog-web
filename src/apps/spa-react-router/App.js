/**
 * title: "04_SPA_React_Router"
 * desc: "React Router. Latihan: Membuat Single-Page App dengan React Router"
 * date: 01-02 Jan 2023
 */

import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

function HomePage() {
    return <p>This is Home page</p>;
}

function AboutPage() {
    return <p>This is About page</p>;
}

function FAQPage() {
    return <p>This is FAQ page</p>;
}

function App() {
    return (
        <>
            <header>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                </ul>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                </Routes>
            </main>
        </>
    )
}

export default App;