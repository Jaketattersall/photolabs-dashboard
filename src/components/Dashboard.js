import React, { Component } from "react";
import loading from "./loading";
import classnames from "classnames";

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
