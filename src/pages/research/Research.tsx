import AppTheme from "../../shared-theme/AppTheme";
import { CssBaseline, Container } from "@mui/material"
import Header from "../../components/header/Header.tsx";
import Breadcrumb from "../../components/Breadcrumb.tsx";
import { researchContent } from "./Research.ts";
import TitleText from "../titleText/TitleText.tsx";

export default function Research() {
    return (
        <AppTheme>
            <CssBaseline enableColorScheme />
                <Header />
                <Container sx= {{ pt: { xs: 12, sm: 12 }, pb: { xs: 4, sm: 6 } }}>
                <Breadcrumb currentPage={researchContent.title} />
                <TitleText
                    title={researchContent.title}
                    description={researchContent.description}
                    size="h1"
                />
                </Container>
        </AppTheme>
    );
}