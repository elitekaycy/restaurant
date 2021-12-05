import React from "react";
function Menu() {
  const items = [
    {
      title: " food",
      list: ["burger", "pizza", "shawarma", "sandwich", "chicken and chips"],
      id: 1,
    },
    {
      title: "drink",
      list: ["coke", "sprite", "mountain due", "fanta", "pepsi"],
      id: 2,
    },
    {
      title: "smoothie",
      list: [
        "berry fresh",
        "coffee high chocolette",
        "strawberry",
        "banana fresh",
        "mango",
      ],
      id: 3,
    },
  ];

  return (
    <div className="menu">
      <h1>MENU</h1>
      <div className="blog-preview">
        {items.map((item) => {
          <div className="items-template" key={item.id}>
            <h2>{item.title}</h2>
            <li>{item.list}</li>
          </div>;
        })}
      </div>
      <h2>{items.title}</h2>
    </div>
  );
}

export default Menu;
