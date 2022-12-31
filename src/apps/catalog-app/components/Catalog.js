import React, { Fragment } from "react";
import CatalogItem from "./CatalogItem";

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.items = [
            ['Classical Mythology', 'Mark P. O. Morford', 'Oxford University Press', 2002],
            ['Rules of The Wild', 'Francesca Marciano', 'Random House Inc', 1998],
            ['Clara Callan', 'Richard Bruce Wright', 'HarperFlamingo Canada', 2001],
            ['Wild Animus', 'Rich Shapero', 'Too Far', 2004],
            ['Tage der Unschuld', 'Richard North Patterson', 'Goldmann', 2000],
            ['The Hellfire Club', 'Peter Straub', 'Random House Inc', 1996],
            ['The Night Listener', 'Armistead Maupin', 'HarperCollins Publishers', 2000],
            ['Night Tales', 'Nora Roberts', 'Silhouette', 2000]
        ]
    }

    render() {
        let container = (title, item) => {
            return (
                <Fragment>
                    <div className="container">
                        <h2 className="pb-2 mb-4 border-bottom">{title}</h2>
                        <div className="row">
                            {item}
                        </div>
                    </div>
                </Fragment>
            )
        }

        let allItem = this.items.map((item) => {
            return (
                <Fragment>
                    <div className="col-sm-6 col-lg-4 mb-4 book">
                        <CatalogItem item={item} />
                    </div>
                </Fragment>
            )
        })

        return (
            <Fragment>
                {container("Popular", [allItem[1], allItem[6], allItem[3]])}
                {container("Our Books", allItem)}
            </Fragment>
        )
    }
}

export default Catalog;
