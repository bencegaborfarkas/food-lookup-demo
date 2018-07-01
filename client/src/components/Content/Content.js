import React from "react";
import "./Content.css";
import Search from "../Search/Search";
import Table from "../Table/Table";
import Client from "../../Client";

const MATCHING_ITEM_LIMIT = 10;

class Content extends React.Component {

    state: {
        foods: [],
        searchValue: ""
    };

    componentWillMount() {
        // Init state
        this.setState({
            foods: [],
            searchValue: ""
        });
    };

    componentDidMount() {
        // Fetch data
        Client.search("cheese", foods => {
            this.setState({
                foods: foods.slice(0, MATCHING_ITEM_LIMIT),
                searchValue: "cheese"
            });
        });
    };

    render() {

        let html =
            <div className="Content">
                <Search/>
                <Table/>
            </div>
        ;

        return (html);
    }
}

export default Content;
