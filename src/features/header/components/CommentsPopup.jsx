import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkCommetsFunc } from '../../../redux/slices/head';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Comments = () => {
  const navigate = useNavigate();
  const [showStarsPercentage, setShowStarsPersantage] = useState(false);
  const showComment = useSelector((store) => store.head.showComments);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div className="bg-white border-t  z-[10] rounded-t-2xl w-full p-4 top-[70px] absolute left-0 right-0">
      <div className="relative">
        <button
          className="rounded-[50%] p-1 bg-[#7E3CC9] text-white mr-10 flex ml-auto"
          onClick={() => dispatch(checkCommetsFunc(!showComment))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
        <span className="w-full block h-[1px] top-14 bg-gray-500 absolute left-0"></span>
      </div>
      <h2 className="text-xl font-bold text-center mt-10">
        {t('header.comment')}
      </h2>
      <div className="border px-10 py-5 my-4 text-center rounded">
        <div className="flex mx-auto justify-center gap-4 w-full">
          <h3 className="text-xl font-semibold">0.0</h3> <span>⭐⭐⭐⭐⭐</span>
          {showStarsPercentage ? (
            <button className="" onClick={() => setShowStarsPersantage(false)}>
              {t('comment.hide')}
            </button>
          ) : (
            <button onClick={() => setShowStarsPersantage(true)}>
              {t('comment.detail')} ..
            </button>
          )}
        </div>
        {showStarsPercentage ? (
          <div className="flex flex-col mt-5">
            <div className="flex items-center justify-between gap-2">
              <p>5</p> ⭐{' '}
              <div className=" h-1 w-full bg-neutral-100 dark:bg-neutral-300">
                <div
                  className="h-1 bg-[#671ABF]"
                  style={{ width: `${65}%` }}
                ></div>
              </div>
              <p>65%</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p>4</p> ⭐{' '}
              <div className=" h-1 w-full bg-neutral-100 dark:bg-neutral-300">
                <div
                  className="h-1 bg-[#671ABF]"
                  style={{ width: `${15}%` }}
                ></div>
              </div>
              <p>15%</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p>3</p> ⭐{' '}
              <div className=" h-1 w-full bg-neutral-100 dark:bg-neutral-300">
                <div
                  className="h-1 bg-[#671ABF]"
                  style={{ width: `${10}%` }}
                ></div>
              </div>
              <p>10%</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p>2</p> ⭐{' '}
              <div className=" h-1 w-full bg-neutral-100 dark:bg-neutral-300">
                <div
                  className="h-1 bg-[#671ABF]"
                  style={{ width: `${25}%` }}
                ></div>
              </div>
              <p>25%</p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p>1</p> ⭐{' '}
              <div className=" h-1 w-full bg-neutral-100 dark:bg-neutral-300">
                <div
                  className="h-1 bg-[#671ABF]"
                  style={{ width: `${5}%` }}
                ></div>
              </div>
              <p>5%</p>
            </div>
          </div>
        ) : (
          ''
        )}
        <button className="rounded-3xl w-[100%] mt-5 bg-[#671ABF] text-white text-2xl mx-auto p-3 px-5">
          {t('comment.comment_btn')}
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex  items-center gap-3">
          <span className="text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </span>
          <div>
            <h3 className="text-xl font-semibold">Name</h3>
            <p className="text-gray-400">
              05.11.2024 <span>12:50</span>
            </p>
          </div>
        </div>
        <div className="flex">⭐⭐⭐⭐⭐</div>
      </div>
      <p className="text-[18px] mt-2 font-thin  text-gray-500">
        Ovqat tami yaxshi chiqqan
      </p>
      <button
        className="border border-[#7936C7] rounded-3xl text-[#7936C7] p-4 flex my-10 w-[100%] justify-center  mx-auto text-xl font-semibold"
        onClick={() => {
          navigate('/comments');
          dispatch(checkCommetsFunc(false));
        }}
      >
        {t('comment.see_all')}
      </button>
    </div>
  );
};

export default Comments;
