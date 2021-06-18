import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/productsAction-creator";

const ProductDetail = () => {
  const productId = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.selectedProduct.products);
  const { title, price, description, category, image } = product;
  const emptyUrl = "#";

  // console.log(product)
  // console.log(productId.productID)

  useEffect(() => {
    if (productId && productId !== "") {
      axios
        .get(`https://fakestoreapi.com/products/${productId.productID}`)
        .then((r) => dispatch(selectedProduct(r.data)))
        .catch((err) => console.log("Error:", err));
    }
  }, [productId, dispatch]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img src={image} alt={title} className="ui fluid image" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a href={emptyUrl} className="ui teal tag label">
                    ${price}
                  </a>
                </h2>
                <h3 className="ui brown black header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon" />
                  </div>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
