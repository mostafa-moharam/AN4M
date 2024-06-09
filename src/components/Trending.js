import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useTrendingQuery } from "../store/movieApiSlice";
import SliderSection from "./SliderSection";

export default function Trending() {
  const element = ["day", "week"];
  const [value, setValue] = useState("day");
  const { data: trending, isLoading } = useTrendingQuery({ type: value });

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="trending">
      <h3>Trending</h3>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <div style={{ color: "#fff" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                textColor="inherit"
              >
                {element.map((e, id) => (
                  <Tab key={id} label={e} value={e} />
                ))}
              </TabList>
            </Box>
          </div>
          {element.map((e, id) => (
            <TabPanel key={id} value={e}>
              <SliderSection
                data={trending}
                slidesNum={5}
                isLoading={isLoading}
              />
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </div>
  );
}
