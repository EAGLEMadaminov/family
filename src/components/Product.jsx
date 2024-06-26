import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkCount } from '../redux/slices/footer';
import {
  getSelectedProduct,
  showSingleProduct,
  checkLike,
} from '../redux/slices/product';
import { useTranslation } from 'react-i18next';

const Product = ({ data: product }) => {
  const [productStates, setProductStates] = useState({});
  const countChange = useSelector((store) => store.footer.isChangeCount);
  const productState = productStates[product.id] || {};
  const { showPrice = false, count = 1, isLiked } = productState;
  const isChangeLike = useSelector((store) => store.product.isChangeLike);
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const subsFunction = (array, product) => {
    let changedCount = 0;
    let newValue = array.map((item) => {
      if (item.id === product.id && item.count > 1) {
        item.count = item.count - 1;
        changedCount = item.count;
      }
      return item;
    });
    updateProductState(product.id, { count: changedCount });
    return newValue;
  };

  useEffect(() => {
    let allLiked = JSON.parse(localStorage.getItem('likedList'));
    allLiked = allLiked?.length > 0 ? allLiked : [];
    allLiked.forEach((item) => {
      if (item.id === product.id) {
        product.isLiked = true;
        updateProductState(product.id, { isLiked: true });
      }
    });
  }, []);

  const subsProductBtn = (product) => {
    dispatch(checkCount(!countChange));
    let values = JSON.parse(localStorage.getItem('choosen'));
    let productCount = 0;
    values.forEach((item) => {
      if (item.id === product.id) {
        productCount = item.count;
      }
    });

    if (productCount <= 1) {
      let newArr = values.filter((one) => one.id !== product.id);
      localStorage.setItem('choosen', JSON.stringify(newArr));
      updateProductState(product.id, { showPrice: false });
    } else {
      let arr = subsFunction(values, product);
      localStorage.setItem('choosen', JSON.stringify(arr));
    }
  };

  const addOneProductBtn = (product) => {
    console.log(productState);
    dispatch(checkCount(!countChange));
    let productCount = 0;
    let value = JSON.parse(localStorage.getItem('choosen'));
    value = value.map((item) => {
      if (item.id === product.id) {
        item.count += 1;
        productCount = item.count;
      }
      return item;
    });
    localStorage.setItem('choosen', JSON.stringify(value));
    updateProductState(product.id, { count: productCount });
  };

  const addToCatrBtn = (product) => {
    dispatch(checkCount(!countChange));
    let oldValues = JSON.parse(localStorage.getItem('choosen'));
    oldValues = Boolean(oldValues) ? oldValues : [];
    oldValues.push(product);
    localStorage.setItem('choosen', JSON.stringify(oldValues));
    let updatedProduct = { ...product, showPrice: true, count: 1 };
    updateProductState(product.id, updatedProduct);
  };

  const updateProductState = (productId, updatedValues) => {
    setProductStates((prevState) => ({
      ...prevState,
      [productId]: { ...prevState[productId], ...updatedValues },
    }));
  };

  const productLikeFunction = (product, value) => {
    let oldValues = JSON.parse(localStorage.getItem(value));
    let arr = oldValues ? oldValues : [];
    let checkLike = false;
    arr.forEach((item) => {
      if (item.id === product.id) {
        checkLike = true;
      }
    });
    let updatedProduct = { ...product };
    if (checkLike) {
      arr = arr.filter((item) => item.id !== product.id);
      updatedProduct.isLiked = false;
      localStorage.setItem(value, JSON.stringify(arr));
    } else {
      updatedProduct.isLiked = true;
      arr.push(product);
      localStorage.setItem(value, JSON.stringify(arr));
    }
    updateProductState(product.id, updatedProduct);
  };

  const showWithTokenLike = async (product, token) => {
    // try {
    //   let { data } = await axiosIntance.post(
    //     `/products/${product.id}/like/`,
    //     null,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleLikeBtn = (product) => {
    dispatch(checkLike(!isChangeLike));
    let token = localStorage.getItem('access_token');
    let value = '';
    if (token) {
      showWithTokenLike(product, token);
      value = 'userLikedList';
    } else {
      value = 'likedList';
    }
    productLikeFunction(product, value);
  };

  return (
    <div
      className="flex flex-col md:w-[20%] md:mx-5 sm:w-[30%] my-3 "
      key={product.id}
    >
      <div className="relative">
        <img
          src={product.image}
          onClick={() => {
            dispatch(getSelectedProduct(product));
            dispatch(showSingleProduct(true));
          }}
          className="h-[150px] w-[150px] md:w-full  rounded-xl object-cover  product-shadow"
          alt="Food image"
        />
        <button
          className="absolute right-[10px] text-xl bg-transparent top-[10px]"
          onClick={() => handleLikeBtn(product)}
        >
          {isLiked ? '❤' : '🤍'}
        </button>
      </div>
      <h3 className="font-semibold text-[16px] capitalize ml-2 mb-0">
        {product.title}
      </h3>
      {showPrice && (
        <div>
          <p className="text-[12px] flex flex-col mt-0 ml-2 font-bold text-[#222]">
            {product.price} {t('price')}
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
          <p>{count}</p>
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
          {product.price} {t("price")}
        </button>
      )}
    </div>
  );
};

export default Product;
