import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              columns: [
                {
                  Header: "Campaign Id",
                  accessor: "campaign_id"
                },
                {
                  Header: "Campaign Name",
                  accessor: "campaign_name"
                },
                {
                  Header: "Line Item Name",
                  accessor: "line_item_name"
                },
                {
                  Header: "Actual Amount",
                  accessor: "actual_amount"
                },
                {
                  Header: "Adjustments",
                  accessor: "adjustments"
                }
              ]
            }
          ]}
          defaultPageSize={23}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));