import { stubSizeTableData } from "./stub";

import "./index.scss";

const SizeTable = () => {
    return (
        <table className="size-table">
            <thead>
                <tr>
                    <td>Международный размер</td>
                    <td>Российский размер</td>
                    <td>Обхват груди</td>
                    <td>Обхват талии</td>
                    <td>Обхват бедер</td>
                </tr>
            </thead>
            <tbody>
                {stubSizeTableData.map((item) => (
                    <tr key={item.international}>
                        <td>{item.international}</td>
                        <td>{item.russian}</td>
                        <td>{item.breast}</td>
                        <td>{item.waist}</td>
                        <td>{item.hips}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SizeTable;
