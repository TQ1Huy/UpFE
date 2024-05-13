import { useSelector } from "react-redux";
import store from "../../stores";
import { deleteCartitem } from "../../stores/action/cartAction";
const CartHeader = () => {
  const listCart = useSelector((state) => state.cartReducer.carts);
  const total = listCart.reduce(
    (total, crrval) => total + parseInt(crrval.newPrice) * crrval.quantity,
    0
  );
  return (
    <div className="cart">
      <>
        <a href="/cart" className="cart-icon">
          cart{" "}
          <span className="cart_no">
            {listCart && listCart.length ? listCart.length : ""}
          </span>
        </a>
        <ul className="option-cart-item">
          {listCart.map((item) => {
            return (
              <li>
                <div className="cart-item">
                  <div className="image">
                    <img src={item.productImg} alt="" />
                  </div>
                  <div className="item-description">
                    <p className="name">{item.productName}</p>
                    <p>
                      Size: <span className="light-red">One size</span>
                      <br />
                      Số lượng:{" "}
                      <span className="light-red">{item.quantity}</span>
                    </p>
                  </div>
                  <div className="right">
                    <p className="price">{item.newPrice}</p>
                    <p
                      onClick={() => {
                        store.dispatch(deleteCartitem(item));
                      }}
                      className="remove"
                    >
                      <img src="images/remove.png" alt="remove" />
                    </p>
                  </div>
                </div>
              </li>
            );
          })}

          <li>
            {listCart && listCart.length === 0 ? (
              <p>Chưa có sản phẩm</p>
            ) : (
              <span className="total">
                Tổng tiền <strong>{total}</strong>
              </span>
            )}
          </li>
        </ul>
      </>
    </div>
  );
};
export default CartHeader;
