
import {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
} from '@chakra-ui/react';
import {FunctionComponent} from "react";

export const TabAA : FunctionComponent = ()=> (
    <Tabs variant="enclosed">
        <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <p>one!</p>
            </TabPanel>
            <TabPanel>
                <p>two!</p>
            </TabPanel>
        </TabPanels>
    </Tabs>
);

