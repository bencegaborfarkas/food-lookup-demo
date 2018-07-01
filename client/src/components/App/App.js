import React from "react";
import "./App.css";
import Client from "../../Client";
import Footer from "../Footer/Footer";
import Title from "../Title/Title";

const MATCHING_ITEM_LIMIT = 10;

class App extends React.Component {

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
                    foods: foods.slice(0, MATCHING_ITEM_LIMIT)
                });
            });
        }

    };

    render() {

        let foodRows;
        let searchValue;

        if(this.state){

            foodRows = this.state.foods.map((food, idx) => (
                <tr key={idx}>
                    <td>{food.description}</td>
                    <td className="right aligned">{food.kcal}</td>
                    <td className="right aligned">{food.protein_g}</td>
                    <td className="right aligned">{food.fat_g}</td>
                    <td className="right aligned">{food.carbohydrate_g}</td>
                </tr>
            ));

            searchValue = this.state.searchValue;
        }

        let html =
            <div className="App">
                <Title title={ "Food Lookup Demo" }/>
                <div className="Content">
                    <div className="Search">
                        <form action="">
                            <div>
                                <label htmlFor="Search" id="SearchLabel">Search: </label>
                                <input type="text" name="Search" id="Search" value={searchValue} onChange={this.search}/>
                            </div>
                        </form>
                    </div>
                    <div className="Table">
                        <table>
                            <thead className="THead">
                            <tr>
                                <th>Description</th>
                                <th>Carbohydrate (g)</th>
                                <th>Fat (g)</th>
                                <th>Kcal</th>
                                <th>Protein (g)</th>
                            </tr>
                            </thead>
                            <tbody className="TBody">
                            {foodRows}
                            </tbody>
                            <tfoot className="TFoot">
                            <tr>
                                <td colSpan="4"><small>(Note that the presented data consist of sample values, and may differ from real life nutritional rates!)</small></td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <Footer author={"Farkas Bence Gábor"} date={"2018"}/>
            </div>
        ;

        return (html);
    }
}

export default App;
