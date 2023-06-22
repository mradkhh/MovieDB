import React, {FC, memo, ReactNode} from 'react';
import {Tab, TabList, TabPanel, Tabs as ReactTabs} from "react-tabs"
import cl from './Tabs.module.scss'

type TabsItem = {
    title: string,
    content: ReactNode
}

interface TabsProps {
    tabs: TabsItem[]
}

const Tabs: FC<TabsProps> = ({ tabs }) => {
    return (
        <ReactTabs>
            <TabList className={cl.Root}>
                    {
                        tabs.map(tab =>
                                <Tab key={tab.title}>
                                    <div className={cl.Title}>
                                        {tab.title}
                                    </div>
                                </Tab>
                        )
                    }
            </TabList>
            {
                tabs.map(tab =>
                       <TabPanel className={cl.Content}  key={tab.title} >{tab.content}</TabPanel>
                )
            }
        </ReactTabs>
    );
};

export default memo(Tabs);