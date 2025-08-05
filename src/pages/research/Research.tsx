import AppTheme from "../../shared-theme/AppTheme";
import { CssBaseline, Divider, Box, Typography, Container } from "@mui/material"
import Header from "../../components/header/Header.tsx";
import Breadcrumb from "../../components/Breadcrumb.tsx";
import { researchContent } from "./Research.ts";
import Hero from "../../components/hero/Hero.tsx";
import TitleText from "../titleText/TitleText.tsx";

export default function Research() {
    return (
        <AppTheme>
            <CssBaseline enableColorScheme />
                <Header />
                <Hero />
                <Divider />
                <Breadcrumb currentPage={researchContent.title} />
                <TitleText
                    title={researchContent.title}
                    description={researchContent.description}
                    size="h1"
                />
        </AppTheme>
    );
}