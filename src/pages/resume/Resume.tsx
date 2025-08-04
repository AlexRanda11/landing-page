import { CssBaseline, Box, Typography, Container } from "@mui/material"
import AppTheme from "../../shared-theme/AppTheme.tsx"
import Header from "../../components/header/Header.tsx"
import Breadcrumb from "../../components/Breadcrumb.tsx"
import { resumeContent } from "./Resume.ts"

export default function Resume() {
    return (
        <AppTheme>
            <CssBaseline enableColorScheme />
            <Header />
            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', marginTop: 15, marginBottom: 13, gap: 4 }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <div role="presentation">
                        <Breadcrumb currentPage={resumeContent.title}/>
                        <Box sx={{ display: 'flex', marginTop: 5, flexDirection: 'column', gap: 4 }}>
                            <Typography variant="h1" gutterBottom>
                                {resumeContent.title}
                            </Typography>
                            <Typography>{resumeContent.description}</Typography>
                        </Box>
                    </div>   
                </Box>
            </Container>
        </AppTheme>
    )
}