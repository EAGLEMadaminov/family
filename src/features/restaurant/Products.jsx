import { useState, useEffect } from "react";
import Product from "../../components/Product.jsx";
import { useSelector } from "react-redux";

const Products = ({ data }) => {
  const [products, setProducts] = useState(data);
  const isChangeLike = useSelector((store) => store.product.isChangeLike);
  const isChangeCount = useSelector((store) => store.footer.isChangeCount);
  let likedList = [];
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    let likedItems = JSON.parse(localStorage.getItem("likedList"));
    likedItems = Boolean(likedItems) ? likedItems : [];
    if (token) {
      likedItems = likedList;
    }
    let choosen = JSON.parse(localStorage.getItem("choosen"));
    choosen = Boolean(choosen) ? choosen : [];
    let arr = [];
    let choosenIds = [];
    choosen.forEach((item) => {
      choosenIds.push(item.id);
    });
    likedItems.forEach((item) => {
      if (token) {
        arr.push(Number(item));
      } else {
        arr.push(item.id);
      }
    });
    let newArr = data.filter((product) => {
      if (arr.includes(product.id)) {
        product.isLiked = true;
      } else {
        product.isLiked = false;
      }
      return product;
    });
    newArr = newArr.filter((product) => {
      if (choosenIds.includes(product.id)) {
        product.isLiked = true;
      } else {
        product.isLiked = false;
      }
      return product;
    });
    setProducts(newArr);
  }, [isChangeLike]);

  useEffect(() => {
    let choosenProducts = JSON.parse(localStorage.getItem("choosen"));
    choosenProducts = Boolean(choosenProducts) ? choosenProducts : [];
    let idsArr = [];
    if (choosenProducts.length > 0) {
      idsArr = choosenProducts.map((item) => {
        return item?.id;
      });
    }
    let newA = data.filter((item) => {
      if (idsArr.includes(item.id)) {
        item.showPrice = true;
        choosenProducts.forEach((product) => {
          product.id == item.id;
          item.count = product.count;
        });
      }
      return item;
    });
    setProducts(newA);
  }, [isChangeCount]);
  return (
    <div className="mx-5 flex justify-between flex-wrap scroll-smooth">
      {products.map((product) => {
        return <Product key={product.id} data={product} />;
      })}
    </div>
  );
};

export default Products;
