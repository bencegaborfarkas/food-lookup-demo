import React from "react";
import "./Search.css";
import Client from "../../Client";

class Search extends React.Component {

    constructor(props){
        super(props);
    }

    search = (e) => {

        const value = e.target.value;

        this.setState({
            searchValue: value
        });

        if (value === "") {
            this.setState({
                foods: [],
                searchValue: ""
            });
        }
        else {
            // Fetch data
            Client.search(value, foods => {
                this.setState({
                    foods: foods.slice(0, 25 /*matching item prop*/)
                });
            });
        }

    };

    render() {

        let html =
            <div className="Search">
                <form action="">
                    <div>
                        <label htmlFor="Search" id="SearchLabel">Search: </label>
                        {/*<input type="text" name="Search" id="Search" value={searchValue} onChange={this.search}/>*/}
                    </div>
                </form>
            </div>
        ;

        return (html);
    }
}

export default Search;
