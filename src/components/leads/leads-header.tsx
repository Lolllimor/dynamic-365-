'use client';

import { Menu, Tooltip } from '@mantine/core';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { leadHeaderIconData } from '../data';
import { IoEllipsisVertical, IoFilterOutline } from 'react-icons/io5';
import { BsClipboard2Data } from 'react-icons/bs';
import { FaRegShareSquare } from 'react-icons/fa';
import { TfiLayoutColumn3 } from 'react-icons/tfi';

export const LeadsHeader = () => {
  const [title, setTitle] = useState(' open leads');
  const menuItem = [
    { title: ' closed leads' },
    { title: ' rejected leads' },
    { title: ' successful leads' },
  ];

  return (
    <div className="flex w-full bg-white-plain h-fit items-center px-2 py-1 justify-between rounded-[4px] shadow-sm">
      <Menu
        classNames={{
          itemLabel: 'w-fit !flex-none',
          item: '!w-[7rem]',
          dropdown: 'w-fit',
        }}
      >
        <Menu.Target>
          <div className="flex items-center gap-1 text-nowrap">
            <p className="cursor-pointer text-xs">My {title}</p>
            <IoIosArrowDown className="size-3" />
          </div>
        </Menu.Target>
        <Menu.Dropdown>
          {menuItem.map((item, idx) => (
            <Menu.Item key={idx}>
              <button
                className="text-xs p-0"
                onClick={() => {
                  setTitle(item.title);
                }}
              >
                {item.title}
              </button>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-3 max-[1300px]:hidden">
          {leadHeaderIconData.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1 text-nowrap">
              <item.Icon className="size-3" />
              <span className="text-xs text-black-raisin">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="h-4 bg-silver-quick w-[0.5px] border-0"></div>
        <Menu
          classNames={{
            itemLabel: 'w-fit !flex-none',
            item: '!w-[7rem] !px-2',
            dropdown: 'w-fit',
          }}
        >
          <Menu.Target>
            <Tooltip label="Options">
              <IoIosArrowDown className="size-4 hidden max-[1300px]:flex" />
            </Tooltip>
          </Menu.Target>
          <Menu.Dropdown>
            {leadHeaderIconData.map((item, idx) => (
              <Menu.Item key={idx}>
                <button
                  className="text-xs p-0 flex gap-1 items-center"
                  onClick={() => {
                    setTitle(item.title);
                  }}
                >
                        <item.Icon className='size-3'/>
                        {item.title}
                </button>
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>

        <Tooltip label="More">
          <IoEllipsisVertical className="size-4" />
        </Tooltip>
        <div className="flex items-center gap-2">
          <button className="bg-transparent  border border-silver-light px-2 py-1 flex items-center gap-2 rounded-[4px] text-nowrap">
            <BsClipboard2Data className="size-3" />
            <span className="text-xs text-black-raisin font-medium">
              Smart data
            </span>
          </button>
          <button className="bg-transparent  border border-silver-light px-2 py-1 flex items-center gap-2 rounded-[4px] text-nowrap">
            <IoFilterOutline className="size-3" />
            <span className="text-xs text-black-raisin font-medium">
              Edit filters
            </span>
          </button>
          <button className="  border border-silver-light px-2 py-1 flex items-center gap-2 rounded-[4px] text-nowrap">
            <TfiLayoutColumn3 className="size-3" />
            <span className="text-xs text-black-raisin font-medium">
              Edit columns
            </span>
          </button>
          <button className="bg-blue-celtic border border-silver-light pl-2.5 pr-2 py-1 flex items-center gap-1 rounded-[4px] text-nowrap">
            <FaRegShareSquare className="size-3 text-white-plain mr-1" />
            <div className="h-4 bg-white-plain w-[0.5px] border-0"></div>
            <IoIosArrowDown className="size-3 text-white-plain" />
          </button>
        </div>
      </div>
    </div>
  );
};
