import React from 'react';
import { KeyActivitiesCard } from './key-activity-card';

export const KeyActivities = () => {
  return (
    <div className="flex flex-col items-start gap-2 overflow-auto">
      <KeyActivitiesCard
        footer="Review draft and reply to Chris Naido"
        name="Cafe A100 for Woodland Bank"
        items={[{ noOfDay: 8, company: 'Woodland Bank', amount: '280,000' }]}
      />
      <KeyActivitiesCard
        footer="Review draft and reply to Chris Naido"
        name="Cafe A100 for Woodland Bank"
        items={[{ noOfDay: 8, company: 'Woodland Bank', amount: '280,000' }]}
      />
    </div>
  );
};
