import React from 'react';

import { Tabs } from '../../../../components/Tabs';
import { BrandingImages } from '../BrandingImages';
import { DesignImages } from '../DesignImages';
import { DevImages } from '../DevImages';
import { StrategyImages } from '../StrategyImages';

export const TabsPage = () => {
  const tabsLinks = [
    { name: 'Branding', title: 'Branding' },
    { name: 'Design', title: 'Design' },
    { name: 'Development', title: 'Development' },
    { name: 'Strategy', title: 'Strategy' },
  ];

  const tabsContent = [
    {
      name: 'Branding',
      content: () => <BrandingImages />,
    },
    {
      name: 'Design',
      content: () => <DesignImages />,
    },
    {
      name: 'Development',
      content: () => <DevImages />,
    },
    {
      name: 'Strategy',
      content: () => <StrategyImages />,
    },
  ];

  return (
    <Tabs
      linkFullWidth
      links={tabsLinks}
      content={tabsContent}
      defaultTab={tabsLinks[0].name}
    />
  );
};
