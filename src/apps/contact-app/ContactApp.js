import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import "./styles/style.css";

// first version
// function ContactApp() {
//     const contacts = getData();

//     return (
//         <div className="contact-app">
//             <h1>Daftar Kontak</h1>
//             <ContactList contacts={contacts} />
//         </div>
//     )
// }

function ContactApp() {
    return (
        <div className="contact-app">
            <header className="contact-app__header border-bottom pb-0 mb-5">
                <h1>Aplikasi Kontak</h1>
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/add" element={<AddPage />} />
                </Routes>
            </main>
        </div>
    )
}

export default ContactApp;