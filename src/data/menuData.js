// ============================================================
// MENU DATA – Add, remove, or edit meals here
// ============================================================
// HOW TO ADD AN IMAGE:
// 1. Put your image in the /public/images/ folder
//    e.g. /public/images/chicken-chips.jpg
// 2. Set image: '/images/chicken-chips.jpg'
//    (remove the image field or leave it empty to show "Add Photo")
// ============================================================

export const menuData = [
  {
    id: 1,
    name: "Chicken & Chips",
    price: "₦8,000",
    priceValue: 8000,
    description:
      "Crispy golden chips paired with juicy, well-seasoned fried chicken. A crowd favourite done right.",
    category: "Grills & Sides",
    image: "/images/cnc.png",
    imageAlt: "Chicken and chips meal",
    popular: true,
  },
  {
    id: 2,
    name: "Ofada Rice & Plantain Sauce",
    price: "₦4,000",
    priceValue: 4000,
    description:
      "Locally grown Ofada rice served with rich, smoky ayamase (designer) sauce. Authentically Nigerian.",
    category: "Rice Dishes",
    image: "/images/ofada.png",
    imageAlt: "Ofada rice with plantain sauce",
    popular: true,
  },
  {
    id: 3,
    name: "Noodles, Egg & Chicken",
    price: "₦7,000",
    priceValue: 7000,
    description:
      "Perfectly spiced noodles tossed with soft eggs and tender chicken pieces. Comfort food elevated.",
    category: "Noodles",
    image: "/images/noddles.png",
    imageAlt: "Noodles with egg and chicken",
    popular: false,
  },
  // Add more meals below:
  // {
  //   id: 4,
  //   name: 'White Rice & Stew',
  //   price: '₦3,500',
  //   priceValue: 3500,
  //   description: 'Fluffy white rice served with rich tomato stew and your choice of protein.',
  //   category: 'Rice Dishes',
  //   image: '/images/white-rice.jpg',
  //   imageAlt: 'White rice and stew',
  //   popular: false,
  // },
];

export const categories = ["All", ...new Set(menuData.map((m) => m.category))];
