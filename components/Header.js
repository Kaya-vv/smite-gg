import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex text-xl fixed top-0 w-full h-[60px] text-white justify-between items-center box-content">
      <Link href="/leaderboards">
        <div className="w-[180px] h-[60px] border-r-2 border-[#2c2c40]">
          <img
            alt=""
            className="w-20 h-16 object-contain ml-12"
            src="https://1000merken.com/wp-content/uploads/2021/04/Smite-Logo.png"
          />
        </div>
      </Link>
    </header>
  );
}

export default Header;
