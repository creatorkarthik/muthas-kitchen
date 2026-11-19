"use client";

import { useState } from "react";

const dishes = [
  {
    name: "Paneer Butter Masala",
    category: "Main Course",
    price: "₹220",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=700",
    description: "Creamy tomato gravy with soft paneer",
  },
  {
    name: "Veg Biryani",
    category: "Rice",
    price: "₹180",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=700",
    description: "Aromatic basmati rice and spices",
  },
  {
    name: "Masala Dosa",
    category: "Breakfast",
    price: "₹90",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=700",
    description: "Crispy dosa with potato masala",
  },
  {
    name: "Butter Naan",
    category: "Main Course",
    price: "₹50",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700",
    description: "Freshly baked Indian bread",
  },
  {
    name: "Gulab Jamun",
    category: "Dessert",
    price: "₹80",
    image:
    "/images/istockphoto-163064596-1024x1024.jpg",
    description: "Sweet and delicious dessert",
  },
  {
    name: "Fresh Food Platter",
    category: "Rice",
    price: "₹200",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700",
    description: "A delicious Indian meal",
  },
];

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [category, setCategory] = useState("All");
const [cart, setCart] = useState<
  { name: string; price: number; quantity: number }[]
>([]);
const [customerName, setCustomerName] = useState("");
const [customerPhone, setCustomerPhone] = useState("");
const [customerAddress, setCustomerAddress] = useState("");

  const categories = ["All", "Main Course", "Rice", "Breakfast", "Dessert"];

  const filteredDishes =
    category === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  return (
    <main className="min-h-screen bg-[#faf8f3] text-[#25251f]">
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-[#faf8f3]/95 px-6 py-5 shadow-sm backdrop-blur-md md:px-16">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-[#8b351e]">
            MUTHA’S KITCHEN
          </h1>
          <p className="text-[10px] tracking-[4px]">AUTHENTIC INDIAN FOOD</p>
        </div>

        <div className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Our Menu</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="#menu"
          className="rounded-full bg-[#8b351e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#642514]"
        >
          Order Food ()
        </a>
      </nav>

      <section
        id="home"
        className="relative flex min-h-[650px] items-center overflow-hidden bg-cover bg-center px-7 md:px-20"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.15)),url('https://images.unsplash.com/photo-1547592180-85f173990554?w=1800')",
        }}
      >
        <div className="max-w-2xl animate-[fadeIn_1s_ease-out] text-white">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[5px] text-[#f4c58a]">
            Welcome to Mutha’s Kitchen
          </p>

          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            Taste the
            <br />
            <span className="text-[#eab779]">Tradition.</span>
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-200">
            Experience authentic Indian flavours, freshly prepared with love,
            passion and the finest ingredients.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-full bg-[#a64b2c] px-8 py-4 font-bold transition hover:scale-105 hover:bg-[#c3613d]"
            >
              Explore Our Menu →
            </a>

            <a
              href="#about"
              className="rounded-full border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-black"
            >
              Discover Us
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-8 bg-[#8b351e] px-8 py-10 text-center text-white md:grid-cols-3 md:px-20">
        <div>
          <h3 className="text-3xl font-black">4.2 ★</h3>
          <p className="mt-2 text-sm text-orange-100">Google Rating</p>
        </div>
        <div>
          <h3 className="text-3xl font-black">707+</h3>
          <p className="mt-2 text-sm text-orange-100">Customer Reviews</p>
        </div>
        <div>
          <h3 className="text-3xl font-black">100%</h3>
          <p className="mt-2 text-sm text-orange-100">Food Made With Love</p>
        </div>
      </section>

      <section id="about" className="grid items-center gap-12 px-7 py-24 md:grid-cols-2 md:px-20">
        <div>
          <p className="font-bold uppercase tracking-[4px] text-[#a64b2c]">
            Our Story
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
            Good Food.
            <br />
            Great Memories.
          </h2>

          <p className="mt-7 leading-8 text-gray-600">
            At Mutha’s Kitchen, we believe every meal should be memorable.
            Discover delicious Indian food, warm hospitality and flavours
            inspired by tradition.
          </p>

          <a
            href="#menu"
            className="mt-8 inline-block border-b-2 border-[#8b351e] pb-2 font-bold text-[#8b351e]"
          >
            Explore our dishes →
          </a>
        </div>

        <img
          src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900"
          alt="Indian food"
          className="h-[420px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-[1.02]"
        />
      </section>
<section id="menu" className="bg-[#f0ece3] px-7 py-24 md:px-20">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[4px] text-[#a64b2c]">
            Fresh & Delicious
          </p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Our Special Menu
          </h2>
          <p className="mt-4 text-gray-600">
            Discover flavours that make every moment special.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-6 py-3 text-sm font-bold transition ${
                category === item
                  ? "bg-[#8b351e] text-white"
                  : "bg-white text-gray-700 hover:bg-[#ead4c7]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDishes.map((dish) => (
            <div
              key={dish.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black">{dish.name}</h3>
                  <span className="font-black text-[#a64b2c]">
                    {dish.price}
                  </span>
                </div>

                <p className="mt-3 text-sm text-gray-500">
                  {dish.description}
                </p>

<button
  onClick={() => {
    const existingItem = cart.find(
      (item) => item.name === dish.name
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.name === dish.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          name: dish.name,
          price: Number(dish.price.replace("₹", "")),
          quantity: 1,
        },
      ]);
    }

    setIsCartOpen(true);
  }}
  className="mt-6 w-full rounded-full bg-[#8b351e] py-3 font-bold text-white"
>
  + Add to Order
</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#8b351e] px-7 py-20 text-center text-white">
        <p className="text-sm font-bold uppercase tracking-[5px] text-orange-200">
          Made With Love
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black md:text-6xl">
          Every Dish Tells a Story.
        </h2>
        <a
          href="#menu"
          className="mt-9 inline-block rounded-full bg-white px-9 py-4 font-bold text-[#8b351e] transition hover:scale-105"
        >
          Explore Menu
        </a>
      </section>

      <footer id="contact" className="bg-[#211a16] px-7 py-16 text-white md:px-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-black text-[#eab779]">
              MUTHA’S KITCHEN
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              Bringing authentic Indian flavours to your table.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Visit Us</h3>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              SJMIT Hostel Road,
              <br />
              Hanumantha Nagar,
              <br />
              Chitradurga, Karnataka 577502
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <a
              href="tel:+917019072554"
              className="mt-4 block text-sm text-gray-400 hover:text-white"
            >
              +91 7619135911
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Muthas+Kitchen+Chitradurga"
              target="_blank"
              className="mt-4 inline-block text-sm text-[#eab779]"
            >
              Get Directions →
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-7 text-center text-xs text-gray-500">
          © 2026 Mutha’s Kitchen. All Rights Reserved.
        </div>
      </footer>
      
{isCartOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5">
    <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl">

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black">Your Cart 🛒</h2>
        <div className="mt-5 space-y-3">
  <input
    type="text"
    placeholder="Customer Name"
    value={customerName}
    onChange={(e) => setCustomerName(e.target.value)}
    className="w-full rounded-xl border p-3"
  />

  <input
    type="tel"
    placeholder="Phone Number"
    value={customerPhone}
    onChange={(e) => setCustomerPhone(e.target.value)}
    className="w-full rounded-xl border p-3"
  />

  <textarea
    placeholder="Delivery Address"
    value={customerAddress}
    onChange={(e) => setCustomerAddress(e.target.value)}
    className="w-full rounded-xl border p-3"
  />
</div>

        <button
          onClick={() => setIsCartOpen(false)}
          className="text-2xl font-bold"
        >
          ×
        </button>
      </div>

      <div className="mt-6 text-gray-600">
        <p>{cart.length} food item(s) added to your order.</p>

        {cart.map((item, index) => (
  <div
    key={index}
    className="mt-4 flex items-center justify-between rounded-xl bg-gray-100 p-3"
  >
    <div>
      <p className="font-bold">{item.name}</p>
      <p className="text-sm text-gray-600">
        ₹{item.price} × {item.quantity}
      </p>
    </div>

    <div className="flex items-center gap-3">
      <button
        onClick={() => {
          if (item.quantity > 1) {
            setCart(
              cart.map((food, i) =>
                i === index
                  ? { ...food, quantity: food.quantity - 1 }
                  : food
              )
            );
          } else {
            setCart(cart.filter((_, i) => i !== index));
          }
        }}
        className="rounded-full bg-[#8b351e] px-3 py-1 font-bold text-white"
      >
        −
      </button>

      <span className="font-bold">{item.quantity}</span>

      <button
        onClick={() =>
          setCart(
            cart.map((food, i) =>
              i === index
                ? { ...food, quantity: food.quantity + 1 }
                : food
            )
          )
        }
        className="rounded-full bg-[#8b351e] px-3 py-1 font-bold text-white"
      >
        +
      </button>
    </div>
  </div>
))}

        <p className="mt-3 text-xl font-black text-[#8b351e]">
        Total: ₹{cart.reduce((total, item) => total + item.price * item.quantity, 0)}
        </p>
      </div>

      <button
        onClick={() => setIsCartOpen(false)}
        className="mt-6 w-full rounded-full bg-[#8b351e] py-3 font-bold text-white"
      >
        Continue Shopping
      </button>
<a
  href={`https://wa.me/917619135911?text=${encodeURIComponent(
    `Hello Mutha's Kitchen!

Customer Name: ${customerName}
Phone: ${customerPhone}
Address: ${customerAddress}

My Order:
${cart.map((item, index) => `${index + 1}. ${item.name} - ₹${item.price} × ${item.quantity}`).join("\n")}

Total: ₹${cart.reduce((total, item) => total + item.price * item.quantity, 0)}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3 block w-full rounded-full bg-green-600 py-3 text-center font-bold text-white hover:bg-green-700"
>
  Place Order on WhatsApp
</a>
    </div>
  </div>
)}

    </main>
  );
}
  