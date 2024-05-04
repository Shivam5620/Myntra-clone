import { useContext } from "react";
import CartContext from "../Store/CartContextNew";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  // Calculate total MRP
  const totalMRP = cartCtx.items?.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );
  return (
    <section className="cartContainer pt-5 mt-5">
      <div className="row">
        {/* Left side of Cart */}
        <div className="col-12 col-sm-7">
          <div className="p-3 d-flex justify-content-between align-items-center">
            <div>
              <h5 className="fs-6 fw-bold">ITEMS IN BAG</h5>
            </div>
            <div className="d-flex fw-bold text-secondary fs-6-override align-items-center">
              <div className="border-end border-2 pe-2">
                <span>REMOVE</span>
              </div>
              <div className="ps-2">
                <span>MOVE TO WISHLIST</span>
              </div>
            </div>
          </div>
          <div className="border p-2 d-flex ">
            {cartCtx.items?.length > 0 ? (
              cartCtx.items.map((item, index) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  <div className="w-25">
                    <img src={item.image} alt="" className="w-100" />
                  </div>
                  <div className="justify-content-start w-75">
                    <div>
                      <span className="d-block">Title: {item.title || 'N/A'}</span>
                      <span className="d-block">Price: <b>Rs</b> {item.price || 'N/A'}</span>
                      <span className="d-block">Quantity: {item.quantity || 'N/A'}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h3 className="text-danger text-center">No Product In Cart</h3>
            )}
          </div>

        </div>

        {/* Right side of Cart */}
        <div className="col-12 col-sm-5 border p-3">
          <div className="mb-3">
            <h5 className="fw-bold">Total MRP</h5>
            <p className="fw-bold">Rs {totalMRP}</p>
          </div>
          <Link to='/userDetails'>
          <button className="btn-myntra pt-3 pb-3 px-5 fw-bold rounded-1 w-100">
            Place Order
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
