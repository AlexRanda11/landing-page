import AppTheme from "../../shared-theme/AppTheme";
import { CssBaseline, Box, Typography, Container } from "@mui/material"
import Header from "../../components/header/Header.tsx";
import Breadcrumb from "../../components/Breadcrumb.tsx";
import { researchContent } from "./Research.ts";

export default function Research() {
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
                            <Breadcrumb currentPage={researchContent.title}/>
                            <Box sx={{ display: 'flex', marginTop: 5, flexDirection: 'column', gap: 4 }}>
                                <Typography variant="h1" gutterBottom>
                                    {researchContent.title}
                                </Typography>
                                <Typography>{researchContent.description}</Typography>
                            </Box>
                        </div>
                    </Box>
                </Container>
        </AppTheme>
    );
}