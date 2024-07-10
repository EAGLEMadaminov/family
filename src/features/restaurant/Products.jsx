import { useState, useEffect } from 'react';
import Product from '../../components/Product.jsx';
import { useSelector } from 'react-redux';

const Products = ({ data }) => {
  const [products, setProducts] = useState(data);
  const isChangeLike = useSelector((store) => store.product.isChangeLike);

  useEffect(() => {
    let likedList = JSON.parse(localStorage.getItem('likedList'));
    likedList = Boolean(likedList) ? likedList : [];
    let choosen = JSON.parse(localStorage.getItem('choosen'));
    choosen = Boolean(choosen) ? choosen : [];
    let arr = [];
    let choosenIds = [];
    choosen.forEach((item) => {
      choosenIds.push(item.id);
    });
    likedList.forEach((item) => {
      arr.push(item.id);
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
        product.count = true;
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
