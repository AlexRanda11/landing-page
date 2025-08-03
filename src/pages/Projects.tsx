import { CssBaseline, Divider, Container } from "@mui/material"
import AppTheme from "../assets/shared-theme/AppTheme"
import Header from "../components/header/Header.tsx"
import Hero from "../components/hero/Hero.tsx"

export default function Projects(props: { disableCustomTheme?: boolean }) {
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <Header />
            {/* <Hero /> */}
            <Divider />
        </AppTheme>
    )
}