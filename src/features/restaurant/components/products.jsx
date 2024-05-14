import { useState } from "react";
import { checkCount } from "../../../redux/slices/footer";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedProduct,
  showSingleProduct,
} from "../../../redux/slices/product";
const Products = ({ data }) => {
  const [productStates, setProductStates] = useState({});
  const [products, setProducts] = useState(data);
  const countChange = useSelector((store) => store.footer.isChangeCount);

  const dispatch = useDispatch();

  const subsFunction = (array, product) => {
    dispatch(checkCount(!countChange));
    let newValue = array.filter((item) => {
      if (item.id === product.id && item.count > 1) {
        item.count = item.count - 1;
      }
      return item;
    });
    return newValue;
  };
  const subsProductBtn = (product) => {
    let values = JSON.parse(localStorage.getItem("choosen"));

    if (product.count <= 1) {
      let newArr = values.filter((one) => one.id !== product.id);
      localStorage.setItem("choosen", JSON.stringify(newArr));
      updateProductState(product.id, { showPrice: false });
    } else {
      let arr = subsFunction(values, product);
      localStorage.setItem("choosen", JSON.stringify(arr));
    }
    let newValues = subsFunction(products, product);
    setProducts(newValues);
  };

  const addOneProductBtn = (product) => {
    dispatch(checkCount(!countChange));
    let value = JSON.parse(localStorage.getItem("choosen"));
    value = value.map((item) => {
      if (item.id === product.id) {
        item.count += 1;
      }
      return item;
    });
    localStorage.setItem("choosen", JSON.stringify(value));
    let newValue = products.filter((one) => {
      if (one.id == product.id) {
        one.count = one.count + 1;
      }
      return one;
    });
    setProducts(newValue);
  };

  const addToCatrBtn = (product) => {
    dispatch(checkCount(!countChange));
    let oldValues = JSON.parse(localStorage.getItem("choosen"));
    oldValues = Boolean(oldValues) ? oldValues : [];
    oldValues.push(product);
    localStorage.setItem("choosen", JSON.stringify(oldValues));
    let updatedProduct = { ...product, showPrice: true };
    updateProductState(product.id, updatedProduct);
  };

  const updateProductState = (productId, updatedValues) => {
    setProductStates((prevState) => ({
      ...prevState,
      [productId]: { ...prevState[productId], ...updatedValues },
    }));
  };

  return (
    <div className="mx-5 flex justify-between flex-wrap scroll-smooth">
      {data.map((product) => {
        const productState = productStates[product.id] || {};
        const { showPrice = false, count = 1 } = productState;
        return (
          <div
            className="flex flex-col w-[45%] sm:w-[30%] my-3 "
            key={product.id}
          >
            <img
              src={product.image}
              onClick={() => {
                dispatch(getSelectedProduct(product));
                dispatch(showSingleProduct(true));
              }}
              className="h-[150px] w-[150px] rounded-xl object-cover product-shadow"
              alt="Food image"
            />
            <h3 className="font-semibold text-[16px] capitalize ml-2 mb-0">
              {product.title}
            </h3>
            {showPrice && (
              <div>
                <p className="text-[12px] flex flex-col mt-0 ml-2 font-bold text-[#222]">
                  {product.price} so&apos;m
                </p>
              </div>
            )}

            {showPrice && count >= 1 && (
              <div className="flex justify-between items-center mt-2 px-5">
                <button onClick={() => subsProductBtn(product)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-dash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                  </svg>
                </button>
                <p>{product.count}</p>
                <button onClick={() => addOneProductBtn(product)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg>
                </button>
              </div>
            )}

            {!showPrice && (
              <button
                className="p-1 px-3 w-[150px] mt-5 bg-gray-200 rounded-xl"
                onClick={() => addToCatrBtn(product)}
              >
                {product.price} so&apos;m
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
