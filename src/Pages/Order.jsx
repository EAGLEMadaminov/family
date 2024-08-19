import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { showAccount } from "../redux/slices/footer";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "./../utils/libs/axios";
import { useNavigate } from "react-router-dom";
import { checkCount } from "../redux/slices/footer";

const Purchase = () => {
  const { register, handleSubmit } = useForm();
  const [isDelivery, setIsDelivery] = useState(false);
  const [phoneVale, setPhoneValue] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapUrl, setMapUrl] = useState("");
  const [clickCurrent, setClickCurrent] = useState(false);
  const emptyChoosen = useSelector((store) => store.footer.isChangeCount);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  const formatChars = {
    "-": "[0-9]",
  };
  const handleGeolocationSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
    setSelectedLocation({ lat: latitude, lng: longitude });
  };

  const handleGeolocationError = (error) => {
    console.error("Error getting geolocation:", error);
  };

  const getCurrentLocation = () => {
    setClickCurrent(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleGeolocationSuccess,
        handleGeolocationError
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };
  const handleMapClick = (event) => {
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    const url = `https://www.google.com/maps/@${event.latLng.lat()},${event.latLng.lng()},${15}z`;
    console.log(url);
    setMapUrl(url);
  };

  const handleOrderBtn = async (data) => {
    const choosenProducts = localStorage.getItem("choosen");

    if (token) {
      data.phone_number = phoneVale.replace(/\s/g, "");
      console.log(mapUrl);
      if (mapUrl) {
        data.url = mapUrl;
      }
      data.products = choosenProducts;
      console.log(data);
      if (isDelivery) {
        data.isDelivery = true;
      } else {
        data.isDelivery = false;
      }
      console.log(data);

      try {
        const { data: res } = await axiosInstance.post("/order", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res) {
          navigate("/");
          dispatch(checkCount(!emptyChoosen));
          data.buyingDate = new Date();
          let old = JSON.parse(localStorage.getItem("my_order"));
          if (old) {
            data.products = data.products.concat(JSON.parse(old.products));
          }
          localStorage.setItem("my_order", JSON.stringify(data));
          localStorage.removeItem("choosen");
          toast.success(res.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Nimadir xato ketdi");
      }
    } else {
      toast.warn(
        "Sizda hozzircha account yo'q. Account bo'limiga o'tib account yarating."
      );
      setTimeout(() => {
        dispatch(showAccount(true));
      }, 3000);
    }
  };

  return (
    <div className="mt-[200px]  translate-y-[-100px]">
      <h2 className="text-xl text-center font-semibold">
        {t("order.give_order")}
      </h2>
      <div className="mt-4 px-5">
        <label htmlFor="market" name="delivery" className="flex items-center">
          <input
            type="radio"
            name="delivery"
            id="market"
            className="mr-3"
            defaultChecked={true}
            onClick={(e) => setIsDelivery(!e.target.checked)}
          />
          {t("order.pick_up")}
        </label>
        <label
          htmlFor="delivery_home"
          name="delivery"
          className="flex items-center text-black"
        >
          <input
            type="radio"
            id="delivery_home"
            name="delivery"
            className="mr-3"
            onClick={(e) => setIsDelivery(e.target.checked)}
          />
          {t("order.delevery")}
        </label>
      </div>
      <form action="" onSubmit={handleSubmit(handleOrderBtn)}>
        <div className="address-info  px-5 rounded-xl">
          {isDelivery ? (
            <div className="w-[280px] md:w-[700px] gap-5 mt-3 flex text-[18px]  flex-col">
              <label htmlFor="street" className="mr-5">
                {t("order.street")} *
                <input
                  type="text"
                  required
                  id="street"
                  {...register("street")}
                  className="w-[250px] mr-5 text-[18px] border rounded-lg px-2 py-1 mt-2 border-border"
                />
              </label>
              <div className="flex items-end">
                <label htmlFor="home" className="mt-2">
                  {t("order.home")} *
                  <span className="text-[12px]"> ({t("order.home_mini")})</span>
                  <input
                    type="number"
                    required
                    id="home"
                    {...register("home_number")}
                    className="w-[150px] text-[18px]  border rounded-lg px-2 py-1 mt-2 border-border"
                  />
                </label>
                <label htmlFor="office" className="ml-4">
                  {t("order.office")}
                  <input
                    type="text"
                    id="office"
                    {...register("office")}
                    className="w-[150px]  mr-5 text-[18px] border rounded-lg px-2 py-1 mt-2 border-border"
                  />
                </label>
              </div>
              <div className="flex">
                <label htmlFor="entrance" className="">
                  {t("order.way")}
                  <input
                    type="text"
                    id="way"
                    {...register("entrance")}
                    className="w-[150px] text-[18px]  border rounded-lg px-2 py-1 mt-2 border-border"
                  />
                </label>
                <label htmlFor="floor" className="ml-5">
                  {t("order.floor")}
                  <input
                    type="number"
                    id="floor"
                    {...register("floor")}
                    className="w-[150px] mr-5 text-[18px] border rounded-lg px-2 py-1 mt-2 border-border"
                  />
                </label>
              </div>
              <label htmlFor="home_code" className="">
                {t("order.phone_code")}
                <input
                  type="number"
                  id="home_code"
                  {...register("door_phone")}
                  className="w-[250px] text-[18px]  border rounded-lg px-2 py-1 mt-2 border-border"
                />
              </label>

              <LoadScript googleMapsApiKey="AIzaSyDaZ10eIqb3u2d4t9uNBFSrTQUhj1iDP_w">
                <GoogleMap
                  mapContainerStyle={{ width: "100%", height: "400px" }}
                  center={
                    clickCurrent
                      ? selectedLocation
                      : { lat: 40.9999338, lng: 71.2361407 }
                  }
                  zoom={15}
                  onClick={handleMapClick}
                >
                  {selectedLocation && <Marker position={selectedLocation} />}
                </GoogleMap>
                <button
                  type="button"
                  className="border p-2 px-3 rounded-3xl"
                  onClick={getCurrentLocation}
                >
                  {t("order.current_location")}
                </button>
              </LoadScript>
            </div>
          ) : (
            <div className="mt-5">
              <h2 className="text-xl font-semibold">
                {t("order.home_address")}
              </h2>
              <p>Serob MFY O&apos;zbekiston N54</p>
              <span className="text-[14px] ">{t("order.save_date")}</span>
            </div>
          )}

          <h2 className="text-xl mt-5 font-semibold">
            {t("order.person_info")}
          </h2>
          <div className="flex my-5 flex-col">
            <label htmlFor="fName" className="flex flex-col">
              {t("order.name")} *
              <input
                type="text"
                id="fName"
                required
                {...register("first_name")}
                placeholder={t("order.name_input")}
                className=" text-[18px] w-[250px] border rounded-lg px-2 py-1 mt-2 border-border"
              />
            </label>
            <label htmlFor="LName" className="mt-5 flex flex-col">
              {t("order.last_name")} *
              <input
                type="text"
                id="LName"
                required
                {...register("last_name")}
                placeholder={t("order.last_name_input")}
                className="mr-5 w-[250px] text-[18px] border rounded-lg px-2 py-1 mt-2 border-border"
              />
            </label>
          </div>
          <label htmlFor="phone">
            {t("order.phone")} *
            <ReactInputMask
              formatChars={formatChars}
              mask="+998 -- --- -- --"
              required
              id="phone"
              onChange={(e) => setPhoneValue(e.target.value)}
              placeholder="+998 00 000-00-00"
              className="w-[250px] mb-5 block text-black border rounded-lg px-2 text-[18px] py-1 mt-2 border-border"
            />
          </label>
          <label htmlFor="comment" className="mt-5">
            {t("order.comment")}
            <input
              type="text"
              id="comment"
              {...register("comment")}
              className="w-full mr-5 text-[18px] border rounded-lg px-2 py-1 mt-2 border-border"
            />
            <span className="text-[12px]">{t("order.description")}</span>
          </label>
        </div>
        <button
          type="submit"
          className="mx-auto w-[60%] justify-center bg-[#671ABF] p-2 px-5 flex mt-4 rounded-3xl text-white"
        >
          {t("order.order_btn")}
        </button>
      </form>
    </div>
  );
};

export default Purchase;
