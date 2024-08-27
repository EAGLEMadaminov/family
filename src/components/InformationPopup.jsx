import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showInformation } from "../redux/slices/footer";
import Phone from "../assets/phone.png";
import { categories } from "../utils/Data";

const InformationPopup = ({ id }) => {
  const dispatch = useDispatch();
  const [selectedRestaurant, setSelectedRestaurant] = useState({});

  useEffect(() => {
    let restaunrantInfo = categories.filter((item) => {
      if (item.id == id) {
        return item;
      }
    });
    setSelectedRestaurant(restaunrantInfo[0].information);
  }, []);

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
            {selectedRestaurant?.instagram}
          </a>
        </div>
        <div className="flex items-center mt-7 border-b pb-7 px-5">
          <img
            src={Phone}
            alt=""
            className="w-[50px] h-[50px] bg-transparent"
          />

          <a href="tel:" className="ml-5 text-xl font-semibold">
            {selectedRestaurant?.phone}
          </a>
        </div>
        <div className="flex items-center mt-7 border-b pb-7 pr-5 pl-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/74/Location_icon_from_Noun_Project.png"
            alt=""
            className="w-[60px] "
          />
          <p className="ml-5 text-xl">{selectedRestaurant?.location}</p>
        </div>
        <div className="flex items-center mt-7 pb-7 border-b px-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png"
            alt="instagram icon image"
            className="w-[50px] h-[50px] bg-transparent"
          />
          <p className="ml-5 text-xl">{selectedRestaurant?.workTime}</p>
        </div>
      </div>
    </div>
  );
};

export default InformationPopup;
