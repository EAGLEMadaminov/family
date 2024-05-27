import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import RestaurantLogo from '../assets/fork.png';
import { usePathName } from './../router/hooks/use-path-name';
import { showAccount, showInformation } from '../redux/slices/footer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Footer = () => {
  const { pathname } = usePathName();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const isChangeCount = useSelector((store) => store.footer.isChangeCount);
  const [changeInterval, setChangeInterval] = useState(false);
  const sliderRef = useRef(null);
  useEffect(() => {
    let products = JSON.parse(localStorage.getItem('choosen'));
    products = Boolean(products) ? products : [];
    let value = 0;
    products.forEach((item) => {
      value += item?.count;
    });
    setCount(value);
  }, [isChangeCount]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (sliderRef.current) {
        setChangeInterval(!changeInterval);
        if (
          sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollLeft = 0;
        } else {
          sliderRef.current.scrollLeft += 65;
        }
      }
    }, 2000);

    return () => {
      clearInterval(timer);
      setChangeInterval(!changeInterval);
    };
  }, [changeInterval]);

  return (
    <div className="fixed bottom-0 flex px-5 items-end py-3 footer-shadow border-t w-[100%] bg-white  justify-around">
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
            count > 0 ? 'p-[2px] px-[6px]' : ''
          }  rounded-[50%] text-white right-[-6px] top-[-10px]`}
        >
          {count > 0 ? count : ''}
        </p>
      </Link>
      {pathname.includes('category') ? (
        <div
          ref={sliderRef}
          onClick={() => dispatch(showInformation({ id: id, show: true }))}
          className="overflow-scroll bg-transparent justify-between ml-1 no-scrollbar flex gap-3 w-[55px]"
        >
          <button className="text-gray-500 bg-transparent cursor-pointer flex flex-col items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <span className="text-[12px] mt-1">Ma&apos;lumot</span>
          </button>
          <button className="text-gray-500 bg-transparent ml-1 cursor-pointer flex flex-col items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
            <span className="text-[12px] mt-1">Bog&apos;lanish</span>
          </button>
          <button className="text-gray-500 bg-transparent cursor-pointer flex flex-col items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
            <span className="text-[12px] mt-1">Instagram</span>
          </button>
        </div>
      ) : (
        ''
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
