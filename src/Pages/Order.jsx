import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Purchase = () => {
  const { register, handleSubmit } = useForm();
  const [isDelivery, setIsDelivery] = useState(false);
  const [phoneVale, setPhoneValue] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapUrl, setMapUrl] = useState('');
  const [clickCurrent, setClickCurrent] = useState(false);

  const formatChars = {
    '-': '[0-9]',
  };
  const handleGeolocationSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
    setSelectedLocation({ lat: latitude, lng: longitude });
  };

  const handleGeolocationError = (error) => {
    console.error('Error getting geolocation:', error);
  };

  const getCurrentLocation = () => {
    setClickCurrent(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleGeolocationSuccess,
        handleGeolocationError
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  const handleMapClick = (event) => {
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    const url = `https://www.google.com/maps/@${event.latLng.lat()},${event.latLng.lng()},${15}z`;
    setMapUrl(url);
  };

  const handleOrderBtn = async (data) => {
    data.phone_number = phoneVale.replace(/\s/g, '');
    data.url = mapUrl;
    console.log(data);
  };

  return (
    <div className="mt-[200px]  translate-y-[-100px]">
      <h2 className="text-xl text-center font-semibold">
        Yetkazib berish manzili:
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
          Olib ketish
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
          Yetkazib berish
        </label>
      </div>
      <form action="" onSubmit={handleSubmit(handleOrderBtn)}>
        <div className="address-info  px-5 rounded-xl">
          {isDelivery ? (
            <div className="w-[280px] md:w-[700px] gap-5 mt-3 flex text-[18px]  flex-col">
              <label htmlFor="street" className="mr-5">
                Ko&apos;cha *
                <input
                  type="text"
                  required
                  id="street"
                  {...register('street')}
                  className="w-[250px] mr-5 text-[18px] border rounded-lg px-2 py-1 mt-2 border-border"
                />
              </label>
              <div className="flex items-end">
                <label htmlFor="home" className="mt-2">
                  Uy *
                  <span className="text-[12px]"> (uy raqamini kiriting)</span>
                  <input
                    type="number"
                    required
                    id="home"
                    {...register('home_number')}
                    className="w-[150px] text-[18px]  border rounded-lg px-2 py-1 mt-2 border-border"
                  />
                </label>
                <label htmlFor="office" className="ml-4">
                  Xonadon/office
                  <input
                    type="text"
                    id="office"
                    {...register('office')}
                    className="w-[150px]  mr-5 text-[18px] border rounded-lg px-2 py-1 mt-2 border-border"
                  />
                </label>
              </div>
              <div className="flex">
                <label htmlFor="entrance" className="">
                  Yo&apos;lak
                  <input
                    type="text"
                    id="way"
                    {...register('entrance')}
                    className="w-[150px] text-[18px]  border rounded-lg px-2 py-1 mt-2 border-border"
                  />
                </label>
                <label htmlFor="floor" className="ml-5">
                  Qavat
                  <input
                    type="number"
                    id="floor"
                    {...register('floor')}
                    className="w-[150px] mr-5 text-[18px] border rounded-lg px-2 py-1 mt-2 border-border"
                  />
                </label>
              </div>
              <label htmlFor="home_code" className="">
                Domofon kodi
                <input
                  type="number"
                  id="home_code"
                  {...register('door_phone')}
                  className="w-[250px] text-[18px]  border rounded-lg px-2 py-1 mt-2 border-border"
                />
              </label>

              <LoadScript googleMapsApiKey="AIzaSyCc0zUA5W0c5vo8EwCs_ousutxmJUo7dXo">
                <GoogleMap
                  mapContainerStyle={{ width: '100%', height: '400px' }}
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
                <button type="button" className='border p-2 px-3 rounded-3xl' onClick={getCurrentLocation}>
                  Turgan joyni aniqlash
                </button>
              </LoadScript>
            </div>
          ) : (
            <div className="mt-5">
              <h2 className="text-xl font-semibold">Do&apos;kon manzili</h2>
              <p>Serob MFY O&apos;zbekiston N54</p>
              <span className="text-[14px] ">Saqlash muddati 2 kun</span>
            </div>
          )}

          <h2 className="text-xl mt-5 font-semibold">
            Buyurtma qabul qiluvchi:
          </h2>
          <div className="flex my-5 flex-col">
            <label htmlFor="fName" className="flex flex-col">
              Ism *
              <input
                type="text"
                id="fName"
                required
                {...register('first_name')}
                placeholder="Ismingizni kiriting"
                className=" text-[18px] w-[250px] border rounded-lg px-2 py-1 mt-2 border-border"
              />
            </label>
            <label htmlFor="LName" className="mt-5 flex flex-col">
              Familiya *
              <input
                type="text"
                id="LName"
                required
                {...register('last_name')}
                placeholder="Familiyangizni kiriting"
                className="mr-5 w-[250px] text-[18px] border rounded-lg px-2 py-1 mt-2 border-border"
              />
            </label>
          </div>
          <label htmlFor="phone">
            Telefon raqam*
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
            Buyurtma uchun izoh
            <input
              type="text"
              id="comment"
              {...register('comment')}
              className="w-full mr-5 text-[18px] border rounded-lg px-2 py-1 mt-2 border-border"
            />
            <span className="text-[12px]">
              Masalan yetkazishning aniq manzili, eng yaqin manzil yoki moʻljal
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="mx-auto w-[60%] justify-center bg-[#671ABF] p-2 px-5 flex mt-4 rounded-3xl text-white"
        >
          Buyurtma qilish
        </button>
      </form>
    </div>
  );
};

export default Purchase;
