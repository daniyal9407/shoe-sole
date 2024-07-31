import React, { useState } from "react";
import { CChart } from "@coreui/react-chartjs";
import { Select } from "../Select";
import { monthly } from "../../Config/TableStatus";

export const Graph = (props) => {
  const [selectedValue, setSelectedValue] = useState(props.selectedValue);
  const handleSelectChange = (e) => {
    const value = e;
    const heading = props.item.heading;
    setSelectedValue(value);
    props.onSelectChange(value, heading);
  };

    const getGradient = (ctx, chartArea, start_color, stop_color, bottom_color) => {
    let width, height, gradient;
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (gradient === null || width !== chartWidth || height !== chartHeight) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      gradient.addColorStop(0, stop_color);
      // gradient.addColorStop(0.5, bottom_color);
      gradient.addColorStop(1, start_color);
    }
    return gradient;
  };

  return (
    <div className="dashCard">
      <div className="d-sm-flex justify-content-between">
        {/* <h3 className="mainTitle">{props.item.heading}</h3> */}
        <h3 className="mainTitle">New Users</h3>
        <div>
          <label className="fw-semibold">Select Year :</label>
          <Select
            className="dashboardSelect ms-2"
            onChange={handleSelectChange}
            label=""
            labelclass=""
          >
            {monthly}
          </Select>
        </div>
      </div>

      <div className="graph-wrapper position-relative">
        <CChart
          type="bar"
          height={90}
          // Changed from string to number
          options={{
            scales: {
              y: {
                suggestedMin: 0,
                suggestedMax: 10,
              },
            },
            barThickness: 50,
            plugins: {
              legend: false,
            },
          }}
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            tension: "0.5",
            datasets: [
              {
                label: props.item.label,
                fill: false,
                borderColor: "#2196F3",
                data: props.item.data,
                tension: 0.5,
                borderColor: "#424860",
                borderWidth: 1,
                borderRadius: 0,
                backgroundColor: function (context) {
                  const chart = context.chart;
                  const { ctx, chartArea } = chart;
                  if (!chartArea) {
                    return null;
                  }
                  return getGradient(ctx, chartArea, '#05013E', '#AF040C');
                },
              },
            ],
          }}
        />
        <h6 className="text-center font-family-main y-axes text-dark">
          Months
        </h6>
        <h5 className="x-axis fw-semibold">Users</h5>
      </div>
    </div>
  );
};
