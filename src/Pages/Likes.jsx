import { useState, useEffect } from "react";
import Product from "../components/Product.jsx";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Likes = () => {
  const [allLiked, setAllLiked] = useState([]);
  const isChangeLike = useSelector((store) => store.product.isChangeLike);
  useEffect(() => {
    let likedList = JSON.parse(localStorage.getItem("likedList"));
    likedList = Boolean(likedList) ? likedList : [];
    setAllLiked(likedList);
  }, [isChangeLike]);
  const { t } = useTranslation();
  return (
    <div className="flex w-screen px-5 mx-auto mt-10 gap-20 flex-wrap items-center justify-center">
      {allLiked?.length === 0 ? (
        <div className="mx-auto text-center mt-20  flex flex-col ">
          <img
            src="https://pngimg.com/d/like_PNG14.png"
            alt=" like image "
            className="w-[100px] h-[100px] mx-auto"
          />
          <h3 className="text-xl mt-5 font-semibold">{t("like.add_like")}</h3>
          <p className="text-[14px] mt-3">{t("like.info")}</p>
        </div>
      ) : (
        <div className="flex gap-5 mx-auto flex-wrap mt-[170px] ">
          {allLiked.map((item) => {
            return <Product data={item} key={item.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Likes;
