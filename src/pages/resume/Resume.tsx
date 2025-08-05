import { CssBaseline, Divider } from "@mui/material"
import AppTheme from "../../shared-theme/AppTheme.tsx"
import Header from "../../components/header/Header.tsx"
import Breadcrumb from "../../components/Breadcrumb.tsx"
import { resumeContent } from "./Resume.ts"
import Hero from "../../components/hero/Hero.tsx"
import TitleText from "../titleText/TitleText.tsx"

export default function Resume() {
    return (
        <AppTheme>
            <CssBaseline enableColorScheme />
            <Header />
            <Hero />
            <Divider />
            <Breadcrumb currentPage={resumeContent.title}/>
            <TitleText
                title={resumeContent.title}
                description={resumeContent.comingSoonText}
                size="h1"
            />
            <TitleText
                title={resumeContent.skillsTitle}
                description={resumeContent.comingSoonText}
                size="h2"
            />
        </AppTheme>
    )
}