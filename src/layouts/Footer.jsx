import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantLogo from "../assets/fork.png";
import { usePathName } from "./../router/hooks/use-path-name";
import { showAccount } from "../redux/slices/footer";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const { pathname } = usePathName();
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const isChangeCount = useSelector((store) => store.footer.isChangeCount);

  useEffect(() => {
    let products = JSON.parse(localStorage.getItem("choosen"));
    products = Boolean(products) ? products : [];
    let value = 0;
    products.forEach((item) => {
      value += item?.count;
    });
    setCount(value);
  }, [isChangeCount]);

  return (
    <div className="fixed bottom-0 flex px-5 items-end py-3 footer-shadow border-t w-full bg-white  justify-around">
      <Link
        to="/"
        className="text-gray-500 cursor-pointer flex flex-col items-center"
      >
        <img
          src={RestaurantLogo}
          className="w-[50px] h-[40px] object-contain"
          alt=""
        />
        <span className="text-[12px]">Restaurantlar</span>
      </Link>
      <Link
        to="/cart"
        className="text-gray-500 relative cursor-pointer flex flex-col items-center justify-between"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-cart2"
          viewBox="0 0 16 16"
        >
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
        </svg>
        <span className="text-[12px] mt-1">Savat</span>
        <p
          className={`text-[10px] absolute bg-[#671ABF] ${
            count > 0 ? "p-[2px] px-[6px]" : ""
          }  rounded-[50%] text-white right-[-6px] top-[-10px]`}
        >
          {count > 0 ? count : ""}
        </p>
      </Link>
      {pathname.includes("category") ? (
        <button className="text-gray-500 cursor-pointer flex flex-col items-center justify-end h-[50px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
          <span className="text-[12px] mt-1">Ma'lumot</span>
        </button>
      ) : (
        ""
      )}

      <Link
        to="/like"
        className="text-gray-500 relative cursor-pointer flex flex-col items-center justify-between"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-suit-heart-fill"
          viewBox="0 0 16 16"
        >
          <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
        </svg>
        <span className="text-[12px]">Yoqtirilgan</span>
      </Link>
      <button
        className="text-gray-500 bg-transparent cursor-pointer flex flex-col items-center justify-end h-[50px]"
        onClick={() => dispatch(showAccount(true))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
        <span className="text-[12px]">Account</span>
      </button>
    </div>
  );
};

export default Footer;
