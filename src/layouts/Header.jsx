import { checkLang } from '../redux/slices/main';
import { useDispatch, useSelector } from 'react-redux';
import { usePathName } from '../router/hooks/use-path-name';
import { checkCommetsFunc, manageConnect } from '../redux/slices/head';
import Comments from '../features/header/components/CommentsPopup';
import { useNavigate } from 'react-router-dom';
import ConnectPopup from '../features/header/components/ConnectPopup';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const Header = () => {
  const comments = useSelector((store) => store.head.showComments);
  const showConnect = useSelector((store) => store.head.showConnect);
  const isChangeLang = useSelector((store) => store.main.lang);
  const { t, i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem('lang') || 'uz'
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = usePathName();

  useEffect(() => {
    localStorage.setItem('lang', selectedLang);
    i18n.changeLanguage(selectedLang);
  }, [selectedLang, isChangeLang]);

  const handleChangeLangBtn = (e) => {
    let value = e.target.value;
    dispatch(checkLang(value));
    setSelectedLang(value);
    i18n.changeLanguage(value);
  };
  return (
    <div className="flex justify-between z-[10] fixed top-0 w-[100%] items-center px-5 bg-[#671ABF] py-5">
      {showConnect ? <ConnectPopup /> : ''}
      {pathname.includes('category') ? (
        <button
          onClick={() => navigate('/')}
          className="text-white p-2 bg-[#7E3CC9] rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </button>
      ) : (
        <button
          className="text-white bg-transparent"
          onClick={() => dispatch(manageConnect(true))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
      )}

      {pathname.includes('category') ? (
        <button
          className="flex items-center text-white gap-2 p-2 bg-[#7E3CC9] px-3 rounded-xl"
          onClick={() => dispatch(checkCommetsFunc(!comments))}
        >
          {t('header.comment')}{' '}
          <span className="h-[14px] w-[1px] mx-2 bg-white block"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star-fill mr-2"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          5.0
        </button>
      ) : (
        <p className="text-xl text-white" onClick={() => navigate('/')}>
          {t('header.header_text')}
        </p>
      )}
      <select
        className="p-2 rounded-lg outline-none  appearance-none px-3 bg-[#7E3CC9] text-white tracking-tight"
        onChange={(e) => handleChangeLangBtn(e)}
        value={selectedLang}
      >
        <option value="uz">UZ</option>
        <option value="ru">RU</option>
      </select>

      {comments ? <Comments /> : ''}
    </div>
  );
};

export default Header;
