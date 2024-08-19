import { useState, useEffect } from "react";
import Product from "../../components/Product.jsx";
import { useSelector } from "react-redux";

const Products = ({ data }) => {
  const [products, setProducts] = useState(data);
  const isChangeLike = useSelector((store) => store.product.isChangeLike);
  const isChangeCount = useSelector((store) => store.footer.isChangeCount);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    let likedItems = JSON.parse(localStorage.getItem("likedList")) || [];
    // if (token) {
    //   likedItems = likedList; // Ensure likedList is populated properly
    // }

    let choosen = JSON.parse(localStorage.getItem("choosen")) || [];
    let choosenIds = new Set(choosen.map((item) => item.id));
    let likedIds = new Set(
      likedItems.map((item) => (token ? Number(item) : item.id))
    );

    let updatedProducts = data.map((product) => {
      return {
        ...product,
        isLiked: likedIds.has(product.id),
        showPrice: choosenIds.has(product.id),
        count: choosen.find((item) => item.id === product.id)?.count || 0,
      };
    });

    setProducts(updatedProducts);
  }, [isChangeLike, data]);

  useEffect(() => {
    let choosenProducts = JSON.parse(localStorage.getItem("choosen")) || [];
    let choosenIds = new Set(choosenProducts.map((item) => item.id));

    let updatedProducts = data.map((product) => {
      if (choosenIds.has(product.id)) {
        let matchingProduct = choosenProducts.find(
          (item) => item.id === product.id
        );
        return {
          ...product,
          showPrice: true,
          count: matchingProduct?.count || 1,
        };
      }
      return product;
    });

    setProducts(updatedProducts);
  }, [isChangeCount, data]);

  return (
    <div className="mx-5 flex justify-between flex-wrap scroll-smooth">
      {products.map((product) => {
        return <Product key={product.id} data={product} />;
      })}
    </div>
  );
};

export default Products;
