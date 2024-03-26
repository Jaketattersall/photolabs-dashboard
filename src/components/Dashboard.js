import React, { Component } from "react";
import loading from "./loading";
import classnames from "classnames";


const data = [
    {
      id: 1,
      label: "Total Photos",
      value: 10
    },
    {
      id: 2,
      label: "Total Topics",
      value: 4
    },
    {
      id: 3,
      label: "User with the most uploads",
      value: "Allison Saeng"
    },
    {
      id: 4,
      label: "User with the least uploads",
      value: "Lukas Souza"
    }
  ];
  

class Dashboard extends Component {
    state = {
        loading: false
      };

  render() {
    const dashboardClasses = classnames("dashboard");
    if (this.state.loading) {
        return <loading />;
      }

    return <main className={dashboardClasses} />;
  }
}

export default Dashboard;
