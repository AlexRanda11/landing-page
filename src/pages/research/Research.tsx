import AppTheme from "../../shared-theme/AppTheme";
import { CssBaseline, Container, Divider, Box, Card, CardContent, Typography } from "@mui/material"
import Header from "../../components/header/Header.tsx";
import Breadcrumb from "../../components/Breadcrumb.tsx";
import { researchContent } from "./Research.ts";
import TitleText from "../titleText/TitleText.tsx";
import Footer from "../../components/footer/Footer.tsx";

export default function Research() {
    return (
        <AppTheme>
            <CssBaseline enableColorScheme />
                <Header />
                <Container sx= {{ pt: { xs: 12, sm: 12 }, pb: { xs: 2, sm: 2 } }}>
                    <Breadcrumb currentPage={researchContent.title} />
                    <TitleText
                        title={researchContent.title}
                        description={researchContent.description}
                        size="h1"
                    />
                </Container>
                <Box sx={{ mb: 8 }}>
                    <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginBottom: 4,
                            pl: { sm: 9, xs: 4 },
                            pr: { sm: 9, xs: 4 },
                    }}>
                        {researchContent.projects.map((project: any) => (
                            <Card sx={{ mb: 3 }}>
                                <CardContent key={project.title}>
                                    <Typography 
                                        variant="h5"
                                        sx={project.url && { '&:hover': { textDecoration: 'underline', cursor: 'pointer' }}}
                                        onClick={() => {project.url && window.open(project.url)}}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary" sx={{ pb: '1rem' }}>
                                        {project.startDate} - {project.endDate}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ pb: '1rem' }}>
                                        {project.institutionName}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx ={{ pb: '1rem' }}>
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Container>
                </Box>
            <Divider />
            <Footer />
        </AppTheme>
    );
}