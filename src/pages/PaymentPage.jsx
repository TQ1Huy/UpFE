import React from "react";
import { Button, Form, Input, Radio } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useNavigate } from "react-router-dom";
import store from "../stores";
import { deleteCart } from "../stores/action/cartAction";

const PaymentPage = () => {
  const navigate = useNavigate();
  const listCart = useSelector((state) => state.cartReducer.carts);
  const user = useSelector((state) => state.userLogin.userInfo.user.id);
  console.log("aaa", listCart);
  const onFinish = async (values) => {
    const ordercode = "DH" + Date.now();
    const total = listCart.reduce(
      (total, crrval) => total + parseInt(crrval.newPrice) * crrval.quantity,
      0
    );

    const body = {
      ...values,
      user_id: user,
      ordercode: ordercode,
      transportfee: 30000,
      total: total,
    };
    // listCart.forEach((element) => {
    //   console.log(element);
    // });
    console.log(total);
    const res = await axios.post(`${BASE_URL}/order`, body);
    if (res.status === 200) {
      if (res.data.status === "success") {
        store.dispatch(deleteCart());
        if (values.payments === "vnpay") {
          const res = await axios.post(`${BASE_URL}/create_payment_url`, {
            amount: total + body.transportfee,
            bankCode: "",
            language: "vn",
            ordercode: ordercode,
          });
          window.location = res.data;
        } else {
          navigate("/result", {
            state: {
              ordercode: ordercode,
            },
          });
        }
      }
    }
    console.log("Success:", res);
  };

  return (
    <div className="payment-page ">
      <div className="container">
        <h3 className="title">Đặt hàng</h3>
        <div className="clearfix"></div>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Họ Và tên"
            name="fullname"
            rules={[
              {
                required: true,
                message: "Nhập họ và tên!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Số điện thoại "
            name="phone"
            rules={[
              {
                required: true,
                message: "Nhập số điện thoại!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Địa chỉ "
            name="address"
            rules={[
              {
                required: true,
                message: "Nhập địa chỉ!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="payments" label="Chọn hình thức thanh toán">
            <Radio.Group>
              <Radio value="vnpay">Ví VNPay</Radio>
              <Radio value="paymentathome">Thanh toán khi nhận hàng</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default PaymentPage;
