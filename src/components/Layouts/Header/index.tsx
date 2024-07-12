"use client";
import Image from "next/image";
import { CiCircleQuestion, CiSearch } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { PiBellSimpleBold, PiWalletThin } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderLayout = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between bg-white sticky top-0 z-10">
      <div className="flex py-6 px-10">
        <Link href="/" className="w-50 h-49 cursor-pointer">
          <Image src="/logo.svg" alt="logo" fill className="unset-position" />
        </Link>
        <span className="relative px-5 py-3 w-large">
          <input
            placeholder="Search here ..."
            className="bg-custom-gray px-12 py-2 rounded w-full"
          />
          <CiSearch className="absolute top-6 left-10" size={20} />
        </span>
      </div>
      <div className="flex text-custom-gray-100 gap-7 px-10">
        <Link href="/notifications"
          className={`flex flex-col items-center justify-center cursor-pointer hover:text-custom-blue ${
            pathname.includes("notifications") && `text-custom-blue`
          }`}
        >
          <PiBellSimpleBold size={25} />
          <p>Notifications</p>
        </Link>
        <Link href="/wallet"
          className={`flex flex-col items-center justify-center cursor-pointer hover:text-custom-blue ${
            pathname.includes("wallet") && `text-custom-blue`
          }`}
        >
          <PiWalletThin size={25} />
          <p>Wallet</p>
        </Link>
        <Link href="/inquires"
          className={`flex flex-col items-center justify-center cursor-pointer hover:text-custom-blue ${
            pathname.includes("inquire") && `text-custom-blue`
          }`}
        >
          <CiCircleQuestion size={25}/>
          <p>Inquires</p>
        </Link>
        <Link href="/settings"
          className={`flex flex-col items-center justify-center cursor-pointer hover:text-custom-blue ${
            pathname.includes("settings") && `text-custom-blue`
          }`}
        >
          <IoSettingsOutline size={25} />
          <p>Settings</p>
        </Link>
        <div
          className={`flex flex-row items-center justify-center cursor-pointer hover:text-custom-blue `}
        >
          <div className=" w-38px h-38px">
            <Image
              alt="profile avatar"
              src="/avatar.png"
              fill
              className="unset-position"
            />
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderLayout;
