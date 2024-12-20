import { GoCopilot } from 'react-icons/go';
import { LeadsCard } from './leads-card';
import { KeyActivities } from './key-activities';

export const LeadsMain = () => {
  return (
    <div className="flex p-5 border-2 rounded-xl w-full h-fit border-purple-ube shadow-lg bg-white-plain flex-col gap-5 overflow-auto">
      <div className="flex items-center">
        <div className="flex items-center gap-1.5">
          <GoCopilot className="size-4" />
          <p className="text-base font-bold">
            Hi Mona, <span className="text-[#282189]">68%</span> of goal
            achieved and rest can be achieved by focused on 20 top leads.
          </p>
        </div>
      </div>
      <div className="flex items-center pl-5 gap-4 h-fit">
        <div className="w-[70%] flex flex-col gap-3">
          <p className="text-sm font-normal ">
            Copilot has pinpoint 20 key leads that show string purchase intent
            and are actively engaging. These leads need your focus
          </p>
          <div className="flex items-center overflow-x-auto gap-2 w-full">
            <LeadsCard
              position="COO"
              name="Jane Reyes"
              tag1="Expand business"
              tag2="High buying intent"
              region="Northwind Traders"
              message="Engage with Jane Reyes"
              paragraph="Jane may be interested in upgrading espresso machines for her instore coffee shops."
            />
            <LeadsCard
              position="COO"
              name="Jane Reyes"
              tag1="Expand business"
              tag2="High buying intent"
              region="Northwind Traders"
              message="Engage with Jane Reyes"
              paragraph="Jane may be interested in upgrading espresso machines for her instore coffee shops."
            />
            <LeadsCard
              position="COO"
              name="Jane Reyes"
              tag1="Expand business"
              tag2="High buying intent"
              region="Northwind Traders"
              message="Engage with Jane Reyes"
              paragraph="Jane may be interested in upgrading espresso machines for her instore coffee shops."
            />
            <LeadsCard
              position="COO"
              name="Jane Reyes"
              tag1="Expand business"
              tag2="High buying intent"
              region="Northwind Traders"
              message="Engage with Jane Reyes"
              paragraph="Jane may be interested in upgrading espresso machines for her instore coffee shops."
            />
          </div>
        </div>
        <div className="h-52  border-r-2 border-dotted w-1 bg-transparent "></div>
        <div className="flex flex-col flex-1 h-full">
          <p className='text-base '>Other key activities</p>
          <KeyActivities/>
        </div>
      </div>
    </div>
  );
};
