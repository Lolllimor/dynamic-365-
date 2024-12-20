'use client';
import { IconType } from 'react-icons';
import { sidebarData } from './data';

import { usePathname } from 'next/navigation';
import { IoIosArrowDown } from 'react-icons/io';

type SidebarItem = {
  name: string;
  Icon: IconType;
  withArrow?: boolean;
};

export const SidebarButton = () => {
  const pathname = usePathname();
  return (
    <ul className="w-[13rem] shrink-0 overflow-auto flex flex-col">
      {sidebarData.map((item, index) => {
        if (typeof item === 'object' && !('Icon' in item)) {
          const [groupName, groupItems] = Object.entries(item)[0];

          return (
            <li key={index} className=" flex flex-col gap-2 my-4">
              <span className="font-semibold text-xs text-nowrap text-black-raisin px-4 ">
                {groupName}
              </span>
              <ul className="">
                {groupItems.map((groupItem, idx) => (
                  <li
                    key={idx}
                    className={`${
                      pathname
                        .toLowerCase()
                        .includes(groupItem.name.toLowerCase())
                        ? 'bg-white-plain'
                        : 'bg-transparent'
                    } flex items-center space-x-2 hover:bg-white-plain py-2 px-2 cursor-pointer text-xs`}
                  >
                    <div className="flex items-center gap-1">
                      <div
                        className={` ${
                          pathname
                            .toLowerCase()
                            .includes(groupItem.name.toLowerCase())
                            ? 'opacity-100'
                            : 'opacity-0'
                        } h-4 border-0 w-1 bg-blue-celtic rounded-md `}
                      ></div>
                      <groupItem.Icon className="text-black-raisin size-4" />
                    </div>
                    <span className="text-nowrap">{groupItem.name}</span>
                  </li>
                ))}
              </ul>
            </li>
          );
        }

        // If it's a SidebarItem
        const sidebarItem = item as SidebarItem;
        return (
          <li
            key={index}
            className="flex items-center cursor-pointer justify-between hover:bg-white-plain py-2 px-2 last:mb-2"
          >
            <div className="flex gap-2 items-center">
              <div className="flex items-center gap-1">
                <div
                  className={` ${
                    pathname
                      .toLowerCase()
                      .includes(sidebarItem.name.toLowerCase())
                      ? 'opacity-100'
                      : 'opacity-0'
                  } h-4 border-0 w-1 bg-blue-celtic rounded-md `}
                ></div>
                <sidebarItem.Icon className="text-black-raisin size-4" />
              </div>
              <span className="text-xs">{sidebarItem.name}</span>
            </div>

            {sidebarItem.withArrow && <IoIosArrowDown />}
          </li>
        );
      })}
    </ul>
  );
};
