'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { sidebarData } from './data';
import { IconType } from 'react-icons/lib';
// import { SidebarIcons } from './mini-sidebar';

import { IoMenu } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import { SidebarButton } from './sidebar-button';
import { SidebarIcons } from './mini-sidebar';

export const Sidebar = () => {
  const pathname = usePathname();
  const [isMinimized, setIsMinimized] = useState(false);
  return (
    <div className="w-fit flex flex-col bg-gray-light h-full overflow-auto py-4 gap-2 border-r-2 border-silver-light shrink-0">
      <IoMenu
        className="size-5 text-black-raisin mx-2 cursor-pointer"
        onClick={() => {
          setIsMinimized(!isMinimized);
        }}
      />
      <div className="flex flex-col gap-2 overflow-auto hide-scrollbar">
        {isMinimized ? <SidebarIcons /> : <SidebarButton />}
      </div>
    </div>
  );
};
