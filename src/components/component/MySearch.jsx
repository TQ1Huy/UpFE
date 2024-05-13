import React from "react";
import { connect } from "react-redux";
import { setSearchTerm } from "../../stores/action/searchAction";

const MySearch = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  return (
    <div style={{ padding: "15px" }}>
      <input
        style={{ width: "100%", padding: "15px" }}
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchTerm: state.search.searchTerm,
});
const mapDispatchToProps = {
  setSearchTerm,
};

export default connect(mapStateToProps, mapDispatchToProps)(MySearch);
