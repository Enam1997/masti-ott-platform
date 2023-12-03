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

  return (
    <div className="flex items-center  justify-between p-5">
      <div className="flex gap-8 items-center">
        <img src={logo} alt="" className="w-[80px] md:w=[115px] object-cover" />

        {/* large screen header */}
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>

        {/* mini screen header */}
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
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
                      <HeaderItem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* right side profile image */}
      <img
        src="https://media.licdn.com/dms/image/C5603AQFO_bpgTYCePQ/profile-displayphoto-shrink_800_800/0/1612199719892?e=2147483647&v=beta&t=b9oJHXd2-U9BZ2mVZP5ZOa8iW6pexTc_bzQiaEYU5Yk"
        alt=""
        className="w-[40px] rounded-full"
      />
    </div>
  );
};

export default Header;
