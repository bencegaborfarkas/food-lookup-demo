import React from "react";
import "./Footer.css";

class Footer extends React.Component {

    state = {
        author: "",
        date: ""
    };

    constructor(props){
        super(props);
        this.state = {
            author: this.props.author,
            date: this.props.date
        };
    }

    render() {

        let html =
            <div className="Footer">
                <footer>
                    <p>
                        <small><i>Author: { this.state.author }</i></small>
                    </p>
                    <p>
                        <small><i>Date: { this.state.date }</i></small>
                    </p>
                </footer>
            </div>
        ;

        return (html);
    }
}

export default Footer;
