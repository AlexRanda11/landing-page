import { Box, Container, Typography, Card,  CardContent } from "@mui/material";
import { experienceContent } from "./Experience.ts";
import TitleText from "../../pages/titleText/TitleText.tsx";

export default function Experience() {
    return (
        <Box>
            <TitleText
                title={experienceContent.experienceTitle}
                description={experienceContent.experienceDescription}
                size="h2"
            />
            <Box sx={{ mb: 6 }}>
                <Container
                    sx={{
                        marginBottom: 4,
                        pl: { xs: 6, sm: 6 },
                        pr: { xs: 6, sm: 6 },
                    }}
                    >
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                        <Typography variant="h6">
                            [Your Latest Job Title] | [Company Name] | [Start Date] – [End Date]
                        </Typography>
                        <ul>
                            <li><Typography variant="body1">**Key Responsibility 1:** Briefly describe a major duty.</Typography></li>
                            <li><Typography variant="body1">**Achievement 1:** Quantify an accomplishment (e.g., "Increased efficiency by 15% through X").</Typography></li>
                        </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                        <Typography variant="h6">
                            [Previous Job Title] | [Company Name] | [Start Date] – [End Date]
                        </Typography>
                        <ul>
                            <li><Typography variant="body1">**Key Responsibility 1:** Briefly describe a major duty.</Typography></li>
                            <li><Typography variant="body1">**Achievement 1:** Quantify an accomplishment.</Typography></li>
                        </ul>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </Box>
    );
}