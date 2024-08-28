import { useState } from "react";
import { sweets } from "../utils/Data";

const Sweets = () => {
  const [add, setAdd] = useState(0);
  const [num, setNum] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCartBtn = (item) => {
    setCart(...cart, item);
  };
  return (
    <div className="px-5">
      <h1 className="text-3xl pt-20 p-3 font-bold text-black">
        🍰 Shirinliklar
      </h1>
      <div className="flex flex-col">
        {sweets.map((item) => {
          return (
            <div className="flex  my-2" key={item.id}>
              <img
                src={item.image}
                className="w-[150px] rounded-2xl h-[150px] object-cover"
                alt=""
              />
              <div className="flex flex-col ml-4 justify-between py-2">
                <p className="text-xl font-semibold text-[#222]">
                  {item.title}
                </p>
                <div>
                  <p className="text-2xl font-semibold text-[#222]">
                    {item.price}
                    <span className="text-[18px]">sum</span>
                  </p>

                  {add >= 1 && add === item.id ? (
                    <div className="flex justify-between">
                      <button
                        onClick={() => {
                          if (num > 1) setNum(num - 1);
                        }}
                      >
                        -
                      </button>
                      <p>{num}</p>
                      <button onClick={() => setNum(num + 1)}>+</button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCartBtn(item)}
                      className=" border-[#1BC5BD] cursor-pointer border-[2px] items-center px-6 flex rounded-3xl text-[#1BC5BD] font-semibold text-2xl"
                    >
                      <span className="text-[#1BC5BD] text-3xl mb-1 mr-2">
                        +
                      </span>{" "}
                      Qo'shish
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sweets;
