import { Button, Col, Form, Input, Row } from "antd";
import store from "../stores";
import { login } from "../stores/action/loginAction";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const CheckinPage = () => {
  const navigate = useNavigate();
  const userlogin = useSelector((state) => state.userLogin.userInfo);
  const onFinish = (values) => {
    store.dispatch(login(values.username, values.password));
  };
  useEffect(() => {
    if (userlogin && userlogin.accessToken) {
      navigate("/");
    }
  }, [userlogin]);
  return (
    <div className="container_fullwidth form_login">
      <div className="container " style={{ height: 600 }}>
        <div style={{ padding: "200px 0 0 0" }}>
          <Row>
            <Col span={8}></Col>
            <Col>
              <Form
                className="form_login1"
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 700,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Đăng nhập
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col span={8}></Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default CheckinPage;
