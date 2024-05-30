import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAccount } from '../redux/slices/footer';
import ReactInputMask from 'react-input-mask';
import AuthCode from 'react-auth-code-input';
import { useTranslation } from 'react-i18next';
import { checkLang } from '../redux/slices/main';

const Account = () => {
  const dispatch = useDispatch();
  let token = localStorage.getItem('access_token');
  const [showRegistration, setShowRegistration] = useState(false);
  const [phoneValue, setPhoneValue] = useState('');
  const [showAuthCode, setShowAuthCode] = useState(false);
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const isChangeLang = useSelector((store) => store.main.lang);
  const { t, i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem('lang') || 'uz'
  );

  const formatChars = {
    '-': '[0-9]',
  };

  const handleActivationBtn = async () => {
    console.log(1);
    let data = {};
    data.name = name;
    data.phone_number = phoneValue.replace(/\s/g, '');
    if (name && phoneValue) {
      console.log(data);
      setShowAuthCode(true);
      setErrorMessage('');
    } else {
      setErrorMessage(`${t('account.please_enter')}`);
    }
  };
  const sendActivation = async (value) => {
    if (value.length == 5) {
      let activation = {};
      activation.code = value;
      activation.phone_number = phoneValue.replace(/\s/g, '');
      console.log(activation);
      setShowAuthCode(false);
      localStorage.setItem('access_token', 'has');
    }
  };
  useEffect(() => {
    localStorage.setItem('lang', selectedLang);
    i18n.changeLanguage(selectedLang);
  }, [selectedLang, isChangeLang]);
  setTimeout(() => {
    setErrorMessage('');
  }, 5000);
  const handleChangeLang = (value) => {
    setSelectedLang(value);
    i18n.changeLanguage(value);
    dispatch(checkLang(value));
  };
  return (
    <div className="fixed pb-10 bottom-0 z-[1000] min-h-[60vh] border-t w-full  border-[#222] rounded-t-2xl bg-white">
      <div className="flex justify-between items-center border-b px-5 ">
        <h2 className="text-2xl font-bold text-center w-full py-5">
          {t('account.account')}
        </h2>
        <button
          className="p-1 bg-[#8f48e0] text-white rounded-[50%]"
          onClick={() => dispatch(showAccount(false))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
      </div>
      {!token ? (
        <div>
          <div className="px-5 text-center">
            <p className="text-[18px] text-center mt-5">
              {t('account.now_you')}{' '}
              <span className="text-[#671ABF] font-semibold">
                {t('account.no_account')}
              </span>
              . {t('account.new_open')}
            </p>

            <button
              className="w-[80%] rounded-3xl mt-4 p-2 text-center text-white text-[18px] mx-auto bg-[#671ABF]"
              onClick={() => setShowRegistration(true)}
            >
              {t('account.registr_btn')}
            </button>
          </div>
          {showRegistration ? (
            <div className="absolute h-[70vh] px-5 text-[18px] rounded-t-2xl border-t bg-white bottom-0">
              <div className="flex justify-between items-center my-5">
                <h2 className="text-2xl font-semibold text-center ">
                  {t('account.registr_btn')}
                </h2>
                <button
                  className="p-1 bg-[#8f48e0] text-white rounded-[50%]"
                  onClick={() => setShowRegistration(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </button>
              </div>
              {showAuthCode ? (
                ''
              ) : (
                <div>
                  <label htmlFor="name">{t('order.name')} *</label>
                  <input
                    type="text"
                    required
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-1 px-2 my-2  border rounded-lg text-[18px]"
                    placeholder={t('order.name_input')}
                  />
                  <label htmlFor="phone">{t('order.phone')} *</label>
                  <ReactInputMask
                    formatChars={formatChars}
                    mask="+998 -- --- -- --"
                    onChange={(e) => setPhoneValue(e.target.value)}
                    placeholder="+998 00 000-00-00"
                    className="w-ful border  w-full text-[18px] mt-2 p-2 px-3 rounded-lg outline-none"
                  />
                  <p className="text-[14px] text-rose-500 text-center mt-2">
                    {errorMessage}
                  </p>
                </div>
              )}

              {showAuthCode ? (
                <div className="activation-code-div my-5">
                  <p className="text-center text-[14px] mb-5 p-0">
                    {t('account.send_code')}
                  </p>
                  <p className="text-[#671ABF] mb-5 text-[14px] mx-auto flex justify-center p-0 m-0">
                    {phoneValue}{' '}
                  </p>
                  <AuthCode
                    length={5}
                    className="bg-[#1F2026]"
                    onChange={sendActivation}
                  />
                </div>
              ) : (
                <button
                  type="button"
                  className="bg-[#671ABF] w-[80%] mx-auto text-white rounded-3xl p-2 text-xl mt-4 flex justify-center"
                  onClick={handleActivationBtn}
                >
                  {t('account.agree')}
                </button>
              )}
            </div>
          ) : (
            ''
          )}
        </div>
      ) : (
        <div className="px-5 min-h-[50vh]">
          <div className="flex mt-5 items-center border-b py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-person-fill text-[#671ABF]"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            <div className="ml-3">
              <p className="font-semibold text-[18px]">Name</p>
              <p className="text-gray-500">{phoneValue}</p>
            </div>
          </div>
          <div className="flex mt-5 items-center border-b py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width={32}
              height={32}
            >
              <path
                fill="#6a17bf"
                d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"
              />
            </svg>
            <select
              name=""
              id=""
              value={selectedLang}
              onChange={(e) => handleChangeLang(e.target.value)}
              className="text-[18px] font-semibold ml-3 w-[70%] border rounded-lg p-1 outline-none"
            >
              <option value="uz">O'zbekcha</option>
              <option value="ru">Ruscha</option>
            </select>
          </div>
          <div className="flex mt-5 items-center border-b py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={32}
              height={32}
            >
              <path
                fill="#673dc1"
                d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"
              />
            </svg>
            <div className="ml-3">
              <p className="font-semibold text-[18px]">
                {t('account.uzbek_sum')}
              </p>
            </div>
          </div>

          <button className="border-[#671ABF] border text-[#671ABF] font-semibold w-[60%] mx-auto  rounded-3xl p-2 text- mt-4 flex justify-center">
            {t('account.log_out')}
          </button>
        </div>
      )}
    </div>
  );
};

export default Account;
