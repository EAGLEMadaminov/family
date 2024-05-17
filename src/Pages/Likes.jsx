import { useState, useEffect } from "react";
import Product from "../components/Product";
import { useSelector } from "react-redux";

const Likes = () => {
  const [allLiked, setAllLiked] = useState([]);
  const isChangeLike = useSelector((store) => store.product.isChangeLike);
  useEffect(() => {
    let likedList = JSON.parse(localStorage.getItem("likedList"));
    likedList = Boolean(likedList) ? likedList : [];
    setAllLiked(likedList);
  }, [isChangeLike]);
  return (
    <div className="flex w-[full] px-5 mx-auto mt-10 gap-20 flex-wrap translate-y-[-100px]">
      <div className="flex gap-5 mx-auto flex-wrap mt-[170px] ">
        {allLiked.map((item) => {
          return <Product data={item} key={item.id} />;
        })}
      </div>

      {allLiked?.length === 0 ? (
        <div className="mx-auto text-center mt-20 ">
          <img
            src="https://pngimg.com/d/like_PNG14.png"
            alt=" like image "
            className="w-[100px] h-[100px] mx-auto"
          />
          <h3 className="text-xl mt-5 font-semibold">
            Sizga yoqqanini qoʻshing
          </h3>
          <p className="text-[14px] mt-3">
            Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha
            saralanganlar saqlanib qoladi
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Likes;
