import { useEffect, useState } from "react";
const UserOrder = () => {
  const [orderList, setOrderList] = useState({});
  const [buyingProducts, setBuyingProducts] = useState([]);
  const [showImage, setShowImage] = useState(0);

  useEffect(() => {
    let myOrder = JSON.parse(localStorage.getItem("my_order"));

    if (myOrder?.first_name) {
      setBuyingProducts(JSON.parse(myOrder.products));
      setOrderList(myOrder);
    }
  }, []);
  return (
    <div className="mt-[100px]">
      <div>
        {buyingProducts.length > 0 &&
          buyingProducts.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex justify-around">
                  <div className="div">
                    <p>Maxsulot nomi</p>
                    <p>Maxsulot olingan sana</p>
                    <p>Miqdori</p>
                  </div>
                  <div>
                    <p>{item.title}</p>{" "}
                    {orderList.buyingDate && orderList.buyingDate.slice(0, 10)}
                    <p>{item.count} ta</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    if (item.id == showImage) {
                      setShowImage(0);
                    } else {
                      setShowImage(item.id);
                    }
                  }}
                  className="text-[#4DBEF8]  flex justify-end ml-auto mr-[40px] "
                >
                  {showImage === item.id ? "Yashirish" : "Maxsulot rasmi"}
                </button>
                {item.id === showImage && (
                  <img
                    className="mx-auto w-[250px] h-[250px] object-cover"
                    src={item.image}
                    alt=""
                  />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserOrder;
