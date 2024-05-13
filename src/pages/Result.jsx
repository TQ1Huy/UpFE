import React, { useEffect } from "react";
import { Button, Result } from "antd";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";
const ResultPage = () => {
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  const updateorder = (ordercode) => {
    axios.put(`${BASE_URL}/order/${ordercode}`);
  };
  useEffect(() => {
    if (searchParams && searchParams.get("vnp_ResponseCode") === "00") {
      updateorder(searchParams.get("vnp_TxnRef"));
    }
  }, [searchParams]);
  console.log(location);

  return (
    <>
      {(searchParams && searchParams.get("vnp_ResponseCode") === "00") ||
      location.state ? (
        <Result
          status="success"
          title="Đặt hàng thành công!"
          subTitle={`Mã đơn hàng của bạn là : ${
            location.state
              ? location.state.ordercode
              : searchParams.get("vnp_TxnRef")
          }`}
          extra={[
            <Button href="/" key="buy">
              Tiếp tục mua
            </Button>,
          ]}
        />
      ) : (
        <Result
          status="error"
          title="Đặt hàng không thành công!"
          subTitle={`Mã đơn hàng của bạn là : ${
            location.state
              ? location.state.ordercode
              : searchParams.get("vnp_TxnRef")
          }`}
          extra={[
            <Button key="buy" href="/">
              Tiếp tục mua
            </Button>,
          ]}
        />
      )}
    </>
  );
};

export default ResultPage;
