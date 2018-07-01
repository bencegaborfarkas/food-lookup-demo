import React from "react";
import "./App.css";
import Footer from "../Footer/Footer";
import Title from "../Title/Title";
import Content from "../Content/Content";


class App extends React.Component {

    render() {

        let html =
            <div className="App">
                <Title title={ "Food Lookup Demo" }/>
                <Content/>
                <Footer author={"Farkas Bence Gábor"} date={"2018"}/>
            </div>
        ;

        return (html);
    }
}

export default App;
