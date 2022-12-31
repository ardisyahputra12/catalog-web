import React from "react";

class About extends React.Component {
    render() {
        return (
            <div className="bg-light">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 p-5">
                            <h1 className="display-4">About us</h1>
                            <p className="lead mb-0">Hi, I'm Ardi<br />I built this website. Be Happy!</p>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <img
                                src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                                alt=""
                                height="50"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
