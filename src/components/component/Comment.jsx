import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";
import store from "../../stores";
import { getListComment } from "../../stores/action/commentAction";
import { useDispatch } from "react-redux";

import { Space, Table, Tag } from "antd";

const Comment = ({ productId }) => {
  const [comments, setComments] = useState([]);
  console.log("comment", comments.data);
  const getData = async () => {
    const res = await axios.get(`${BASE_URL}/comments/${productId}`);
    if (res.status === 200) {
      if (res.data.status === "success") {
        setComments(res.data.data);
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // const onFinish = (values: any) => {
  //   console.log('Success:', values);

  //   const resp = await axios.post("http://localhost:8000/slider", values);
  //       if (resp.status === 200) {
  //         if (resp.data.status === "success") {
  //           form.resetFields();
  //           setIsModalOpen(false);
  //           message.success("them thanh cong");
  //         } else message.error("them that bai");
  //       }
  // }
  // };

  const columns = [
    {
      title: "Người dùng",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Bình luận",
      dataIndex: "comment",
      key: "comment",
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={comments} />
    </div>
  );
};

export default Comment;
