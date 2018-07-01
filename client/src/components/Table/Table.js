import React from "react";
import "./Table.css";

class Footer extends React.Component {

    render() {

        let foodRows = [];

        let html =
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
        ;

        return (html);
    }
}

export default Footer;
