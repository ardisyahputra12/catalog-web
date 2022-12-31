import React, { Fragment } from "react";
import Catalog from "../components/Catalog";

class Main extends React.Component {
    render() {
        return (
            <Fragment>
                <div>
                    <section className="row">
                        <div className="col-12">
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Search"
                                id="keyword"
                                name="search"
                            />
                        </div>
                        <div className="col-12 mt-3">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="filter"
                                    id="filter_name"
                                    checked
                                    readOnly
                                />
                                <label className="form-check-label mb-3" htmlFor="filter_name">
                                    Title
                                </label>
                            </div>
                        </div>
                    </section>
                </div>
                <Catalog />
            </Fragment>
        )
    }
}

export default Main;
