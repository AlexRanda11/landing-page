import { CssBaseline, Container } from "@mui/material"
import AppTheme from "../../shared-theme/AppTheme.tsx"
import Header from "../../components/header/Header.tsx"
import Breadcrumb from "../../components/Breadcrumb.tsx"
import { resumeContent } from "./Resume.ts"
import TitleText from "../titleText/TitleText.tsx"
import SkillCard from "../../components/skillCard/SkillCard.tsx"

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
                <TitleText
                    title={resumeContent.skillsTitle}
                    description={resumeContent.skillsDescription}
                    size="h2"
                    />
                <SkillCard/>
            </Container>
        </AppTheme>
    )
}