import "./App.css";
import Table from "./components/Table";
import React, { useEffect, useState } from "react";
import data from "./data.json"

function App() {

  // let dataObj = [];
  // for (let datapoint in data.rows) {
  //   dataObj.push(datapoint);
  // }
  return <Table data={data} />;
}

export default App;
