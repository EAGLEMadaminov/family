import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { categories } from "../utils/Data";
import RestaurantComponent from "../components/RestaurantComponent";

import Products from "../features/restaurant/components/products";

const Restaurant = () => {
  const [showElement, setShowElement] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const { id } = useParams();
  const lang = useSelector((store) => store.main.lang);
  let data = categories.filter((item) => item.id == id);

  const sectionRefs = useRef(
    data[0].options?.reduce((acc, option) => {
      acc[option.id] = React.createRef();
      return acc;
    }, {})
  );

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowElement(true);
    } else {
      setShowElement(false);
    }

    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let newActiveSection = null;
    data[0].options.forEach((option) => {
      const ref = sectionRefs.current[option.id].current;
      if (
        ref &&
        ref.offsetTop + 230 <= scrollPosition &&
        ref.offsetTop + ref.offsetHeight > scrollPosition - 200
      ) {
        newActiveSection = option.id;
      }
    });
    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = async (e) => {
    let value = e.target.value;
    setSearchValue(value);
  };

  return (
    <div className="my-[80px] w-[100vw]">
      {data.map((one) => {
        return (
          <RestaurantComponent
            data={one}
            key={one.id}
            styles={"rounded-none"}
            textStyle={"px-5"}
          />
        );
      })}

      {showElement ? (
        <div className="fixed top-[85px]  py-5 w-screen no-scrollbar snap-x snap-mandatory overflow-x-scroll z-[1000000000000000000] left-0">
          {data[0].options?.map((item) => {
            return (
              <a
                href={`#${item.id}`}
                key={item.id}
                className={`border ${
                  activeSection === item.id
                    ? "bg-[#671ABF] text-white"
                    : "bg-white"
                } border-[#671ABF] uppercase p-1 px-2 ml-5 rounded-xl shodow-lg`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      ) : (
        ""
      )}

      <div className="px-5 mx-5 flex items-center p-2  bg-gray-100 text-gray-400 rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={14}
          height={14}
        >
          <path
            fill="#9ca3af"
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
          />
        </svg>
        <input
          type="search"
          className="px-3 w-[95%] bg-transparent outline-none"
          placeholder="Qidirmoq"
          onChange={handleChange}
        />
      </div>
      {data[0].options?.map((item) => {
        return (
          <section
            key={item.id}
            ref={sectionRefs.current[item.id]}
            className="mt-5"
            id={item.id}
          >
            <h2 className="ml-5 text-2xl capitalize mb-2 font-semibold">
              {item.name}
            </h2>
            <Products data={item?.products} />
          </section>
        );
      })}
    </div>
  );
};

export default Restaurant;
