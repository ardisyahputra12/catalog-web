import React from "react";
import ContactList from "./components/ContactList";
import { getData } from "./utils/data";
import "./styles/style.css";
import ContactInput from "./components/ContactInput";

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

    onAddContactHandler = ({ name, tag }) => {
        this.setState(prevState => {
            return {
                contacts: [
                    ...prevState.contacts,
                    {
                        id: +new Date(),
                        name,
                        tag,
                        imageUrl: '/images/default.jpg',
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div className="contact-app">
                <h1 className="text border-bottom pb-3 text-center">Aplikasi Kontak</h1>
                <h2 className="text-center">Tambah Kontak</h2>
                <ContactInput addContact={this.onAddContactHandler} />
                <h2 className="text-center border-top pt-5 mt-2">Daftar Kontak</h2>
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
            </div>
        )
    }
}

export default ContactApp;