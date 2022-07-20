import React from "react";
import {
  ClipboardListIcon,
  VideoCameraIcon,
  AdjustmentsIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

function Sidebar() {
  return (
    <div className=" min-w-[40px] xl:min-w-[180px]  ">
      <div className="space-y-6 w-[40px]  xl:w-[180px] space-y py-4 px-3 fixed top-[60px] flex flex-col  h-full bg-[#17172e] text-gray-500 ">
        {/* <button className="flex items-center space-x-4  hover:text-white">
          <VideoCameraIcon className="w-5 h-5" />
          <span className="font-medium hidden xl:inline text-[#bbbedb]">
            Live Game
          </span>
        </button>*/}
        <Link href="/leaderboards/">
          <button className="flex items-center space-x-4  hover:text-white">
            <ClipboardListIcon className="w-5 h-5" />
            <span className="font-medium hidden xl:inline text-[#bbbedb]">
              Leaderboards
            </span>
          </button>
        </Link>
        {/*  <button className="flex items-center space-x-4  hover:text-white">
          <AdjustmentsIcon className="w-5 h-5" />
          <span className="font-medium hidden xl:inline text-[#bbbedb]">
            Tier List
          </span>
        </button>
        <button className="flex items-center space-x-4  hover:text-white">
          <InformationCircleIcon className="w-5 h-5" />
          <span className="font-medium hidden xl:inline text-[#bbbedb]">
            Champions
          </span>
        </button> */}
      </div>
    </div>
  );
}

export default Sidebar;
