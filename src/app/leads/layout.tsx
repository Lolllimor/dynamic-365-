import { LeadsHeader } from '@/components/leads/leads-header';
import { ReactNode } from 'react';

export default function LeadsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 p-3 bg-gray-light overflow-auto w-full">
      <LeadsHeader />
      {children}
    </div>
  );
}
