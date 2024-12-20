import { Avatar } from '@mantine/core';
import React from 'react';
import { LuDot } from 'react-icons/lu';

import { BsFillEnvelopeExclamationFill } from 'react-icons/bs';

export const KeyActivitiesCard = ({
  name,
  items,
  footer,
}: {
  name: string;
  items: [{ company: string; amount: string; noOfDay: number }];
  footer: string;
}) => {
  return (
    <div className=" rounded-lg border border-black-raisin/5 gap-2 px-3 py-2 h-fit flex flex-col w-full overflow-auto">
      <div className="flex gap-1.5 h-fit">
        <Avatar />
        <div className="flex gap-1 flex-col">
          <span className="text-xs font-bold">{name}</span>
          <div>
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap text-[10px] text-black-raisin/50 text-nowrap"
              >
                <span >{item.company}</span>
                <LuDot className="text-black-raisin" />
                <span>${item.amount}</span>
                <LuDot className="text-black-raisin" />
                <span>{item.noOfDay} days to go close</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-gray-500 flex px-2 py-1 rounded-sm items-center gap-1 font-medium">
        <BsFillEnvelopeExclamationFill className="size-3" />
        <span className="text-[10px]">{footer}</span>
      </div>
    </div>
  );
};
