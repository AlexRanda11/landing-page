import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import TitleText from "../../pages/titleText/TitleText.tsx";
import { educationContent } from "./Education.ts";
import SeeMore from "../see-more-button/SeeMore.tsx";

export default function Education() {
    return (
        <Box>
            <TitleText
                title={educationContent.educationTitle}
                description={educationContent.educationDescription}
                size="h2"
            />
            <Box sx={{ mb: 6 }}>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: 4,
                        pl: { xs: 6, sm: 6 },
                        pr: { xs: 6, sm: 6 },
                    }}
                >
                    <Card sx={{ mb: 3 }}>
                        <CardContent>
                        <Typography variant="h6">
                            [Degree Name] | [University Name] | [Graduation Year]
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Relevant Coursework / Key Projects (Optional, brief)
                        </Typography>
                        </CardContent>
                    </Card>
                    <SeeMore
                        text={educationContent.buttonText}
                        url="/research"
                    />
                </Container>
            </Box>
        </Box>
    );
}