import React from "react";
import PropTypes from 'prop-types';

class ContactInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tag: ''
        }
    }

    onNameChangeEventHandler = ev => {
        this.setState({ name: ev.target.value });
    }

    onTagChangeEventHandler = (event) => {
        this.setState(() => {
            return { tag: event.target.value };
        });
    }

    onSubmitEventHandler = (event) => {
        event.preventDefault();
        this.props.addContact(this.state);
    }

    render() {
        return (
            <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
                <input type="text" placeholder="Nama" className="form-control" value={this.state.name} onChange={this.onNameChangeEventHandler} />
                <input type="text" placeholder="Tag" className="form-control" value={this.state.tag} onChange={this.onTagChangeEventHandler} />
                <button type="submit" className="btn btn-primary">Tambah</button>
            </form>
        );
    }
}

ContactInput.propTypes = {
    addContact: PropTypes.func.isRequired,
}

export default ContactInput;