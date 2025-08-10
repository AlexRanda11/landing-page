import * as React from "react";
import { CssBaseline, Box, Container, Tab, Tabs } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import AppTheme from "../../shared-theme/AppTheme.tsx";
import Header from "../../components/header/Header.tsx";
import Breadcrumb from "../../components/Breadcrumb.tsx";
import { resumeContent } from "./Resume.ts";
import SkillCard from "../../components/skillCard/SkillCard.tsx";
import Experience from "../../components/experience/Experience.tsx";
import TitleText from "../titleText/TitleText.tsx";
import Education from "../../components/education/Education.tsx";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Resume() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Set the active tab based on the URL hash fragment
  React.useEffect(() => {
    const hash = location.hash.replace("#", ""); // Remove the '#' from the hash
    const tabIndex = resumeContent.tabs.indexOf(hash);
    if (tabIndex !== -1) {
      setValue(tabIndex);
    }
  }, [location.hash]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigate(`#${resumeContent.tabs[newValue]}`); // Update the URL with the hash fragment
  };

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Header />
      <Container sx={{ pt: { xs: 12, sm: 12 }, pb: { xs: 4, sm: 6 } }}>
        <Breadcrumb currentPage={resumeContent.title} subPage={resumeContent.tabs[value]}/>
        <TitleText
          title={resumeContent.title}
          description={resumeContent.description}
          size="h1"
        />
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Regular tabs example"
              variant="fullWidth"
            >
              <Tab label={resumeContent.tabs[0]} {...a11yProps(0)} />
              <Tab label={resumeContent.tabs[1]} {...a11yProps(1)} />
              <Tab label={resumeContent.tabs[2]} {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <SkillCard />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Experience />
            <Education />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            {resumeContent.comingSoonText}
          </CustomTabPanel>
        </Box>
      </Container>
    </AppTheme>
  );
}