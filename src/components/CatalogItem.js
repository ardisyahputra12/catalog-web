import React from "react";
import { FiBookmark, FiThumbsUp } from "react-icons/fi";
import { FaBookmark, FaThumbsUp } from "react-icons/fa";

class CatalogItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.item[0],
            author: this.props.item[1],
            publisher: this.props.item[2],
            year: this.props.item[3],
            is_bookmark: Math.random() > 0.8,
            is_like: false,
            like_total: Math.floor(Math.random() * 10) + 1
        }
        this.check_bookmark = this.check_bookmark.bind(this);
    }

    check_bookmark() {
        this.setState((state) => {
            return { is_bookmark: !state.is_bookmark }
        })
    }

    check_like = () => {
        this.setState((state) => {
            return {
                is_like: !state.is_like,
                like_total: state.like_total + (state.is_like ? -1 : 1)
            }
        })
    }

    render() {
        return (
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">{this.state.title}</h5>
                    <p className="card-text author">{this.state.author}</p>
                    <p className="card-text text-muted publisher">
                        {this.state.publisher}
                        <small className="year"> {this.state.year}</small>
                    </p>
                </div>
                <div className="card-footer text-muted d-flex">
                    <div className="flex-grow-1 text-start d-flex" onClick={this.check_like}>
                        <p>{this.state.is_like ? <FaThumbsUp /> : <FiThumbsUp />} </p>
                        <p>&nbsp;{this.state.like_total} like(s)</p>
                    </div>
                    <p className="text-end" onClick={this.check_bookmark}>
                        {this.state.is_bookmark ? <FaBookmark /> : <FiBookmark />}
                    </p>
                </div>
            </div>
        )
    }
}

export default CatalogItem;
