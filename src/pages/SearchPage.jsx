import MyProductList from "../components/component/MyProductList";
import MySearch from "../components/component/MySearch";

const SearchPage = () => {
  return (
    <div className="container">
      <MySearch />
      <MyProductList />
    </div>
  );
};
export default SearchPage;
