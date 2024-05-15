import React from "react";
import { useDispatch } from "react-redux";
import { showInformation } from "../redux/slices/footer";
import Restaurant from "./RestaurantComponent";

const InformationPopup = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <div className="fixed z-[100000000] rounded-t-[35px] border-t border-[#222] w-[100%] bottom-0 min-h-[90vh] bg-white">
      <div className="flex justify-between px-5 my-5 border-b py-7 border-[#671ABF]">
        <div>
          <img src="" alt="" />
          <h2 className="text-2xl font-bold">Restaurant</h2>
        </div>
        <button
          className="p-1 bg-gray-400 font-bold text-white rounded-[50%]"
          onClick={() => dispatch(showInformation({ id: id, show: false }))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center my-t pb-7 border-b px-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            alt="instagram icon image"
            className="w-[50px] h-[50px] bg-transparent"
          />
          <a href="" className="ml-5 text-xl font-semibold text-[#E12E68]">
            @restaurant
          </a>
        </div>
        <div className="flex items-center mt-7 border-b pb-7 px-5">
          <img
            src="https://www.freeiconspng.com/uploads/phone-png-3.png"
            alt=""
            className="w-[40px] h-[40px] bg-transparent"
          />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={32}
            height={32}
          >
            <path
              fill="#6a1abf"
              d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
            />
          </svg> */}
          <a href="tel:" className="ml-5 text-xl font-semibold">
            +998 90 123-45-67
          </a>
        </div>
        <div className="flex items-center mt-7 border-b pb-7 pr-5 pl-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/74/Location_icon_from_Noun_Project.png"
            alt=""
            className="w-[60px] "
          />
          <p className="ml-5 text-xl">
            Serob MFY O&apos;zbekiston ko&apos;cha N54
          </p>
        </div>
        <div className="flex items-center mt-7 pb-7 border-b px-5">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width={32}
            height={32}
          >
            <path
              fill="#671abf"
              d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"
            />
          </svg> */}
          <img
            src="https://icons.veryicon.com/png/o/business/time-management/calendar-337.png"
            // src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png"
            alt="instagram icon image"
            className="w-[35px] h-[35px] bg-transparent"
          />
          <p className="ml-5 text-xl">Har kuni soat 8:00 dan 22:00 gacha</p>
        </div>
      </div>
    </div>
  );
};

export default InformationPopup;
