import Slider from "../components/pages/homepage/Slider";
import Banner from "../components/pages//homepage/Banner";
import Products from "../components/pages/homepage/Products";
import store from "../stores";
import { useEffect } from "react";
import { getListProduct } from "../stores/action/productAction";
import { getListFavoriteProduct } from "../stores/action/favoriteAction";
import { getListSlider } from "../stores/action/sliderAction";

function HomePage() {
  const fetchData = async () => {
    store.dispatch(getListProduct());
    store.dispatch(getListFavoriteProduct());
    store.dispatch(getListSlider());
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Slider />
      <Banner />
      <div className="container">
        <Products />
      </div>
    </>
  );
}
export default HomePage;
