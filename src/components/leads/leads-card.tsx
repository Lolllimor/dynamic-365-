import { Avatar } from '@mantine/core';

import { LuDot } from 'react-icons/lu';
import { BsFillEnvelopeExclamationFill } from 'react-icons/bs';

export const LeadsCard = ({
  tag1,
  tag2,
  name,
  region,
  message,
  position,
  paragraph,
}: {
  tag1: string;
  tag2: string;
  name: string;
  region: string;
  message: string;
  position: string;
  paragraph: string;
}) => {
  return (
    <div className="flex flex-col rounded-xl  p-4 border max-[890px]:w-[clamp(18rem,20vw,40rem)] min-w-[402px] border-black-raisin/5 gap-2">
      <div className="flex gap-2 items-center">
        <Avatar />
        <div className="flex justify-between flex-col">
          <span className="text-xs font-semibold"> {name}</span>
          <div className="flex items-center ">
            <span className="text-[10px]">{position}</span>
            <LuDot className="size-3" />
            <span className="text-[10px]">{region}</span>
          </div>
        </div>
      </div>
      <div className="p-3 rounded-xl bg-[#f4f5fe] flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <BsFillEnvelopeExclamationFill className="size-3" />
          <span className="text-xs font-semibold text-nowrap ">{message}</span>
        </div>
        <p className="text-xs ">{paragraph}</p>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-[10px] text-black-raisin/50">{tag1}</span>
        <LuDot className="size-3" />
        <span className="text-[10px] text-black-raisin/50">{tag2}</span>
      </div>
    </div>
  );
};
