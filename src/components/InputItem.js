import React from "react";

class InputItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guests: [{
                guest_name: 'User A',
                time: Date.now(),
                question: 'How to bookmark a book?'
            }],
            name: '',
            question: '',
            for: this.props.for
        }
    }

    handleChange = (e) => {
        e.target.className.split(" ")[1] === "name"
            ? this.setState({ name: e.target.value })
            : this.setState({ question: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.name.length === 0) {
            return;
        }

        if (this.state.question.length === 0 && this.state.for === "askMe") {
            return;
        }

        const newItem = {
            guest_name: this.state.name,
            time: Date.now(),
            question: this.state.question
        }

        this.setState(state => ({
            guests: state.guests.concat(newItem),
            name: '',
            question: ''
        }))
    }

    render() {
        let inputElement = (className, placeholder, value) => {
            return (
                <input
                    type="text"
                    className={`form-control ${className}`}
                    placeholder={placeholder}
                    onChange={this.handleChange}
                    value={value}
                />
            )
        }

        let all_list_item = this.state.guests.map(item => {
            let tanggal = new Date(item.time).toLocaleString();
            return (
                <li className="list-group-item" key={item.time}>
                    <span className="badge bg-info text-dark">
                        {this.state.for === "guestBook" ? tanggal : item.guest_name}
                    </span>
                    <span className="p-2">
                        {this.state.for === "guestBook" ? item.guest_name : item.question}
                    </span>
                </li>
            )
        })

        let inputGuestBook = inputElement("name", "Guest's Name", this.state.name)

        let inputAskMe = (
            <React.Fragment>
                {inputElement("name", "Guest's Name", this.state.name)}
                {inputElement("question", "Question...", this.state.question)}
            </React.Fragment>
        )

        return (
            <div className="container bg-light">
                <div className="row">
                    <div className="col-lg-12 p-5">
                        <h1 className="display-6 mb-4">{this.props.title}</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group mb-3">
                                {this.state.for === "guestBook" ? inputGuestBook : inputAskMe}
                                <button className="btn btn-success" type="submit">Submit</button>
                            </div>
                        </form>
                        <ul className="list-group list-group-flush">
                            {all_list_item}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputItem;
