import React from "react";
import ContactInput from "../components/ContactInput";
import { addContact } from "../utils/data";
import { useNavigate } from "react-router-dom";

function AddPage() {
    const navigate = useNavigate();

    function onAddContactHandler(contact) {
        addContact(contact);
        navigate("/");
    }

    return (
        <section>
            <h2 className="text-center mb-4">Tambah Kontak</h2>
            <ContactInput addContact={onAddContactHandler} />
        </section>
    )
}

export default AddPage;