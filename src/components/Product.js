import "../style/product.css";
import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import CartContext from "../Store/CartContextNew";


function Product() {
  const [product, setProduct] = useState({ rating: { rate: "", count: "" } });
  const { id } = useParams();
  const cartCtx = useContext(CartContext);

  async function fetchProductByid() {
    await fetch(`http://localhost:5000/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchProductByid();
  }, []);

  function hanldleAddToCart(product) {
    cartCtx.addItem(product)
  }

  return (
    <>
      <section className="pt-4 container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 imgSection pe-4">

            <div className="row">
              <div className="col-sm-6">
                <img src={product.image} alt="Loading" className="me-2 w-100" />
              </div>
            </div>

          </div>
          <div className="col-12 col-sm-6 p-5">
            <div className="border-bottom border-2 pb-4">
              <h4>{product.title}</h4>
              <p className="pb-2 text-secondary font-monospace">
                {product.description}
              </p>

              <span className="border border-1 pt-1 pb-1 px-2">
                <i className="bi bi-star-fill text-success"></i> Rating
              </span>

            </div>
            <div className="mt-3">
              <div>
                <span className="fw-bold">Rs. {product.price}</span>

              </div>
              <div className="buySection mt-4">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <Link
                      // to={"/cart"}
                      className="btn-myntra pt-3 pb-3 px-5 fw-bold rounded-1"
                      onClick={() => hanldleAddToCart(product)}
                    >
                      <i className="bi bi-bag"> </i>Add To Bag
                    </Link>
                  </div>
                  <div className="col-12 col-sm-6">
                    <Link
                      // to={"/checkout"}
                      className="pt-3 pb-3 px-4 border rounded-1 fw-bold bg-body wishListBtn"
                    >
                      <i className="bi bi-heart"> </i>WISHLIST
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Product;














// import "../style/product.css";
// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// function Product() {
//   const [Product, setProduct] = useState({ rating: { rate: "", count: "" } });
//   const { id } = useParams();
//   // const { id } = params;
//   //   console.log(id)

//   async function fetchProductByid() {
//     await fetch(`https://fakestoreapi.com/products/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setProduct(data);
//         console.log(data);
//       })
//       .catch((error) => console.log(error));
//   }
//   useEffect(() => {
//     fetchProductByid();
//   }, []);

//   return (
//     <>
//       <section className="pt-4 container-fluid">
//         <div className="row">
//           <div className="col-12 col-sm-6 imgSection pe-4">

//             <div className="row">
//               <div className="col-sm-6">
//                 <img src={Product.image} alt="Loading" className="me-2 w-100" />
//               </div>
//             </div>

//           </div>
//           <div className="col-12 col-sm-6 p-5">
//             <div className="border-bottom border-2 pb-4">
//               <h4>{Product.title}</h4>
//               <p className="pb-2 text-secondary font-monospace">
//                 {Product.description}
//               </p>

//               <span className="border border-1 pt-1 pb-1 px-2">
//                 <span className="fw-bold">{Product.rating.rate}</span>
//                 <i className="bi bi-star-fill text-success"></i> Rating
//               </span>

//             </div>
//             <div className="mt-3">
//               <div>
//                 <span className="fw-bold">Rs. {Product.price}</span>

//               </div>
//               <div className="buySection mt-4">
//                 <div className="row">
//                   <div className="col-12 col-sm-6">
//                     <Link
//                       to={"/cart"}
//                       className="btn-myntra pt-3 pb-3 px-5 fw-bold rounded-1"
//                     >
//                       <i className="bi bi-bag"> </i>Add To Bag
//                     </Link>
//                   </div>
//                   <div className="col-12 col-sm-6">
//                     <Link
//                       to={"/checkout"}
//                       className="pt-3 pb-3 px-4 border rounded-1 fw-bold bg-body wishListBtn"
//                     >
//                       <i className="bi bi-heart"> </i>WISHLIST
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
// export default Product;
