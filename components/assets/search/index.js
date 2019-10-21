import React, { Component } from "react";
import { Input } from "./style";

class SearchText extends Component {
  render() {
    return (
      <Input placeholder={this.props.placeholder} type={this.props.type} />
    );
  }
}

export default SearchText;
