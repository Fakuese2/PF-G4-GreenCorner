import "tailwindcss/tailwind.css";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineDashboard, MdPayment } from "react-icons/md";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { TbGps } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function NavbarUser() {
  const menus = [
    { name: "Home", link: "/", icon: MdOutlineDashboard },
    {
      name: "Profile",
      link: "/user/profile",
      icon: AiOutlineUser,
      margin: true,
    },
    {
      name: "Shopping history",
      link: "/user/shopping-history",
      icon: FiShoppingBag,
      margin: true,
    },
    {
      name: "Payment methods",
      link: "/user/payment",
      icon: MdPayment,
    },
    {
      name: "My Garden",
      link: "/user/favorites",
      icon: AiOutlineHeart,
      margin: true,
    },
    {
      name: "Shipping Address",
      link: "/user/shipping-address",
      icon: TbGps,
      margin: true,
    },
    {
      name: "Customer Support",
      link: "/user/customer-support",
      icon: RiCustomerService2Fill,
    },
  ];

  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#1d252d] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4 font-poppins`}
      >
        <div className="py-3 flex justify-end">
          <BiMenuAltRight
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{ transitionDelay: `${i + 3}00ms` }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default NavbarUser;
