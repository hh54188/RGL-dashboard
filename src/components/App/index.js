import React, { Component } from "react";
import Grid from "../Grid";
import style from "./index.less";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Grid />
      </div>
    );
  }
}
