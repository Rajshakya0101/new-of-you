export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
    ],
  },

  {
    label: "Sub Category",
    name: "sub-category",
    componentType: "select",
    options: [
      { id: "sarara", label: "Sarara" },
      { id: "frock", label: "Frock" },
      { id: "lehnga", label: "Lehnga" },
      { id: "sharee", label: "Sharee" },
      { id: "kurti", label: "Kurti" },
    ],
  },

  {
    label: "Best Selling",
    name: "best-selling",
    componentType: "select",
    options: [
      { id: "true", label: "Yes" },
      { id: "false", label: "No" },
    ],
  },

  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  // {
  //   id: "products",
  //   label: "Products",
  //   path: "/shop/listing",
  // },
  {
    id: "women",
    label: "Women",
    path: "/shop/listing",
    subItems: [
      { id: "saree", label: "Saree", path: "/shop/listing" },
      { id: "suit", label: "Suit", path: "/shop/listing" },
      { id: "suit-piece", label: "Suit-Piece", path: "/shop/listing" },
      { id: "lehenga", label: "Lehenga", path: "/shop/listing" },
      { id: "kurti", label: "Kurti", path: "/shop/listing" },
    ],
  },
  {
    id: "kids",
    label: "Kids",
    path: "/shop/listing",
    subItems: [
      { id: "lehenga", label: "Lehenga", path: "/shop/listing" },
      { id: "anarkali", label: "Anarkali", path: "/shop/listing" },
      { id: "shararaa", label: "Shararaa", path: "/shop/listing" },
      { id: "kurta-set", label: "Kurta Set", path: "/shop/listing" },
      { id: "dupatta", label: "Dupatta", path: "/shop/listing" },
    ],
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];


export const categoryOptionsMap = {
  women: "Women",
  kids: "Kids",
};


export const filterOptions = {
  // category: [
  //   { id: "women", label: "Women" },
  //   { id: "kids", label: "Kids" },
  // ],
  price: [
    { "id": "0-1999", "label": "₹0 - ₹1999" },
    { "id": "2000-4999", "label": "₹2000 - ₹4999" },
    { "id": "5000-6999", "label": "₹5000 - ₹6999" },
    { "id": "7000-8999", "label": "₹7000 - ₹8999" },
    { "id": "9000-11999", "label": "₹9000 - ₹11999" },
    { "id": "12000-14999", "label": "₹12000 - ₹14999" },
    { "id": "15000+", "label": "₹15000 and above" }
  ],

  product_type: {
    women: [
      { id: "saree", label: "Saree" },
      { id: "suit", label: "Suit" },
      { id: "suit-piece", label: "Suit-Piece" },
      { id: "lehenga", label: "Lehenga" },
      { id: "kurti", label: "Kurti" },
    ],
    kids: [
      { id: "lehenga", label: "Lehenga" },
      { id: "anarkali", label: "Anarkali" },
      { id: "shararaa", label: "Shararaa" },
      { id: "kurta-set", label: "Kurta Set" },
      { id: "dupatta", label: "Dupatta" },
    ],
  },
  
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
