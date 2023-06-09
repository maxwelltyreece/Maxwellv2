import React from "react";
import { useState } from "react";
import { Typography, Box, Tab, Tabs } from "@mui/material";
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
      <Box sx={{ flexGrow: 9, display: 'flex'}}>
      <Tabs orientation={"vertical"} value={tabIndex} onChange={handleChange}>
        {Object.keys(experienceItems).map((key) => (
          <Tab label={experienceItems[key]["name"]} />))}
      </Tabs>

      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={tabIndex} index={i}>
          <span>
            {experienceItems[key]["jobTitle"] + " @ " + experienceItems[key]["name"]} 
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
    </Box>
    );
  }
  
  export default JobPannel;