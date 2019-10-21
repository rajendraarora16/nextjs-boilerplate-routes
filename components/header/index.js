import React, { PureComponent } from "react";
import { ParentContainer, LeadTextHeader } from "./style";

class Header extends PureComponent {
  render() {
    return (
      <ParentContainer>
        <LeadTextHeader>Personio Application</LeadTextHeader>
      </ParentContainer>
    );
  }
}

export default Header;
