import Sweet1 from "../assets/sweets/image-1.jpg";
import Sweet2 from "../assets/sweets/image-2.jpg";
import Sweet3 from "../assets/sweets/image-3.jpg";
import Sweet4 from "../assets/sweets/image-4.jpg";
import Sweet5 from "../assets/sweets/image-5.jpg";
import Sweet6 from "../assets/sweets/image-6.jpg";
import Sweet7 from "../assets/sweets/image-7.jpg";
import Fanta from "../assets/fanta.jpg";
import Dena from "../assets/dena.jpeg";

import Restaurant1 from "../assets/uzbek.jpg";
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
const categories = [
  {
    id: 1,
    name: "Restaurant",
    image: Restaurant1,
    options: [
      {
        id: 1,
        name: "taomlar",
      },
      {
        id: 2,
        name: "salatlar",
      },
      {
        id: 3,
        name: "shashlik",
      },
    ],
  },
  {
    id: 2,
    name: "Restaurant",
    image: Sweet5,
    options: [
      {
        id: 1,
        name: "taomlar",
      },
      {
        id: 2,
        name: "salatlar",
      },
      {
        id: 3,
        name: "shashlik",
      },
    ],
  },
  {
    id: 3,
    name: "Restaurant",
    image: Sweet6,
    options: [
      {
        id: 1,
        name: "taomlar",
      },
      {
        id: 2,
        name: "salatlar",
      },
      {
        id: 3,
        name: "shashlik",
      },
    ],
  },
  {
    id: 4,
    name: "Family sweets",
    image: FamilySweets,
    options: [
      {
        id: 1,
        name: "tortlar",
        products: [
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
        ],
      },
      {
        id: 2,
        name: "pishiriqlar",
        products: [
          {
            title: "Shirinlik1",
            image: Sweet1,
            price: "25 000",
            id: 1,
            count: 1,
            showPrice: false,
          },
          {
            title: "Shirinlik2",
            image: Sweet2,
            price: "14 000",
            id: 2,
            count: 1,
            showPrice: false,
          },
          {
            title: "Shirinlik3",
            image: Sweet3,
            price: "45 000",
            id: 3,
            count: 1,
            showPrice: false,
          },
          {
            title: "Shirinlik4",
            image: Sweet4,
            price: "40 000",
            id: 4,
            count: 1,
            showPrice: false,
          },
          {
            title: "Shirinlik5",
            image: Sweet5,
            price: "150 000",
            id: 5,
            count: 1,
            showPrice: false,
          },
          {
            title: "Shirinlik6",
            image: Sweet6,
            price: "60 000",
            id: 6,
            count: 1,
            showPrice: false,
          },
          {
            title: "Shirinlik7",
            image: Sweet7,
            price: "70 000",
            id: 7,
            count: 1,
            showPrice: false,
          },
        ],
      },
      {
        id: 3,
        name: "ichimliklar",
        products: [
          {
            title: "Fanta",
            image: Fanta,
            price: "10 000",
            id: 1,
            count: 1,
            showPrice: false,
          },
          {
            title: "Cola",
            image: Fanta,
            price: "15 000",
            id: 2,
            count: 1,
            showPrice: false,
          },
          {
            title: "Dena",
            image: Dena,
            price: "10 000",
            id: 3,
            count: 1,
            showPrice: false,
          },
          {
            title: "Fanta",
            image: Fanta,
            price: "14 000",
            id: 4,
            count: 1,
            showPrice: false,
          },
          {
            title: "Dena",
            image: Dena,
            price: "10 000",
            id: 5,
            count: 1,
            showPrice: false,
          },
          {
            title: "Fanta",
            image: Fanta,
            price: "14 000",
            id: 6,
            count: 1,
            showPrice: false,
          },
          {
            title: "Dena",
            image: Dena,
            price: "10 000",
            id: 7,
            count: 1,
            showPrice: false,
          },
        ],
      },
    ],
  },
];
export { sweets, categories };
