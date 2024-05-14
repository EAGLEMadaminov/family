import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showSingleProduct } from "../redux/slices/product";
import { checkCount } from "../redux/slices/footer";
const Product = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(1);
  const isChangeCount = useSelector((store) => store.footer.isChangeCount);
  const dispatch = useDispatch();

  const addToCartBtn = () => {
    dispatch(checkCount(!isChangeCount));
    let product = { ...data };
    product.count = count;
    let has = false;
    let arr = JSON.parse(localStorage.getItem("choosen"));
    arr = Boolean(arr) ? arr : [];
    arr = arr.filter((element) => {
      if (element.id == data.id) {
        element.count = count;
        has = true;
      }
      return element;
    });
    if (!has) {
      arr.push(product);
    }
    localStorage.setItem("choosen", JSON.stringify(arr));
  };
  return (
    <div className="fixed h-[80vh] bottom-0 left-0 right-0 bg-white">
      <div>
        <button
          onClick={() => dispatch(showSingleProduct(false))}
          className="absolute left-[10px] p-1 top-[10px] bg-gray-400 rounded-[50%] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
        <button
          className="absolute right-[20px] bg-transparent text-2xl top-[10px]"
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? "💚" : "🤍"}
        </button>
      </div>
      <img
        src={data.image}
        alt="product iamge"
        className="mx-auto h-[200px] w-screen object-cover "
      />
      <div className="flex justify-between px-5 mt-3 items-center">
        <h2 className="text-xl capitalize font-semibold w-[170px]">
          {data.title} Lorem, ipsum dolor.
        </h2>
        <p className="font-semibold text-2xl">
          {data.price.toLocaleString()} <sup>so&apos;m</sup>
        </p>
      </div>
      <p className="px-5 mt-4 text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ipsum
        quam inventore id dolorem laboriosam tempora nostrum perspiciatis
        necessitatibus ipsa?
      </p>
      <div className="flex justify-between px-5 mt-3 items-center ">
        <div className="flex w-[130px] justify-between  p-2 rounded-xl">
          <button
            className="rounded-sm px-1 bg-[#a468e9]"
            onClick={() => {
              if (count > 1) {
                setCount(count - 1);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
          </button>
          <p>{count}</p>
          <button
            className="rounded-sm  bg-[#a468e9]"
            onClick={() => setCount(count + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </button>
        </div>
        <button
          className="w-[60%] bg-[#671ABF]  text-white p-2 rounded-2xl"
          onClick={addToCartBtn}
        >
          Savatga qo&apos;shish
        </button>
      </div>
    </div>
  );
};

export default Product;
