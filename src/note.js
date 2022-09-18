import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

const ChartOne = () => {
  const [data, setData] = useState({});
  const [value, setValue] = React.useState("RELIANCE");
  const [options, setOptions] = useState({
    colors: ["#FF0000", "#4F7942"],

    chart: {
      id: "basic-bar",
      zoom: {
        enabled: true,
      },
      // stacked: true,
      toolbar: {
        show: true,
      },
    },
    xaxis: {
      // categories : data.strike

      categories: [
        2600.0, 2620.0, 2640.0, 2660.0, 2680.0, 2700.0, 2720.0, 2740.0, 2760.0,
        2780.0,
      ],
    },
    grid: {
      show: true,
      borderColor: "#90A4AE",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: "calloi",

      data: [
        996000, 246000, 145750, 291500, 399000, 2122000, 536500, 476000, 439000,
        207500,
      ],
    },
    {
      name: "putoi",
      data: [
        1134750, 152750, 250000, 236000, 167250, 619000, 87000, 62500, 25750,
        13000,
      ],
    },
  ]);
  const baseURL = "https://docker.api.srifintech.com/testassignment";
  useEffect(() => {
    axios
      .post(baseURL, {
        ticker: value,
      })
      .then((response) => {
        setData(response.data);
        setSeries(dd());
      });
      
  }, [series]);

  

  console.log(series);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`The name you entered was: ${value}`);
  };
  console.log(value);


  const dd = () => { 
    const d1 = [];
    const d2 = [];

    for (const property in data) {
      d1.push(property);
    }
    for (const property in data) {
      d2.push(data[property]);
    }
    const cx = [
      {
        name: d1[1],
        data: d2[1],
      },
      {
        name: d1[2],
        data: d2[2],
      },
    ];
    return cx;
  };
  return (
    <div className="container py-2 mt-5 ml-2">
      <div className="row">
        <div className="col-6 col-md-4">
          <div
            className="card border-2 shadow bg-white p-2  mx-auto"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">Open Interest</h5>
              {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label for="exampleFormControlSelect1">Symbol</label>

                    <select
                      className="form-control"
                      value={value}
                      onChange={handleChange}
                    >
                      <option value="RELIANCE">RELIANCE</option>
                      <option value="SBIN">SBIN</option>
                      <option value="INFY">INFY</option>
                    </select>
                  </div>
                  <br />
                  <div className="form-group">
                    <label for="exampleFormControlInput1">Expiry Date</label>
                    <br />
                    <input type="date" className="form-control" />
                  </div>

                  <div className="border-top my-3">
                    <div className="mt-2 mb-3  text-center ">
                      <button
                        type="submit"
                        className="btn btn-success btn-block"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="app">
            <div className="row">
              <div className="mixed-chart">
                <ReactApexChart
                  options={options}
                  series={series}
                  type="bar"
                  width={800}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
