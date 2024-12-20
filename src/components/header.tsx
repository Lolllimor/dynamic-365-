'use client';
import React, { useEffect, useState } from 'react';

import { LuGrip } from 'react-icons/lu';
import { SlBulb } from 'react-icons/sl';
import { IoAdd } from 'react-icons/io5';
import { IoMenu } from 'react-icons/io5';
import { BsPersonVideo3 } from 'react-icons/bs';
import { RiQuestionMark } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';

import { Tooltip, Button, Avatar } from '@mantine/core';

export const Header = () => {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOnline(window.navigator.onLine);
    }
  }, []);
  const icons = [
    { icon: <SlBulb />, message: 'More Info' },
    { icon: <IoAdd className="size-5" />, message: 'Add' },
    { icon: <IoSettingsOutline />, message: 'Settings' },
    { icon: <RiQuestionMark />, message: 'Help' },
    { icon: <BsPersonVideo3 />, message: 'Project' },
  ];
  return (
    <header className="w-full bg-blue-cetacean h-12 text-white-plain/70 flex justify-between items-center px-5">
      <div className="flex items-center gap-6">
        <LuGrip className="size-6" />
        <div className=" flex gap-2 h-fit items-center">
          <span className="font-semibold text-[clamp(16px,10vw,8px)] ">
            Dynamics 365
          </span>
          <div className="h-6 w-[0.5px] bg-white-plain/70 border-0"></div>
          <span className="font-normal text-sm">Sales hub</span>
        </div>
      </div>
      <div className=" flex  items-center gap-5 max-[582px]:hidden ">
        {icons.map((item, idx) => (
          <Tooltip key={idx} label={item.message} className="cursor-pointer">
            <Button
              variant="transparent"
              style={{
                color: '#fff',
                padding: 0,
              }}
            >
              {item.icon}
            </Button>
          </Tooltip>
        ))}

        <div className="relative flex bg-transparent hover:bg-transparent h-fit w-fit rounded-full p-0 cursor-pointer">
          <Avatar radius="xl" className="w-8 h-8 border-[0.5px] border-white-anitflash" />
          <div
            className={`${
              online ? 'bg-green-600' : 'bg-[#3c3d3e]'
            } flex h-[12px] w-[12px] border-2 rounded-full absolute bottom-0 right-[-1px]`}
          ></div>
        </div>
      </div>
    </header>
  );
};
