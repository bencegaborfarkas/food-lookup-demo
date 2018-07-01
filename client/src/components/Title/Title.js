import React from "react";
import "./Title.css";

class Title extends React.Component {

    state = {
        title: ""
    };

    constructor(props){
        super(props);
        this.state = { title: this.props.title };
    }

    render() {

        let html =
            <div className="Title">
                <h1>{ this.state.title }</h1>
            </div>
        ;

        return (html);
    }
}

export default Title;
