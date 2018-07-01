import React from "react";
import "./Table.css";

class Footer extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        const data = this.props.data;
        const rows = data.map((food, idx) => (
            <tr key={idx}>
                <td>{food.description}</td>
                <td>{food.kcal}</td>
                <td>{food.protein_g}</td>
                <td>{food.fat_g}</td>
                <td>{food.carbohydrate_g}</td>
            </tr>
        ));

        let html =
            <div className="Table">
                <div className="TableHeader">
                    <table>
                        <thead className="THead">
                        <tr>
                            <th>Description</th>
                            <th>Carbohydrate (g)</th>
                            <th>Fat (g)</th>
                            <th>KCal</th>
                            <th>Protein (g)</th>
                        </tr>
                        </thead>
                    </table>
                </div>
                <div className="TableContent">
                    <table>
                        <tbody className="TBody">
                        {rows}
                        </tbody>
                        {/*<tfoot className="TFoot">
                        <tr>
                            <td colSpan="4"><small>(Note that the presented data consist of sample values, and may differ from real life nutritional rates!)</small></td>
                        </tr>
                        </tfoot>*/}
                    </table>
                </div>
            </div>
        ;

        return (html);
    }
}

export default Footer;
