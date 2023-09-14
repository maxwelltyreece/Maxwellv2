import React from "react";
import { useState } from "react";
import { Typography, Box, Tab, Tabs,Stack, Divider } from "@mui/material";
import {experienceItems} from "../data"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function JobPannel() {
    const [tabIndex, setTabIndex] = useState(0);
  
    const handleChange = (event, newTabIndex) => {
      setTabIndex(newTabIndex);
    };
  
    return (
      <Stack>
        <Divider className="bg-Khaki "/>
        <Tabs className="text-Peach pt-8" value={tabIndex} onChange={handleChange} textColor="Peach" indicatorColor="secondary" centered>
          {Object.keys(experienceItems).map((key) => (
            <Tab label={experienceItems[key]["name"]} />))}
        </Tabs>

        {Object.keys(experienceItems).map((key, i) => (
          <TabPanel value={tabIndex} index={i} >
            <span className="text-Khaki text-2xl font-comfortaa">
              <span className="text-Peach">{experienceItems[key]["jobTitle"]}</span> {" @ " + experienceItems[key]["name"]} 
            </span>
            
            <div>
              {experienceItems[key]["duration"]}
            </div>
            <ul>
              {experienceItems[key]["desc"].map(function (descItem) {
                return (
                  
                    <li>{descItem}</li>
                  
                );
              })}
            </ul>
          </TabPanel>
        ))}
    </Stack>
    );
  }
  
  export default JobPannel;