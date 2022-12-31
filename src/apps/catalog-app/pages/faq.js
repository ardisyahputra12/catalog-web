import React from "react";

class Faq extends React.Component {
    render() {
        return (
            <div className="container bg-light">
                <div className="row">
                    <div className="col-lg-12 p-5">
                        <h1 className="display-6 mb-4">Frequently Asked Questions (FAQs)</h1>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <p>
                                    <strong>How many items of print books can I borrow from the library?</strong>
                                    <br />You can borrow up to 10 copies of print books.
                                </p>
                                <p>
                                    <strong>How long can I borrow the collections?</strong>
                                    <br />Our borrowing period is 10 days.
                                </p>
                                <p>
                                    <strong>How many times can I renew the borrowed items(s)?</strong>
                                    <br />The borrowed item(s) can be renewed once, but when the item(s) is reserved by others, renew is not allowed.
                                </p>
                                <p>
                                    <strong>Why is my device unable to connect to the Wi-Fi in the library?</strong>
                                    <br />There may be some technical problems, please check these:
                                    <ul>
                                        <br />
                                        <li>You have not actived Wi-Fi function in your device.</li>
                                        <li>The quota of maximum Wi-Fi users has probably been reached. If you can not connect to the Wi-Fi access due to this problem, you can try again to connect after some time.</li>
                                    </ul>
                                    <br />Several devices (e.g. notebook) need to be restarted to connect to Wi-Fi access. This often solve mosy of problems.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Faq;
