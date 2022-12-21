import React, { Fragment } from "react"

class Catalog extends React.Component {
    constructor() {
        super()
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
        let allItem = this.items.map((item) => {
            return (
                <Fragment>
                    <div className="col-sm-6 col-lg-4 mb-4 book">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">{item[0]}</h5>
                                <p className="card-text author">{item[1]}</p>
                                <p className="card-text text-muted publisher">{item[2]} <small className="year">{item[3]}</small></p>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        })

        return (
            <Fragment>
                {allItem}
            </Fragment>
        )
    }
}

export default Catalog