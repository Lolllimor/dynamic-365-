import { BsPinAngle } from 'react-icons/bs';
import { GiJetFighter } from 'react-icons/gi';
import { CiCircleList } from 'react-icons/ci';
import { TbPhoneCalling } from 'react-icons/tb';
import { FaClipboardList } from 'react-icons/fa';
import { LiaBoxOpenSolid } from 'react-icons/lia';
import { LuLayoutDashboard } from 'react-icons/lu';
import { VscFileSubmodule } from 'react-icons/vsc';
import { IoAdd, IoRefreshOutline } from 'react-icons/io5';
import { FaPersonCircleQuestion } from 'react-icons/fa6';
import { RiLineChartLine, RiDeleteBin6Line } from 'react-icons/ri';
import { IoHomeOutline, IoTimeOutline, IoPerson } from 'react-icons/io5';
import { MdOutlineRequestQuote, MdOutlineCampaign } from 'react-icons/md';

import { IconType } from 'react-icons/lib';

type leadHeaderIconDataType = {
  title: string;
  Icon: IconType;
  color?: string;
};

type SidebarItem = {
  name: string;
  Icon: IconType;
  withArrow?: boolean;
  path?: string;
};

type SidebarGroup = {
  [key: string]: SidebarItem[];
};

export const sidebarData: (SidebarItem | SidebarGroup)[] = [
  { name: 'Home', Icon: IoHomeOutline, path: '/home' },
  { name: 'Recent', Icon: IoTimeOutline, withArrow: true },
  { name: 'Pinned', Icon: BsPinAngle, withArrow: true },
  {
    'My work': [
      {
        name: 'Sales accelerator',
        Icon: GiJetFighter,
        path: '/sales-accelerator',
      },
      { name: 'Dashboards', Icon: LuLayoutDashboard, path: '/dashboard' },
      { name: 'Activities', Icon: IoHomeOutline, path: '/activities' },
    ],
  },
  {
    Customers: [
      { name: 'Accounts', Icon: VscFileSubmodule, path: '/accounts' },
      { name: 'Contacts', Icon: IoPerson, path: '/contacts' },
    ],
  },
  {
    Sales: [
      { name: 'Leads', Icon: TbPhoneCalling, path: '/leads' },
      { name: 'Opportunities', Icon: IoHomeOutline, path: '/opportunities' },
      {
        name: 'Competitors',
        Icon: FaPersonCircleQuestion,
        path: '/competitors',
      },
    ],
  },
  {
    Collateral: [
      { name: 'Quotes', Icon: MdOutlineRequestQuote, path: '/quotes' },
      { name: 'Orders', Icon: IoHomeOutline, path: '/orders' },
      { name: 'Invoices', Icon: FaClipboardList, path: '/invoices' },
      { name: 'Products', Icon: LiaBoxOpenSolid, path: '/products' },
      { name: 'Sales Literature', Icon: IoHomeOutline, path: '/literature' },
    ],
  },
  {
    Marketing: [
      { name: 'Marketing lists', Icon: IoHomeOutline, path: '/marketing-list' },
      {
        name: 'Quick Campaigns',
        Icon: MdOutlineCampaign,
        path: '/quick campaigns',
      },
    ],
  },
];

export const leadHeaderIconData = [
  { title: 'Show chart', Icon: RiLineChartLine },
  { title: 'Focused view', Icon: CiCircleList, color: '#' },
  { title: 'New', Icon: IoAdd },
  { title: 'Refresh', Icon: IoRefreshOutline },
  { title: 'Collaborate', Icon: RiLineChartLine },
  { title: 'Delete', Icon: RiDeleteBin6Line },
];
