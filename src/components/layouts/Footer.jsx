const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-logo">
                <a href="#">
                  <img src="images/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4 className="title">
                Contact <strong>Info</strong>
              </h4>
              <p>No. 199, Ho Tung Mau, Hanoi , Vietnam</p>
              <p>Call Us : (84) 382 774 009</p>
              <p>Email : tranquanghuy@gmail.com</p>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4 className="title">
                Customer<strong> Support</strong>
              </h4>
              <ul className="support">
                <li>
                  <a href="/#">FAQ</a>
                </li>
                <li>
                  <a href="/#">Payment Option</a>
                </li>
                <li>
                  <a href="/#">Booking Tips</a>
                </li>
                <li>
                  <a href="/#">Infomation</a>
                </li>
              </ul>
            </div>
            {/* <div className="col-md-3">
              <h4 className="title">
                Get Our <strong>Newsletter </strong>
              </h4>
              <p>Lorem ipsum dolor ipsum dolor.</p>
              <form className="newsletter">
                <input type="text" name="" placeholder="Type your email...." />
                <input
                  type="submit"
                  value="SignUp"
                  className="button"
                  onChange={() => console.log("abc")}
                />
              </form>
            </div> */}
          </div>
        </div>
      </div>
      <div className="copyright-info">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <ul className="social-icon">
                <li>
                  <a href="/#" className="linkedin"></a>
                </li>
                <li>
                  <a href="/#" className="google-plus"></a>
                </li>
                <li>
                  <a href="/#" className="twitter"></a>
                </li>
                <li>
                  <a href="/#" className="facebook"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
