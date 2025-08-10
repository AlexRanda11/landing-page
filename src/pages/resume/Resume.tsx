import { CssBaseline, Container } from "@mui/material"
import AppTheme from "../../shared-theme/AppTheme.tsx"
import Header from "../../components/header/Header.tsx"
import Breadcrumb from "../../components/Breadcrumb.tsx"
import { resumeContent } from "./Resume.ts"
import SkillCard from "../../components/skillCard/SkillCard.tsx"
import Experience from "../../components/experience/Experience.tsx"
import TitleText from "../titleText/TitleText.tsx"
import Education from "../../components/education/Education.tsx"


export default function Resume() {
    return (
        <AppTheme>
            <CssBaseline enableColorScheme />
            <Header />
            <Container sx= {{ pt: { xs: 12, sm: 12 }, pb: { xs: 4, sm: 6 } }}>
                <Breadcrumb currentPage={resumeContent.title}/>
                <TitleText
                    title={resumeContent.title}
                    description={resumeContent.description}
                    size="h1"
                    />
                <SkillCard />
                <Experience />
                <Education />
            </Container>
        </AppTheme>
    )
}