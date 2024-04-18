import React from "react";
import config from "../../config/config.json";
import "./tableInfo.styles.css";

const DistrictsTable: React.FC = () => {
  const districtsData = config.districts.data;

  return (
    <div className="table-container">
      <h2>{config.districts.title}</h2>
      <table className="districts-table">
        <thead>
          <tr>
            <th>Comparable</th>
            <th>Perm. Tax Rate</th>
            <th>Pop. Served</th>
            <th>Geo Coverage Area</th>
            <th>Call Volume</th>
          </tr>
        </thead>
        <tbody>
          {districtsData.map((district) => (
            <tr key={district.id}>
              <td data-label="Comparable:">{district.name}</td>
              <td data-label="Permanent Tax Rate:">{district.taxRate}</td>
              <td data-label="Population Served:">
                {district.population.toLocaleString()}
              </td>
              <td data-label="Geographical Coverage Area:">{district.area}</td>
              <td data-label="Call Volume:">
                {district.callVolume.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DistrictsTable;
