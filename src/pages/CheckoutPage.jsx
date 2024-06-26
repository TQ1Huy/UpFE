const CheckoutPage = () => {
  return (
    <div className="container_fullwidth">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="special-deal leftbar" style={{ marginTop: 0 }}>
              <h4 className="title">
                Sản phẩm
                <strong>Khuyến mãi</strong>
              </h4>
              <div className="special-item">
                <div className="product-image">
                  <a href="details.html">
                    <img src="images/products/thum/products-01.png" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <p>
                    <a href="details.html">Licoln Corner Unit</a>
                  </p>
                  <h5 className="price">$300.00</h5>
                </div>
              </div>
              <div className="special-item">
                <div className="product-image">
                  <a href="details.html">
                    <img src="images/products/thum/products-02.png" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <p>
                    <a href="details.html">Licoln Corner Unit</a>
                  </p>
                  <h5 className="price">$300.00</h5>
                </div>
              </div>
              <div className="special-item">
                <div className="product-image">
                  <a href="details.html">
                    <img src="images/products/thum/products-03.png" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <p>
                    <a href="details.html">Licoln Corner Unit</a>
                  </p>
                  <h5 className="price">$300.00</h5>
                </div>
              </div>
            </div>
            <div className="product-tag leftbar">
              <h3 className="title">
                Sản phẩm
                <strong>Tags</strong>
              </h3>
              <ul>
                <li>
                  <a href="/#">Điện thoại</a>
                </li>
                <li>
                  <a href="/#">Đồ gia dụng</a>
                </li>
                <li>
                  <a href="/#">Xe</a>
                </li>
                <li>
                  <a href="/#">Đồ văn phòng</a>
                </li>
                <li>
                  <a href="/#">Nội thất</a>
                </li>
                <li>
                  <a href="/#">Đồ dùng học tập</a>
                </li>
                <li>
                  <a href="/#">Laptop</a>
                </li>
              </ul>
            </div>
            <div className="get-newsletter leftbar">
              <h3 className="title">
                Nhận tin khuyến mãi
                <strong>Gmail</strong>
              </h3>
              <p>Nhập gmail :</p>
              <form>
                <input
                  className="email"
                  type="text"
                  name=""
                  placeholder="Your Email..."
                />
                <input className="submit" type="submit" value="Submit" />
              </form>
            </div>
          </div>
          <div className="col-md-9">
            <div className="checkout-page">
              <ol className="checkout-steps">
                <li className="steps">
                  <div className="step-title">01. Phương thức thanh toán</div>
                </li>
                <li className="steps active">
                  <a href="checkout.html" className="step-title">
                    02. Thông tin thanh toán
                  </a>
                  <div className="step-description">
                    <form>
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="your-details">
                            <h5>Tên</h5>
                            <div className="form-row">
                              <label className="lebel-abs">
                                Họ
                                <strong className="red">*</strong>
                              </label>
                              <input
                                type="text"
                                className="input namefild"
                                name=""
                              />
                            </div>
                            <div className="form-row">
                              <label className="lebel-abs">
                                Tên
                                <strong className="red">*</strong>
                              </label>
                              <input
                                type="text"
                                className="input namefild"
                                name=""
                              />
                            </div>
                            <div className="form-row">
                              <label className="lebel-abs">
                                Email
                                <strong className="red">*</strong>
                              </label>
                              <input
                                type="text"
                                className="input namefild"
                                name=""
                              />
                            </div>
                            <div className="form-row">
                              <label className="lebel-abs">
                                Số điện thoại
                                <strong className="red">*</strong>
                              </label>
                              <input
                                type="text"
                                className="input namefild"
                                name=""
                              />
                            </div>
                            <div className="pass-wrap">
                              <div className="form-row">
                                <label className="lebel-abs">
                                  Mật khẩu
                                  <strong className="red">*</strong>
                                </label>
                                <input
                                  type="password"
                                  className="input namefild"
                                  name=""
                                />
                              </div>
                              <div className="form-row">
                                <label className="lebel-abs">
                                  Nhập lại mật khẩu
                                  <strong className="red">*</strong>
                                </label>
                                <input
                                  type="password"
                                  className="input cpass"
                                  name=""
                                />
                              </div>
                            </div>
                            <p>
                              <span className="input-radio">
                                <input type="radio" name="user1" />
                              </span>
                              <span className="text">
                                Nhận thêm tin qua Email.
                              </span>
                            </p>
                            <p>
                              <span className="input-radio">
                                <input type="radio" name="user2" />
                              </span>
                              <span className="text">
                                Phương thức thanh toán trùng với địa chỉ nhận
                                hàng.
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="your-details">
                            <h5>Địa chỉ</h5>
                            <div className="form-row">
                              <label className="lebel-abs">
                                Địa chỉ 1<strong className="red">*</strong>
                              </label>
                              <input
                                type="text"
                                className="input namefild"
                                name=""
                              />
                            </div>
                            <div className="form-row">
                              <label className="lebel-abs">
                                Địa chỉ 2<strong className="red">*</strong>
                              </label>
                              <input
                                type="text"
                                className="input namefild"
                                name=""
                              />
                            </div>

                            <p className="privacy">
                              <span className="input-radio">
                                <input type="radio" name="user" />
                              </span>
                              <span className="text">
                                Tôi đã đọc và đồng ý với
                                <a href="/#" className="red">
                                  Chính sách quyền riêng tư
                                </a>
                              </span>
                            </p>
                            <button>Tiếp tục</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>
                <li className="steps">
                  <a href="checkout2.html" className="step-title">
                    03. Thông tin vận chuyển
                  </a>
                </li>
                <li className="steps">
                  <a href="/#" className="step-title">
                    04. Phương thức vận chuyển
                  </a>
                </li>
                <li className="steps">
                  <a href="/#" className="step-title">
                    05. Thông tin thanh toán
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="our-brand">
          <h3 className="title">
            <strong>Tên</strong>
            Thương hiệu
          </h3>
          <div className="control">
            <a id="prev_brand" className="prev" href="/#">
              &lt;
            </a>
            <a id="next_brand" className="next" href="/#">
              &gt;
            </a>
          </div>
          <ul id="braldLogo">
            <li>
              <ul className="brand_item">
                <li>
                  <a href="/#">
                    <div className="brand-logo">
                      <img src="images/thuonghieu1.png" alt="" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <div className="brand-logo">
                      <img src="images/thuonghieu2.png" alt="" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <div className="brand-logo">
                      <img src="images/thuonghieu3.png" alt="" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <div className="brand-logo">
                      <img src="images/thuonghieu4.png" alt="" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <div className="brand-logo">
                      <img src="images/thuonghieu5.png" alt="" />
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <ul className="brand_item">
                <li>
                  <a href="/#">
                    <div className="brand-logo">
                      <img src="images/thuonghieu1.png" alt="" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <div className="brand-logo">
                      <img src="images/thuonghieu2.png" alt="" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <div className="brand-logo">
                      <img src="images/thuonghieu3.png" alt="" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <div className="brand-logo">
                      <img src="images/thuonghieu4.png" alt="" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <div className="brand-logo">
                      <img src="images/thuonghieu5.png" alt="" />
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
