import { CssBaseline, Divider } from "@mui/material"
import AppTheme from "../../shared-theme/AppTheme.tsx"
import Header from "../../components/header/Header.tsx"
import Breadcrumb from "../../components/Breadcrumb.tsx"
import { resumeContent } from "./Resume.ts"
import Hero from "../../components/hero/Hero.tsx"
import TitleText from "../titleText/TitleText.tsx"
import SkillCard from "../../components/skillCard/SkillCard.tsx"

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
                description={resumeContent.description}
                size="h1"
            />
            <TitleText
                title={resumeContent.skillsTitle}
                description={resumeContent.skillsDescription}
                size="h2"
            />
            <SkillCard/>
        </AppTheme>
    )
}