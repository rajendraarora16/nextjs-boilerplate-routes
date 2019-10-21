import React, { Component } from "react";
import _ from "lodash";
import {
  MainContainer,
  Table,
  TH,
  TD,
  TR,
  Tbody,
  CheckBoxContainer,
  CheckBox,
  FormElementText,
  CheckboxParentContainer
} from "./style";
import { Input } from "../assets/search/style";
import { Router } from "../../routes/url";

class HomePage extends Component {
  constructor() {
    super();

    /**
     * Local react state
     */
    this.state = {
      _searchQuery: "",
      _noResultFound: false,
      _searchedData: [],
      _userStartedSearching: false,
      _userSearchedData: "",
      _noResultFoundStr: "",
      _isSortByPosition: false,
      _sortPositionData: [],
      _isSortByExp: false,
      _sortExpData: [],
      _isSortByDoa: false,
      _sortDoaData: []
    };
  }

  /**
   * It will serve the URL format for sorting.
   */
  componentDidMount() {
    /**
     * Default props of candidate records.
     */
    const { candidateRecords } = this.props,
      candidateMapD =
        candidateRecords.listingInfo && candidateRecords.listingInfo.data.data;
    const _param = this.props.param;
    const _dom = this.refs[_param];

    /**
     * If there any queris then let's select the checkbox and get the data.
     */
    _param ? (_dom.checked = true) : "";
    /**
     * If checkbox is ticked, get the data ordered by.
     */
    const _takeData =
      _param &&
      (_param === "_position"
        ? _.orderBy(candidateMapD, ["position_applied"], ["asc"])
        : _param === "_application"
        ? _.orderBy(candidateMapD, ["application_date"], ["desc"])
        : _param === "_experience"
        ? _.orderBy(candidateMapD, ["year_of_experience"], ["desc"])
        : "");
    /**
     * Store data and arrange it accordingly.
     */
    _param &&
      (_param === "_position"
        ? this.setState({
            _isSortByPosition: true,
            _sortPositionData: _takeData
          })
        : _param === "_application"
        ? this.setState({ _isSortByDoa: true, _sortDoaData: _takeData })
        : _param === "_experience"
        ? this.setState({ _isSortByExp: true, _sortExpData: _takeData })
        : "");
  }

  /**
   *
   * @param {*} e event action
   * @description Checkbox sort by position
   */
  sortByPosition(e) {
    const { candidateRecords } = this.props,
      candidateMapD =
        candidateRecords.listingInfo && candidateRecords.listingInfo.data.data;

    if (e.target.checked) {
      /**
       * If checkbox is ticked
       */
      const orderedByPosition = _.orderBy(
        candidateMapD,
        ["position_applied"],
        ["asc"]
      );
      this.setState({
        _isSortByPosition: true,
        _sortPositionData: orderedByPosition
      });
      /**
       * Pushing shallow router of sort is checked.
       */
      Router.push("/", "?sort=_position", { shallow: true });
    } else {
      /**
       * Uncheck
       */
      this.setState({ _isSortByPosition: false, _sortPositionData: [] });
      /**
       * Reset router if there is no checkbox selected.
       */
      Router.push("/", "/", { shallow: true });
    }
  }
  /**
   *
   * @param {*} e event action
   * @description Checkbox sort by experience
   */
  sortByExperience(e) {
    const { candidateRecords } = this.props,
      candidateMapD =
        candidateRecords.listingInfo && candidateRecords.listingInfo.data.data;

    if (e.target.checked) {
      /**
       * If checkbox is ticked
       */
      const orderedByExp = _.orderBy(
        candidateMapD,
        ["year_of_experience"],
        ["desc"]
      );
      this.setState({ _isSortByExp: true, _sortExpData: orderedByExp });
      /**
       * Pushing shallow router of sort is checked.
       */
      Router.push("/", "?sort=_experience", { shallow: true });
    } else {
      /**
       * Uncheck
       */
      this.setState({ _isSortByExp: false, _sortExpData: [] });
      /**
       * Reset router if there is no checkbox selected.
       */
      Router.push("/", "/", { shallow: true });
    }
  }

  /**
   *
   * @param {*} e event action
   * @description Checkbox sort by date of application
   */
  sortByDateofApplication(e) {
    const { candidateRecords } = this.props,
      candidateMapD =
        candidateRecords.listingInfo && candidateRecords.listingInfo.data.data;

    if (e.target.checked) {
      /**
       * If checkbox is ticked
       */
      const orderedByDoa = _.orderBy(
        candidateMapD,
        ["application_date"],
        ["desc"]
      );
      this.setState({ _isSortByDoa: true, _sortDoaData: orderedByDoa });
      /**
       * Pushing shallow router of sort is checked.
       */
      Router.push("/", "?sort=_application", { shallow: true });
    } else {
      /**
       * Uncheck
       */
      this.setState({ _isSortByDoa: false, _sortDoaData: [] });
      /**
       * Reset router if there is no checkbox selected.
       */
      Router.push("/", "/", { shallow: true });
    }
  }

  /**
   *
   * @param {*} arrData Json data after quering.
   * @description This will list the queried data in tables.
   */
  getSearchListingData(arrData) {
    let _tableHeaderArr = [];

    let arrKeyName = _.mapKeys(arrData[0], function(value, key) {
      _tableHeaderArr.push(key);
    });

    let _noDataFound = <TR>No results found!</TR>;

    return (
      <Table>
        <Tbody>
          <TR>
            {_tableHeaderArr.map((value, index) => {
              return <TH key={index}>{value}</TH>;
            })}
          </TR>
          {arrData.length !== 0
            ? arrData.map((value, index) => {
                if (_.has(value, "name")) {
                  return (
                    <TR key={index}>
                      <TD>{value.id}</TD>
                      <TD>{value.name}</TD>
                      <TD>{value.email}</TD>
                      <TD>{value.birth_date}</TD>
                      <TD>{value.year_of_experience}</TD>
                      <TD>{value.position_applied}</TD>
                      <TD>{value.application_date}</TD>
                      <TD>{value.status}</TD>
                    </TR>
                  );
                }
              })
            : _noDataFound}
        </Tbody>
      </Table>
    );
  }

  /**
   *
   * @param {*} e event action
   * @description Search text handler for searching text
   */
  doSearch(e) {
    /**
     * Pushing tartget value to local state
     */
    let _searchedData = [],
      _tableHeaderArr = [],
      _noResultFound = "";
    this.setState({ _searchQuery: e.target.value });

    /**
     * Check if there is no input value then remove the search data.
     */
    e.target.value == "" &&
      this.setState(prevState => ({
        _searchedData: []
      }));

    /**
     * User started searching
     */
    e.target.value === ""
      ? this.setState({ _userStartedSearching: false })
      : this.setState({ _userStartedSearching: true });

    const { candidateRecords } = this.props,
      candidateMapD =
        candidateRecords.listingInfo && candidateRecords.listingInfo.data.data;

    let arrKeyName = _.mapKeys(candidateMapD[0], function(value, key) {
      _tableHeaderArr.push(key);
    });

    /**
     * Logic to search.
     */
    let _findedVal = candidateMapD.filter(data => {
      if (
        data.name.toLowerCase().indexOf(e.target.value.toLowerCase()) === -1 &&
        data.status.toLowerCase().indexOf(e.target.value.toLowerCase()) ===
          -1 &&
        data.position_applied
          .toLowerCase()
          .indexOf(e.target.value.toLowerCase()) === -1
      ) {
        return;
      } else {
        _searchedData.push(data);
      }
    });
    this.setState({ _userSearchedData: _searchedData });
  }

  /**
   * Candidate info listing default tables.
   */
  showDefaultCandidateInfo() {
    /**
     * props of candidate info.
     */
    const { candidateRecords } = this.props;

    const candidateMapD =
      candidateRecords.listingInfo && candidateRecords.listingInfo.data.data;
    let _tableHeaderArr = [];

    let arrKeyName = _.mapKeys(candidateMapD[0], function(value, key) {
      _tableHeaderArr.push(key);
    });

    /**
     * Let's decide which one data has to be taken, with checkbox or default one.
     */
    const _takeData =
      this.state._isSortByPosition === true
        ? this.state._sortPositionData
        : this.state._isSortByExp === true
        ? this.state._sortExpData
        : this.state._isSortByDoa === true
        ? this.state._sortDoaData
        : candidateMapD;

    return (
      <Table>
        <Tbody>
          <TR>
            {_tableHeaderArr.map((value, index) => {
              return <TH key={index}>{value}</TH>;
            })}
          </TR>
          {_.chain(_takeData)
            .map((value, index) => {
              return (
                <TR key={index}>
                  <TD>{value.id}</TD>
                  <TD>{value.name}</TD>
                  <TD>{value.email}</TD>
                  <TD>{value.birth_date}</TD>
                  <TD>{value.year_of_experience}</TD>
                  <TD>{value.position_applied}</TD>
                  <TD>{value.application_date}</TD>
                  <TD>{value.status}</TD>
                </TR>
              );
            })
            .value()}
        </Tbody>
      </Table>
    );
  }

  render() {
    return (
      <MainContainer>
        <Input
          placeholder="Search candidate info.."
          type="text"
          onChange={this.doSearch.bind(this)}
        />
        <CheckboxParentContainer>
          {/**
           * Sort by position
           */}
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              id="sort_by_pos"
              name="sort_by_pos"
              ref="_position"
              width="150px"
              background="#286090"
              colorText="#FFF"
              text="Sort by Position applied"
              onChange={this.sortByPosition.bind(this)}
            />
            <FormElementText htmlFor="sort_by_pos">
              {`Sort by position`}
            </FormElementText>
          </CheckBoxContainer>
          {/**
           * Sort by years of experience
           */}
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              id="sort_by_exp"
              name="sort_by_exp"
              ref="_experience"
              width="150px"
              background="#286090"
              colorText="#FFF"
              text="Sort by Experience"
              onChange={this.sortByExperience.bind(this)}
            />
            <FormElementText htmlFor="sort_by_exp">
              {`Sort by Experience`}
            </FormElementText>
          </CheckBoxContainer>
          {/**
           * Sort by date of application
           */}
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              id="sort_by_doa"
              name="sort_by_doa"
              ref="_application"
              width="150px"
              background="#286090"
              colorText="#FFF"
              text="Sort by date"
              onChange={this.sortByDateofApplication.bind(this)}
            />
            <FormElementText htmlFor="sort_by_doa">
              {`Sort by Date of application`}
            </FormElementText>
          </CheckBoxContainer>
        </CheckboxParentContainer>

        {this.state._userStartedSearching === false
          ? this.showDefaultCandidateInfo()
          : this.getSearchListingData(this.state._userSearchedData)}
      </MainContainer>
    );
  }
}

export default HomePage;
