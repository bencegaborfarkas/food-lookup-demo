import React from "react";
import "./Search.css";

class Search extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.onSearchValueChange(e.target.value);
    }


    render() {

        const value = this.props.value;

        let html =
            <div className="Search">
                <form action="">
                    <div>
                        <label htmlFor="Search" id="SearchLabel">Search: </label>
                        <input type="text" name="Search" id="Search" value={value} onChange={this.handleChange}/>
                    </div>
                </form>
            </div>
        ;

        return (html);
    }
}

export default Search;
