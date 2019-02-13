import React from "react";
import { navigate } from "@reach/router";
import SearchBox from "./SearchBox";

class Search extends React.Component {
  handleSearchSubmit() {
    navigate("/");
  }
  render() {
    return (
      <div className="search-route">
        <SearchBox search={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default Search;
