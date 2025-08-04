import { CssBaseline, Box, Typography, Container } from "@mui/material"
import AppTheme from "../../shared-theme/AppTheme.tsx"
import Header from "../header/Header.tsx"
import Breadcrumb from "../breadcrumb/Breadcrumb.tsx"
import { resumeContent } from "./Resume.ts"

export default function Projects(props: { disableCustomTheme?: boolean }) {

    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }

    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <Header />
            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', marginTop: 15, marginBottom: 13, gap: 4 }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <div role="presentation" onClick={handleClick}>
                    <Breadcrumb />
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