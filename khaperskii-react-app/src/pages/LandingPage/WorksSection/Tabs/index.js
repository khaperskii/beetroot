import React from 'react'

import { Tabs } from '..//..//..//..//components/Tabs'
import WorksImages from '..//WorksImages'


 export const TabsPage = () => {
     const tabsLinks = [
         { name: 'All', title: 'All' },
         { name: 'Branding', title: 'Branding' },
         { name: 'Design', title: 'Design' },
         { name: 'Development', title: 'Development' },
         { name: 'Strategy', title: 'Strategy' },
     ];

     const tabsContent = [
         {  
             name: 'All',
             content: () => <WorksImages />,
         },
         {  
            name: 'Branding',
            content: () => <WorksImages />,
        },
        {  
            name: 'Design',
            content: () => <WorksImages />,
        },
        {  
            name: 'Development',
            content: () => <WorksImages />,
        },
        {  
            name: 'Strategy',
            content: () => <WorksImages />,
        },
     ]

     return (
         <Tabs 
            links={tabsLinks} 
            content={tabsContent} 
            defaultTab={tabsLinks[0].name} />
     )
 }
