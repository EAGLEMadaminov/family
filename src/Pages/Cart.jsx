import { useEffect, useState } from 'react';
import CartImage from '../assets/cart.jpg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkCount } from '../redux/slices/footer';
import { useTranslation } from 'react-i18next';

const Cart = () => {
  let allData = JSON.parse(localStorage.getItem('choosen'));
  allData = Boolean(allData) ? allData : [];
  const [changeCount, setChangeCount] = useState(false);
  const [allPrice, setAllPrice] = useState('');
  const [data, setData] = useState(allData);
  const dispatch = useDispatch();
  const isChangeCount = useSelector((store) => store.footer.isChangeCount);
  const { t } = useTranslation();

  useEffect(() => {
    let value = 0;
    if (allData.length > 0) {
      allData.forEach((element) => {
        value += Number(element.price.replace(/\s/g, '')) * element.count;
      });
    }
    setAllPrice(value);
  }, [allData, changeCount]);

  const navigate = useNavigate();

  const subsProductBtn = (product) => {
    dispatch(checkCount(!isChangeCount));
    setChangeCount(!changeCount);
    let arr = JSON.parse(localStorage.getItem('choosen'));
    arr = Boolean(arr) ? arr : [];
    if (product.count > 1) {
      arr = arr.filter((one) => {
        if (one.id === product.id) {
          one.count = product.count - 1;
        }
        return one;
      });
      setData(arr);
    } else {
      arr = arr.filter((one) => one.id !== product.id);
    }
    localStorage.setItem('choosen', JSON.stringify(arr));
    setData(arr);
  };

  const addOneProductBtn = (item) => {
    dispatch(checkCount(!isChangeCount));
    setChangeCount(!changeCount);
    let arr = JSON.parse(localStorage.getItem('choosen'));
    arr = Boolean(arr) ? arr : [];
    arr = arr.filter((one) => {
      if (item.id === one.id) {
        one.count = item.count + 1;
      }
      return one;
    });
    setData(arr);
    localStorage.setItem('choosen', JSON.stringify(arr));
  };
  const handleClearCart = () => {
    dispatch(checkCount(!isChangeCount));
    setChangeCount(!changeCount);
    localStorage.setItem('choosen', JSON.stringify([]));
    setData([]);
  };
  return (
    <div className="mt-[170px] md:w-[700px]  mx-auto translate-y-[-100px]">
      {data?.length > 0 ? (
        <div className="px-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-center mt-5 w-[90%] ">
              {t('basket.basket')}
            </h2>
            <button className="mt-5 text-[#671ABF]" onClick={handleClearCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
              </svg>
            </button>
          </div>
          {data?.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex justify-between mt-5 items-center">
                  <div className="flex">
                    <img
                      src={item.image}
                      alt="product image"
                      className="w-[90px] md:w-[200px] md:h-[200px] h-[90px] rounded-xl object-cover"
                    />
                    <div className="flex flex-col ml-3">
                      <h2 className="text-xl font-semibold capitalize">
                        {item.title}
                      </h2>
                      <p>{item.price}</p>
                    </div>
                  </div>
                  <div className="flex w-[35%] justify-between items-center ">
                    <button
                      onClick={() => subsProductBtn(item)}
                      className="p-2 bg-gray-200 rounded-[50%]"
                    >
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
                    <p>{item.count}</p>
                    <button
                      onClick={() => addOneProductBtn(item)}
                      className="bg-gray-200 p-2 rounded-[50%]"
                    >
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
                </div>
              </div>
            );
          })}
          <div className="flex justify-between mt-5">
            <h3 className="font-semibold">{t('basket.delivery')}</h3>
            <p className="text-[#671ABF] font-semibold">{t('basket.free')}</p>
          </div>
          <div className="flex justify-between mt-5">
            <h3 className="text-[18px] font-semibold">{t('basket.all')}</h3>
            <p className="">
              {allPrice.toLocaleString()} {t('price')}
            </p>
          </div>
          <button
            className="mx-auto w-[60%] justify-center bg-[#671ABF] p-2 px-5 flex mt-4 rounded-3xl text-white"
            onClick={() => navigate('/order')}
          >
            {t('basket.order')}
          </button>
        </div>
      ) : (
        <div className="mt-10 text-center">
          <h2 className="text-2xl mt-[180px] text-center font-semibold">
            {t('basket.basket')}
          </h2>
          <img
            src={CartImage}
            alt=""
            className="w-[200px] h-[180px] mx-auto object-cover"
          />
          <h2 className="text-xl font-semibold ">{t('basket.empty')}</h2>

          <p>{t('basket.add_to_see')}</p>
          <button
            onClick={() => navigate('/')}
            className="w-[80%] rounded-3xl mt-4 p-2 text-center text-white text-[18px] mx-auto bg-[#671ABF]"
          >
            {t('basket.button')}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
