import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../../constants";
import store from "../../../stores";
import { addToCart, deleteCartitem } from "../../../stores/action/cartAction";

import { Button, InputNumber } from "antd";

const Cart = () => {
  const listCart = useSelector((state) => state.cartReducer.carts);
  const total = listCart.reduce(
    (total, crrval) => total + parseInt(crrval.newPrice) * crrval.quantity,
    0
  );

  const payment = async () => {
    const res = await axios.post(`${BASE_URL}/create_payment_url`, {
      amount: total,
      bankCode: "",
      language: "vn",
    });
    window.location = res.data;
  };
  return (
    <div className="container_fullwidth">
      <div className="container shopping-cart">
        {listCart && listCart.length === 0 ? (
          <div style={{ height: 600 }}>
            <h4>Không có sản phẩm trong giỏ hàng</h4>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-12">
              <h3 className="title">Giỏ hàng</h3>
              <div className="clearfix"></div>

              <table className="shop-table">
                <thead>
                  <tr>
                    <th>Ảnh</th>
                    <th>Thông tin</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Giá khuyến mãi</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  {listCart.map((item) => {
                    return (
                      <tr>
                        <td>
                          <img src={item.productImg} alt="" />
                        </td>
                        <td>
                          <div className="shop-details">
                            <div className="productname">
                              {item.productName}
                            </div>

                            <p>
                              Describe :
                              <strong className="pcode">{item.describe}</strong>
                            </p>
                          </div>
                        </td>
                        <td>
                          <h5>{item.oldPrice}</h5>
                        </td>
                        <td>
                          <InputNumber
                            min={1}
                            max={10}
                            defaultValue={item.quantity}
                            onChange={(val) => {
                              store.dispatch(addToCart(item.id, val));
                            }}
                          />
                        </td>
                        <td>
                          <h5>
                            <strong className="red">{item.newPrice}</strong>
                          </h5>
                        </td>
                        <td>
                          <Button
                            htmlType="button "
                            onClick={() => {
                              store.dispatch(deleteCartitem(item));
                            }}
                            type="primary"
                            danger
                          >
                            Xoá
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="6">
                      <a className="pull-left button" href="/#">
                        Thêm sản phẩm
                      </a>
                    </td>
                  </tr>
                </tfoot>
              </table>
              <div className="clearfix"></div>
              <div className="row">
                <div className="col-md-4 col-sm-6"></div>
                <div className="col-md-4 col-sm-6"></div>
                <div className="col-md-4 col-sm-6">
                  <div className="shippingbox">
                    <div className="grandtotal">
                      <h5>Tổng tiền</h5>
                      <span>{total}</span>
                    </div>
                    <a className="button " href="/payment">
                      Thanh toán
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
