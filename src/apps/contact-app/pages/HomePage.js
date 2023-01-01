import React from "react";
import { useSearchParams } from "react-router-dom";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import { getContacts, deleteContact } from "../utils/data";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: getContacts(),
            keyword: props.defaultKeyword || '',
        };
    }

    onDeleteHandler = (id) => {
        deleteContact(id);
        this.setState({ contacts: getContacts() });
    }

    onKeywordChangeHandler = (keyword) => {
        this.setState(() => {
            return { keyword }
        });

        this.props.keywordChange(keyword);
    }

    render() {
        const contacts = this.state.contacts.filter((contact) => {
            return contact.name.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            )
        })

        return (
            <section>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <h2 className="text-center">Daftar Kontak</h2>
                <ContactList contacts={contacts} onDelete={this.onDeleteHandler} />
            </section>
        )
    }
}

export default HomePageWrapper;