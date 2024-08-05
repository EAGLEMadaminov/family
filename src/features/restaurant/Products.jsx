import { useState, useEffect } from 'react';
import Product from '../../components/Product.jsx';
import { useSelector } from 'react-redux';

const Products = ({ data }) => {
  const [products, setProducts] = useState(data);
  const isChangeLike = useSelector((store) => store.product.isChangeLike);
  let likedList = [];
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    let likedItems = JSON.parse(localStorage.getItem('likedList'));
    likedItems = Boolean(likedItems) ? likedItems : [];
    if (token) {
      likedItems = likedList;
    }
    let choosen = JSON.parse(localStorage.getItem('choosen'));
    choosen = Boolean(choosen) ? choosen : [];
    let arr = [];
    let choosenIds = [];
    choosen.forEach((item) => {
      console.log(item);
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

  return (
    <div className="mx-5 flex justify-between flex-wrap scroll-smooth">
      {products.map((product) => {
        return <Product key={product.id} data={product} />;
      })}
    </div>
  );
};

export default Products;
