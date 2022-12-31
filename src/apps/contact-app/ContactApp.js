import React from "react";
import ContactList from "./components/ContactList";
import { getData } from "./utils/data";
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

class ContactApp extends React.Component {
    constructor() {
        super();
        this.state = { contacts: getData() };
    }

    onDeleteHandler = (id) => {
        const contacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({ contacts });
    }

    render() {
        return (
            <div className="contact-app">
                <h1>Daftar Kontak</h1>
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
            </div>
        )
    }
}

export default ContactApp;