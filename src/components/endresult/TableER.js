import React from 'react';

const TableER = (props) => {
    return (
        <table >
            <thead >
                <tr>
                    <th className="center-align">Justo</th>
                    <th className="center-align">Suerte</th>
                    <th className="center-align">Timo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="center-align">{props.recuenta("Justo")}</td>
                    <td className="center-align">{props.recuenta("Suerte")}</td>
                    <td className="center-align">{props.recuenta("Timo")}</td>
                </tr>
            </tbody>
        </table>
    );
}

export {TableER};