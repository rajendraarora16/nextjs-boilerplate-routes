import React, { Component } from "react";
import Header from "../components/header";
import { connect } from "react-redux";
import { candidateInfoSelector } from "../selectors";
import { createStructuredSelector } from "reselect";
import { initiatePersonioApi } from "../actions/app/actionCreator";
import HomePage from "../components/homepage";
import Error from "../components/error";

class MainApp extends Component {
  constructor() {
    super();
  }

  static async getInitialProps({ store, query }) {
    /**
     * Dispatching api listing data to redux store, this will serve for both
     * server and client side, on the client side it will behave as componentDidMount().
     */
    await store.dispatch(initiatePersonioApi());
    /**
     * Returning params for filter.
     */
    return { param: query.sort };
  }

  render() {
    /**
     * Getting candidate info listing data from redux store.
     */
    const { candidateInfo, param } = this.props;
    return (
      <div>
        <Header />
        {candidateInfo.listingInfo.isError === false ? (
          /**
           * Home page component
           */
          <HomePage param={param} candidateRecords={candidateInfo} />
        ) : (
          /**
           * Error component if something goes wrong
           */
          <Error errorData={candidateInfo.listingInfo} />
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  candidateInfo: candidateInfoSelector()
});

export default connect(mapStateToProps)(MainApp);
