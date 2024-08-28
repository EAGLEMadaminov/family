import Sweet1 from "../assets/sweets/image-1.jpg";
import Sweet2 from "../assets/sweets/image-2.jpg";
import Sweet3 from "../assets/sweets/image-3.jpg";
import Sweet4 from "../assets/sweets/image-4.jpg";
import Sweet5 from "../assets/sweets/image-5.jpg";
import Sweet6 from "../assets/sweets/image-6.jpg";
import Sweet7 from "../assets/sweets/image-7.jpg";
import Fanta from "../assets/fanta.jpg";
import Dena from "../assets/dena.jpeg";

import FamilySweets from "../assets/family_cake.jpg";

const sweets = [
  {
    title: "sweet-1 ",
    image: Sweet1,
    price: "120 000",
    id: 1,
    count: 1,
    showPrice: false,
  },
  {
    title: "sweet-2",
    image: Sweet2,
    price: "100 000",
    id: 2,
    count: 1,
    showPrice: false,
  },
  {
    title: "sweet-3",
    image: Sweet3,
    price: "130 000",
    id: 3,
    count: 1,
    showPrice: false,
  },
  {
    title: "sweet-4",
    image: Sweet4,
    price: "140 000",
    id: 4,
    count: 1,
    showPrice: false,
  },
  {
    title: "sweet-5",
    image: Sweet5,
    price: "150 000",
    id: 5,
    count: 1,
    showPrice: false,
  },
  {
    title: "sweet-6",
    image: Sweet6,
    price: "160 000",
    id: 6,
    count: 1,
    showPrice: false,
  },
  {
    title: "sweet-7",
    image: Sweet7,
    price: "170 000",
    id: 7,
    count: 1,
    showPrice: false,
  },
];
const restaurants = [
  {
    id: 1002170642530,
    name: "Family sweets",
    image: FamilySweets,
    information: {
      id: 1002170642530,
      instagram: "instagram",
      phone: "+99890 123 45 67",
      location: "Serob MFY O'zbekiston ko'cha N54",
      workTime: "Har kuni soat 8:00 dan 22:00 gacha",
    },
    options: [
      {
        id: 1,
        name: "tortlar",
        products: [
          {
            title: "Tort",
            image: Sweet1,
            price: "120 000",
            id: 1,
            count: 1,
            showPrice: false,
            isLiked: false,
            restaurant_id: 1002170642530,
            category: "tort",
            category_id: 1,
          },
          {
            title: "Rulet",
            image: Sweet2,
            price: "50 000",
            id: 2,
            count: 1,
            showPrice: false,
            isLiked: false,
            restaurant_id: 1002170642530,
            category: "tort",
            category_id: 1,
          },
          {
            title: "Qulupnayli tort",
            image: Sweet3,
            price: "150 000",
            id: 3,
            count: 1,
            showPrice: false,
            isLiked: false,
            restaurant_id: 1002170642530,
            category: "tort",
            category_id: 1,
          },
          {
            title: "Rulet",
            image: Sweet4,
            price: "60 000",
            id: 4,
            count: 1,
            showPrice: false,
            isLiked: false,
            restaurant_id: 1002170642530,
            category: "tort",
            category_id: 1,
          },
          {
            title: "Tort",
            image: Sweet5,
            price: "150 000",
            id: 5,
            count: 1,
            showPrice: false,
            isLiked: false,
            restaurant_id: 1002170642530,
            category: "tort",
            category_id: 1,
          },
          {
            title: "Tort",
            image: Sweet6,
            price: "160 000",
            id: 6,
            count: 1,
            showPrice: false,
            isLiked: false,
            restaurant_id: 1002170642530,
            category: "tort",
            category_id: 1,
          },
          {
            title: "Tort musqaymoqli krem",
            image: Sweet7,
            price: "170 000",
            id: 7,
            count: 1,
            showPrice: false,
            isLiked: false,
            restaurant_id: 1002170642530,
            category: "tort",
            category_id: 1,
          },
        ],
      },
      // {
      //   id: 2,
      //   name: "pishiriqlar",
      //   products: [
      //     {
      //       title: "Shirinlik1",
      //       image: Sweet1,
      //       price: "25 000",
      //       id: 1,
      //       count: 1,
      //       showPrice: false,
      //       isLiked: false,
      //       restaurant_id: 1002170642530,
      //       category: "pishiriq",
      //       category_id: 2,
      //     },
      //     {
      //       title: "Shirinlik2",
      //       image: Sweet2,
      //       price: "14 000",
      //       id: 2,
      //       count: 1,
      //       showPrice: false,
      //       isLiked: false,
      //       restaurant_id: 1002170642530,
      //       category: "pishiriq",
      //       category_id: 2,
      //     },
      //     {
      //       title: "Shirinlik3",
      //       image: Sweet3,
      //       price: "45 000",
      //       id: 3,
      //       count: 1,
      //       showPrice: false,
      //       isLiked: false,
      //       restaurant_id: 1002170642530,
      //       category: "pishiriq",
      //       category_id: 2,
      //     },
      //     {
      //       title: "Shirinlik4",
      //       image: Sweet4,
      //       price: "40 000",
      //       id: 4,
      //       count: 1,
      //       showPrice: false,
      //       isLiked: false,
      //       restaurant_id: 1002170642530,
      //       category: "pishiriq",
      //       category_id: 2,
      //     },
      //     {
      //       title: "Shirinlik5",
      //       image: Sweet5,
      //       price: "150 000",
      //       id: 5,
      //       count: 1,
      //       showPrice: false,
      //       isLiked: false,
      //       restaurant_id: 1002170642530,
      //       category: "pishiriq",
      //       category_id: 2,
      //     },
      //     {
      //       title: "Shirinlik6",
      //       image: Sweet6,
      //       price: "60 000",
      //       id: 6,
      //       count: 1,
      //       showPrice: false,
      //       isLiked: false,
      //       restaurant_id: 1002170642530,
      //       category: "pishiriq",
      //       category_id: 2,
      //     },
      //     {
      //       title: "Shirinlik7",
      //       image: Sweet7,
      //       price: "70 000",
      //       id: 7,
      //       count: 1,
      //       showPrice: false,
      //       isLiked: false,
      //       restaurant_id: 1002170642530,
      //       category: "pishiriq",
      //       category_id: 2,
      //     },
      //   ],
      // },
      {
        id: 3,
        name: "ichimliklar",
        products: [
          {
            title: "Fanta 250 ml",
            image: Fanta,
            price: "10 000",
            id: 1,
            count: 1,
            showPrice: false,
            isLiked: false,
            restaurant_id: 1002170642530,
            category: "ichimlik",
            category_id: 3,
          },
          {
            title: "Dena olmali 1 l",
            image:
              "https://yukber.uz/image/cache/catalog/product/YK0355/YK0355-600x600.jpeg",
            price: "14 000",
            id: 2,
            count: 1,
            showPrice: false,
            isLiked: false,
            restaurant_id: 1002170642530,
            category: "ichimlik",
            category_id: 3,
          },
          {
            title: "Dena anorli 1 l",
            image: Dena,
            price: "14 000",
            id: 3,
            count: 1,
            showPrice: false,
            isLiked: false,
            restaurant_id: 1002170642530,
            category: "ichimlik",
            category_id: 3,
          },
          {
            title: "Qora choy Fuse Tea Limonli, 1 l",
            image: "https://images.uzum.uz/cegs8q8l08kcldtp08bg/original.jpg",
            price: "10 000",
            id: 4,
            count: 1,
            showPrice: false,
            isLiked: false,
            restaurant_id: 1002170642530,
            category: "ichimlik",
            category_id: 3,
          },
          {
            title: "Lipton Ice, 1 l",
            image:
              "https://dostavo4ka.uz/upload-file/2021/05/05/4918/750x750-68a4e86e-41c3-489b-b6a7-4edae0cfce07.jpg",
            price: "12 000",
            id: 5,
            count: 1,
            showPrice: false,
            isLiked: false,
            restaurant_id: 1002170642530,
            category: "ichimlik",
            category_id: 3,
          },
          {
            title: "Lipton ice Tea qulupnay 1.5 l ",
            image:
              "https://images.uzum.uz/25da5397-f062-428f-a68a-60a4951c3b08/original.jpg",
            price: "14 000",
            id: 6,
            count: 1,
            showPrice: false,
            isLiked: false,
            restaurant_id: 1002170642530,
            category: "ichimlik",
            category_id: 3,
          },
          {
            title: "Fanta apelsin 1.5l",
            image:
              "https://i0.wp.com/hadiqatalsahra.com/wp-content/uploads/2022/02/Fisy-FANTA-1.48-liter.webp?fit=1700%2C1700&ssl=1",
            price: "14 000",
            id: 7,
            count: 1,
            showPrice: false,
            isLiked: false,
            restaurant_id: 1002170642530,
            category: "ichimlik",
            category_id: 3,
          },
        ],
      },
    ],
  },
  // {
  //   id: 1002218599398,
  //   name: "Shabboda",
  //   image:
  //     "https://www.insidermedia.com/uploads/news/images/The_Real_Greek.Liverpool_.jpg",
  //   information: {
  //     id: 1002218599398,
  //     instagram: "instagram",
  //     phone: "+99890 123 45 67",
  //     location: "Shabboda restaurant",
  //     workTime: "Har kuni soat 8:00 dan 22:00 gacha",
  //   },
  //   options: [
  //     {
  //       id: 1,
  //       name: "Taomlar",
  //       products: [
  //         {
  //           title: "Osh",
  //           image:
  //             "https://oshrestaurantandgrill.com/wp-content/uploads/2020/10/osh-in-the-house.jpg",
  //           price: "25 000",
  //           id: 1,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "taom",
  //           category_id: 1,
  //         },
  //         {
  //           title: "Lag'mon",
  //           image: "https://i.ytimg.com/vi/vf65xcEM9fE/maxresdefault.jpg",
  //           price: "25 000",
  //           id: 2,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "taom",
  //           category_id: 1,
  //         },
  //         {
  //           title: "Bishteks",
  //           image: "https://i.ytimg.com/vi/ftnKn7oUN4A/sddefault.jpg",
  //           price: "35 000",
  //           id: 3,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "taom",
  //           category_id: 1,
  //         },
  //         {
  //           title: "Qotirma",
  //           image: "https://i.ytimg.com/vi/YA6qB27WZD0/maxresdefault.jpg",
  //           price: "30 000",
  //           id: 4,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "taom",
  //           category_id: 1,
  //         },
  //         {
  //           title: "Tiftel qotorma",
  //           image: "https://i.ytimg.com/vi/EO8o5WlohF8/maxresdefault.jpg",
  //           price: "35 000",
  //           id: 5,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "taom",
  //           category_id: 1,
  //         },
  //         {
  //           title: "Tiftel sho'rva",
  //           image: "https://i.ytimg.com/vi/Ky0YGfoqsCM/maxresdefault.jpg",
  //           price: "30 000",
  //           id: 6,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "taom",
  //           category_id: 1,
  //         },
  //         {
  //           title: "Manti",
  //           image:
  //             "https://tavsiyalar.uz/wp-content/uploads/2022/01/manti-tayyorlash-retsepti-ketma-ketligi.jpg",
  //           price: "30 000",
  //           id: 7,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "taom",
  //           category_id: 1,
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       name: "Desertlar",
  //       products: [
  //         {
  //           title: "Shirinlik1",
  //           image: Sweet1,
  //           price: "25 000",
  //           id: 1,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "desert",
  //           category_id: 2,
  //         },
  //         {
  //           title: "Shirinlik2",
  //           image: Sweet2,
  //           price: "14 000",
  //           id: 2,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "desert",
  //           category_id: 2,
  //         },
  //         {
  //           title: "Shirinlik3",
  //           image: Sweet3,
  //           price: "45 000",
  //           id: 3,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "desert",
  //           category_id: 2,
  //         },
  //         {
  //           title: "Shirinlik4",
  //           image: Sweet4,
  //           price: "40 000",
  //           id: 4,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "desert",
  //           category_id: 2,
  //         },
  //         {
  //           title: "Shirinlik5",
  //           image: Sweet5,
  //           price: "150 000",
  //           id: 5,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "desert",
  //           category_id: 2,
  //         },
  //         {
  //           title: "Shirinlik6",
  //           image: Sweet6,
  //           price: "60 000",
  //           id: 6,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "desert",
  //           category_id: 2,
  //         },
  //         {
  //           title: "Shirinlik7",
  //           image: Sweet7,
  //           price: "70 000",
  //           id: 7,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "desert",
  //           category_id: 2,
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       name: "ichimliklar",
  //       products: [
  //         {
  //           title: "Fanta",
  //           image: Fanta,
  //           price: "10 000",
  //           id: 1,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "ichimlik",
  //           category_id: 3,
  //         },
  //         {
  //           title: "Cola",
  //           image: Fanta,
  //           price: "15 000",
  //           id: 2,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "ichimlik",
  //           category_id: 3,
  //         },
  //         {
  //           title: "Dena",
  //           image: Dena,
  //           price: "10 000",
  //           id: 3,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "ichimlik",
  //           category_id: 3,
  //         },
  //         {
  //           title: "Fanta",
  //           image: Fanta,
  //           price: "14 000",
  //           id: 4,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "ichimlik",
  //           category_id: 3,
  //         },
  //         {
  //           title: "Dena",
  //           image: Dena,
  //           price: "10 000",
  //           id: 5,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "ichimlik",
  //           category_id: 3,
  //         },
  //         {
  //           title: "Fanta",
  //           image: Fanta,
  //           price: "14 000",
  //           id: 6,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "ichimlik",
  //           category_id: 3,
  //         },
  //         {
  //           title: "Dena",
  //           image: Dena,
  //           price: "10 000",
  //           id: 7,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "ichimlik",
  //           category_id: 3,
  //         },
  //       ],
  //     },
  //     {
  //       id: 4,
  //       name: "Non",
  //       products: [
  //         {
  //           title: "Buxanka",
  //           image:
  //             "https://qr.khorrot.com/wp-content/uploads/2022/01/BUHANGA-EKMEK-scaled.jpg",
  //           price: "3 000",
  //           id: 1,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "non",
  //           category_id: 4,
  //         },
  //         {
  //           title: "Yopgan non",
  //           image: "https://www.bahroma1.ru/goods/uzbe_lepeshka_nov.jpg",
  //           price: "4 000",
  //           id: 2,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "non",
  //           category_id: 4,
  //         },
  //         {
  //           title: "Uy noni",
  //           image:
  //             "https://www.chakchak.uz/uploads/images/reciepts/fa75b7a54d14f6dd.jpg",
  //           price: "5 000",
  //           id: 3,
  //           count: 1,
  //           showPrice: false,
  //           isLiked: false,
  //           restaurant_id: 1002218599398,
  //           category: "non",
  //           category_id: 4,
  //         },
  //       ],
  //     },
  //   ],
  // },
];

const categories = restaurants;
export { sweets, categories };
