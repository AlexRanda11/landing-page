import { CssBaseline, Divider, Container } from "@mui/material"
import AppTheme from "../assets/shared-theme/AppTheme"
import Header from "../components/header/Header.tsx"
import Breadcrumb from "../components/breadcrumb/Breadcrumb.tsx"

export default function Projects(props: { disableCustomTheme?: boolean }) {
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <Header />
            <Breadcrumb />
        </AppTheme>
    )
}