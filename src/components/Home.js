import Banner from "./Banner";
import "../style/home.css";
import React, { useEffect, useState ,useContext} from "react";
import { Link } from "react-router-dom";
import CartContext from "../Store/CartContextNew";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items to display per page
  const cartCtx = useContext(CartContext);


  function hanldleAddToCart(product) {
    cartCtx.addItem(product)
  }
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        console.log(data)
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  // Calculate the index of the first and last item of the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Banner />
      <h4 className="text-center mt-5 mb-5 fw-bold">PRODUCTS</h4>
      <section className="container-fluid">
        <div className="row mb-5">
          {currentProducts.map((product, index) => (
            <div className="col-6 col-sm-3 mb-5" key={index}>
              <div className="card ProductCard rounded-0">
                  <img src={product.image} className="card-img-top" alt="n/a" />
                  <div className="card-body">
                    <h5 className="card-title fs-6">{product.name}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fs-6 fw-bold">Rs. {product.price}</span>
                    </div>
                  </div>
                <div className="card-footer p-0 border-top-0">
                  <button
                    className="btn w-100 rounded-0 fw-semibold border border-secandory"
                    style={{ backgroundColor: "#FFFFFF", color: "black" }}
                   onClick={() => hanldleAddToCart(product)}>
                    <i className="bi bi-cart me-2"></i>
                    Add TO Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination-container d-flex justify-content-center">
          {[...Array(Math.ceil(products.length / itemsPerPage)).keys()].map((number) => (
            <button key={number} className="btn btn-primary me-2" onClick={() => paginate(number + 1)}>
              {number + 1}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
