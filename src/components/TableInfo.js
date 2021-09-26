import React from "react";

const TableInfo = () => {
  return (
    <div className="container">
      <table className="table-info margin20">
        <tbody className="noborder">
          <tr className="noborder">
            <td className="noborder">
              <div className="table-info">
                <span className="table-info-title">New Cases:</span>
                <div className="table-legend bg-gray-200" />
                <span>≥ 2.5% and &lt; 5%</span>
                <div className="table-legend bg-gray-400" />
                <span>≥ 5% and &lt; 6%</span>
                <div className="table-legend bg-gray-800" />
                <span>≥ 5%</span>
              </div>
            </td>
          </tr>

          <tr className="noborder">
            <td className="noborder">
              <div className="table-info">
                <span className="table-info-title">New Deaths:</span>
                <div className="table-legend bg-red-200" />
                <span>≥ 0.2% and &lt; 0.5%</span>
                <div className="table-legend bg-red-400" />
                <span>≥ 0.5% and &lt; 0.75%</span>
                <div className="table-legend bg-red-800" />
                <span>≥ 0.75%</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableInfo;
