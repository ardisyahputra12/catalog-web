import React from "react";

class GuestBook extends React.Component {
    constructor() {
        super();
        this.state = {
            guests: [{ guest_name: 'React JS', time: Date.now() }],
            name: ''
        }
    }

    handleChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.name.length === 0) {
            return;
        }

        const newItem = {
            guest_name: this.state.name,
            time: Date.now()
        }

        this.setState(state => ({
            guests: state.guests.concat(newItem),
            name: ''
        }))
    }

    render() {
        let all_guest_name = this.state.guests.map(item => {
            let tanggal = new Date(item.time).toLocaleString();
            return (
                <li className="list-group-item" key={item.time}>
                    <span className="badge bg-info text-dark">{tanggal}</span>
                    <span className="p-2"> {item.guest_name}</span>
                </li>
            )
        })

        return (
            <div className="container bg-light">
                <div className="row">
                    <div className="col-lg-12 p-5">
                        <h1 className="display-6 mb-4">Guest Book</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Guest's Name"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                />
                                <button className="btn btn-success" type="submit">Submit</button>
                            </div>
                        </form>
                        <ul className="list-group list-group-flush">
                            {all_guest_name}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default GuestBook;
