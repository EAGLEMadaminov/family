import React from "react";
import { useSelector } from "react-redux";

const Restaurant = () => {
  const lang = useSelector((store) => store.main.lang);
  console.log(lang);
  return <div>Restaurant</div>;
};

export default Restaurant;
 