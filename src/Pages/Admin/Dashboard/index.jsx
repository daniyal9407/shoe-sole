import { useState, useEffect } from "react";
import { DashboardLayout } from "../../../Components/AdminLayout/DashboardLayout";
import StatCard from "../../../Components/StatsCard/index";
import "./style.css";
import { getIcon, getText } from "../../../Utils/helper";
import { getAll } from "../../../Services/Api";
import { Graph } from "../../../Components/Graph";
import { dashboardChart, StatsCardData } from "../../../Config/Data";

export const Dashboard = () => {
  const [data, setData] = useState([]);
  const [orderChart, setOrderChart] = useState([]);
  const [selectedValue, setSelectedValue] = useState("2024");
  const [chartdata, setChartData] = useState({});

  const fetchHomeData = async () => {
    try {

      // const response = await getAll("/admin-api/account/home");
      const response  = StatsCardData;

      if (response && response.status) {
        setData(
          Object.entries(response?.detail?.data).map(([key, value]) => ({
            id: key,
            image: value.image,
            text: value.text,
            number:value.number,
            increase : value.increase
          }))
        );
      }
    } catch (error) {
      console.error("Error fetching home data:", error);
    }
  };

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    fetchOrderChart(value);
  };

  const fetchOrderChart = async (value) => {
    try {
      // const response = await getAll("/admin-api/charts/user?year=" + value);
      const response =dashboardChart;
      if (response && response.status) {
        setOrderChart(response.detail);
        setChartData({
          data: response.detail,
          label: "users",
          heading: "Users",
        });
      }
    } catch (error) {
      console.error("Error fetching home data:", error);
    }
  };

  useEffect(() => {
    fetchHomeData();
    fetchOrderChart(selectedValue);
  }, []);

  return (
    <>
      <DashboardLayout pageTitle="Dashboard">
        <div className="container-fluid">
          <div className="row mb-md-3 mb-0">
            <div className="col-12">
              <div className=" pb-md-3 pb-0">
                <div className="row my-4">
                  <div className="col-md-6">
                    <h2 className="mainTitle mb-0">Dashboard</h2>
                  </div>
                </div>
                <div className="row">
                  {data?.map((stats) => (
                    <div className="col-md-6 mb-3 mb-md-0" key={stats.id}>
                      <StatCard item={stats} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <Graph
                item={chartdata}
                selectedValue={selectedValue}
                onSelectChange={handleSelectChange}
              />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
