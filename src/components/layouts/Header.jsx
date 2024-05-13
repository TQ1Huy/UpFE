import { useSelector } from "react-redux";
import CartHeader from "../component/CartHeader";
import store from "../../stores";
import { logout } from "../../stores/action/loginAction";
import { Avatar, Dropdown } from "antd";
import { getListCategory } from "../../stores/action/categoryAction";
import { useEffect } from "react";
const Header = () => {
  const fetchData = async () => {
    store.dispatch(getListCategory());
  };
  useEffect(() => {
    fetchData();
  }, []);
  const userlogin = useSelector((state) => state.userLogin.userInfo);
  const category = useSelector((state) => state.categoryReducer.category);
  const items = [
    {
      key: "1",
      label: <a href="/favorite">Yêu thích</a>,
    },
    {
      key: "2",
      label: <a href="/cart">Giỏ hàng</a>,
    },
    {
      key: "3",
      label: (
        <button
          onClick={() => {
            store.dispatch(logout());
          }}
        >
          Đăng xuất
        </button>
      ),
    },
  ];

  return (
    <div className="header">
      {/* <Button
        type="primary"
        disabled={userlogin?.user?.role_id === 0 ? false : true}
        onClick={() => {
          console.log("dfhbfhabf");
        }}
      >
        dasdasd
      </Button> */}
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-2">
            <div className="logo">
              <a href="/">
                <img src="/images/LOGO1.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-md-10 col-sm-10">
            <div className="header_top">
              <div className="row">
                <div className="col-md-9"></div>
                <div className="col-md-3">
                  {userlogin && userlogin.accessToken.length ? (
                    <>
                      <span style={{ margin: "0 10px 0 0" }}>
                        <Dropdown
                          className="text-dec"
                          menu={{
                            items,
                          }}
                          placement="bottomLeft"
                        >
                          <p
                            className="avatar"
                            style={{ color: "#fff", margin: "20px 10px 10px" }}
                          >
                            <Avatar style={{ margin: "5px" }}>
                              <image src={userlogin.user.avatar} />
                            </Avatar>
                            {userlogin.user.fullname}
                          </p>
                        </Dropdown>
                      </span>
                    </>
                  ) : (
                    <ul className="usermenu">
                      <li>
                        <a href="checkin" className="log">
                          Đăng nhập
                        </a>
                      </li>
                      <li>
                        <a href="reg" className="reg">
                          Đăng kí
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="header_bottom">
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <ul>
                    <li>
                      <a href="/">Trang chủ</a>
                    </li>
                    {category.map((item, index) => (
                      <li key={index}>
                        <a href={`/category-product/${item.slug}`}>
                          {item.namecategory}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href="/search">Tìm kiếm</a>
                    </li>
                  </ul>
                </ul>
              </div>
              <ul className="option">
                <li id="search" className="search"></li>
                <li className="option-cart">
                  <CartHeader />
                </li>
              </ul>
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
