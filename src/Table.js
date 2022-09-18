import React, { useState, useEffect } from "react";

import axios from "axios";

export default function () {
  const [data, setData] = useState([{}]);
  const urlOne = "https://docker.api.srifintech.com/holidays";

  useEffect(() => {
    axios.get(urlOne).then((response) => {
      console.log(response.data);
      setData(response.data.holidays);
    });
  }, []);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">tradingdate</th>
            <th scope="col">tradingday</th>
            <th scope="col">tradingholiday</th>
            <th scope="col">description</th>
          </tr>
        </thead>
        {data.map((i) => {
          return (
            <tbody>
              <tr>
                <td>{i.tradingdate}</td>
                <td>{i.tradingday}</td>
                <td>{i.tradingholiday}</td>
                <td>{i.description}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
