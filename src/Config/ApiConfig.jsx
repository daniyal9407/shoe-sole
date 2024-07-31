import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux"; // Use connect for class components if not using hooks

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

class ApiConfig extends Component {
  componentDidMount() {
    this.setupAxiosInterceptors();
  }

  setupAxiosInterceptors = () => {
    const token = this.props.token; // Assuming token is stored in Redux state

    axios.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  };

  render() {
    return null; // Since this is a configuration file, return null or something else appropriate
  }
}

const mapStateToProps = (state) => ({
  token: state.token.token, // Adjust according to your Redux state structure
});

export default connect(mapStateToProps)(ApiConfig);
