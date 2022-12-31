/**
 * title: "03_MyFormApp"
 * desc: "Stateful Component. Latihan Membuat Controlled Component"
 * date: "01 Jan 2023"
 */

import React from "react";

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            gender: 'Man'
        }
    }

    onNameChangeEventHandler = (e) => {
        this.setState(() => {
            return { name: e.target.value };
        })
    }

    onEmailChangeEventHandler = (event) => {
        this.setState(() => {
            return { email: event.target.value };
        })
    }

    onGenderChangeEventHandler = (event) => {
        this.setState(() => {
            return { gender: event.target.value };
        })
    }

    onSubmitEventHandler = (event) => {
        event.preventDefault();

        const message = `
            Name: ${this.state.name}
            Email: ${this.state.email}
            Gender: ${this.state.gender}
        `;

        alert(message);
    }

    render() {
        return (
            <div>
                <h1>Register Form</h1>
                <form onSubmit={this.onSubmitEventHandler}>
                    <label for="name">Name: </label>
                    <input id="name" type="text" value={this.state.name} onChange={this.onNameChangeEventHandler} />
                    <br />
                    <label for="email">Email: </label>
                    <input id="email" type="email" value={this.state.email} onChange={this.onEmailChangeEventHandler} />
                    <br />
                    <label for="gender">Gender: </label>
                    <select id="gender" value={this.state.gender} onChange={this.onGenderChangeEventHandler}>
                        <option value="Man">Man</option>
                        <option value="Woman">Woman</option>
                    </select>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default MyForm;