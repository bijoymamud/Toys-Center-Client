import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Tabls = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>3Cards</h2>
        </TabPanel>
        <TabPanel>
          <h2>3Cards</h2>
        </TabPanel>
        <TabPanel>
          <h2>3Cards</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Tabls;