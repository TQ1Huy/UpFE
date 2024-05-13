import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import axios from "axios";
import store from "../stores";
import { addToCart } from "../stores/action/cartAction";
import Products from "../components/pages/homepage/Products";
import { getListProduct } from "../stores/action/productAction";
import Comment from "../components/component/Comment";
import { Button, Input, Space } from "antd";

const ProductPage = () => {
  let { id } = useParams();
  const [data, setData] = useState({});
  let [img, setImg] = useState(`${data.productImg}`);
  const fetchData = async () => {
    store.dispatch(getListProduct());
  };
  useEffect(() => {
    fetchData();
  }, []);
  const getData = async () => {
    const res = await axios.get(`${BASE_URL}/product/${id}`);
    if (res.status === 200) {
      if (res.data.status === "success") {
        setData(res.data.data[0]);
        setImg(`${data.productImg}`);
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    // Sử dụng giá trị từ state inputValue ở đây
    console.log("Input Value:", inputValue);
  };
  console.log();
  return (
    <div className="container_fullwidth">
      <div className="container">
        <div>
          <div className="products-details">
            <div className="preview_image">
              <img id="zoom_03" src={img} alt="" />
              <div className="thum-image">
                <ul id="gallery_01" className="prev-thum">
                  <li>
                    <img
                      src={data.productImg}
                      alt=""
                      onClick={() => setImg(`${data.productImg}`)}
                    />
                  </li>
                  <li>
                    <img
                      src={data.productImg2}
                      alt=""
                      onClick={() => setImg(`${data.productImg2}`)}
                    />
                  </li>
                  <li>
                    <img
                      src={data.productImg3}
                      alt=""
                      onClick={() => setImg(`${data.productImg3}`)}
                    />
                  </li>
                  <li>
                    <img
                      src={data.productImg4}
                      alt=""
                      onClick={() => setImg(`${data.productImg4}`)}
                    />
                  </li>
                </ul>
                <a className="control-left" id="thum-prev" href="/#">
                  <i className="fa fa-chevron-left"></i>
                </a>
                <a className="control-right" id="thum-next" href="/#">
                  <i className="fa fa-chevron-right"></i>
                </a>
              </div>
            </div>
            <div className="products-description">
              <h2 className="name" style={{ color: "red" }}>
                {data.productName}
              </h2>

              <p>{data.describe}</p>
              <hr className="border" />
              <div className="price">
                Giá :
                <span className="new_price">
                  {data.newPrice}
                  <sup>đ</sup>
                </span>
                <span className="old_price">
                  {data.oldPrice}
                  <sup>đ</sup>
                </span>
              </div>
              <hr className="border" />
              <div className="wided">
                <div className="button_group">
                  <button
                    className="button"
                    onClick={() => {
                      store.dispatch(addToCart(data.id, 1));
                    }}
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="tab-box">
            <div id="tabnav">
              <h3>Mô tả:</h3>
            </div>
            <div className="tab-content-wrap">
              <div className="tab-content" id="Descraption">
                <p>{data.description}</p>
              </div>
              <div className="tab-content" id="tags">
                <div className="tag">
                  Bình luận :
                  <Space.Compact
                    style={{
                      width: "100%",
                    }}
                  >
                    <Input
                      placeholder="Nhập giá trị"
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                    <Button type="primary" onClick={handleButtonClick}>
                      Submit
                    </Button>
                  </Space.Compact>
                </div>
                <Comment productId={id} />
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
          <div id="productsDetails" className="hot-products">
            <Products />
          </div>
          <div className="clearfix"></div>
        </div>

        <div className="clearfix"></div>
      </div>
    </div>
  );
};
export default ProductPage;
