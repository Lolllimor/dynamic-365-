import { sidebarData } from './data';

import { Tooltip } from '@mantine/core';

import { IconType } from 'react-icons/lib';

type SidebarItem = {
  name: string;
  Icon: IconType;
};

export const SidebarIcons = () => {
  return (
    <div className="flex  flex-col w-full overflow-auto">
      {sidebarData.map((item, idx) => {
        if (typeof item === 'object' && !('Icon' in item)) {
          const [groupName, groupItems] = Object.entries(item)[0];
          return groupItems.map((groupItem) => (
            <div className="w-full hover:bg-white-plain py-2 flex items-center justify-center">
              <Tooltip label={groupItem.name} className="text-white-plain">
                <groupItem.Icon key={groupItem.name} className="size-4 " />
              </Tooltip>
            </div>
          ));
        }

        const sidebarItem = item as SidebarItem;
        return (
          <div className="w-full hover:bg-white-plain py-2 flex items-center justify-center">
            <Tooltip label={sidebarItem.name} className="text-white-plain">
              <sidebarItem.Icon key={sidebarItem.name} className="size-4 " />
            </Tooltip>
          </div>
        );
      })}
    </div>
  );
};
