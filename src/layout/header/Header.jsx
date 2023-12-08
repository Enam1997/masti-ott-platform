import React, { useState } from "react";
import logo from "../../assets/images/logo-white.png";

import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "../../component/headerItem/HeaderItem";

const Header = () => {
  // mini scrren toggle click state
  const [hideMenuToggle, setHideMenuToggle] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  // header menu item list
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  const profileMenu = ["profile", "yourwidhlist", "settings", "logout"];

  return (
    <div className="flex items-center  justify-between p-5">
      <div className="flex gap-8 items-center">
        <img src={logo} alt="" className="w-[80px] md:w=[115px] object-cover" />

        {/* large screen header */}
        <div className="hidden md:flex gap-8">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>

        {/* mini screen header */}
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem key={index} name={""} Icon={item.icon} />
          )}
          <div
            className="md:hidden"
            onClick={() => setHideMenuToggle(!hideMenuToggle)}
          >
            <HeaderItem name={""} Icon={HiDotsVertical} />

            {/* mini screen toggle button */}
            {hideMenuToggle ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem
                        key={index}
                        name={item.name}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* right side profile image */}
      <div className=" relative z-20">
        <img
          src="https://media.licdn.com/dms/image/C5603AQFO_bpgTYCePQ/profile-displayphoto-shrink_800_800/0/1612199719892?e=2147483647&v=beta&t=b9oJHXd2-U9BZ2mVZP5ZOa8iW6pexTc_bzQiaEYU5Yk"
          alt=""
          className="w-[40px] rounded-full border-4 border-gray-600 cursor-pointer"
          onClick={()=>setProfileMenuOpen(!profileMenuOpen)}
        />
        {profileMenuOpen && (
          <div className=" bg-black text-cyan-50 p-4 w-52 shadow-lg absolute left-[-160px] top-16">
            <ul>
              {profileMenu.map((item, index) => (
                <li
                  className=" p-2 text-lg cursor-pointer rounded hover:bg-blue-100 hover:text-black"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
